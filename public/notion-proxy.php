<?php

header('Content-Type: application/json');

function loadDotEnv($filePath) {
    if (!$filePath || !is_readable($filePath)) {
        return;
    }

    $lines = file($filePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    if ($lines === false) {
        return;
    }

    foreach ($lines as $line) {
        $trimmed = trim($line);
        if ($trimmed === '' || substr($trimmed, 0, 1) === '#' || strpos($trimmed, '=') === false) {
            continue;
        }

        list($key, $value) = explode('=', $trimmed, 2);
        $key = trim($key);
        $value = trim($value, " \t\n\r\0\x0B\"'");

        if ($key !== '' && getenv($key) === false) {
            putenv($key . '=' . $value);
            $_ENV[$key] = $value;
            $_SERVER[$key] = $value;
        }
    }
}

function loadProjectEnv() {
    $candidates = array(
        __DIR__ . '/.env',
        dirname(__DIR__) . '/.env',
    );

    if (function_exists('getcwd')) {
        $cwd = getcwd();
        if ($cwd) {
            $candidates[] = $cwd . '/.env';
        }
    }

    foreach ($candidates as $candidate) {
        if (is_readable($candidate)) {
            loadDotEnv($candidate);
            return;
        }
    }
}

function readConfigValue($keys) {
    foreach ($keys as $key) {
        $value = getenv($key);
        if ($value !== false && $value !== '') {
            return $value;
        }

        if (isset($_ENV[$key]) && $_ENV[$key] !== '') {
            return $_ENV[$key];
        }

        if (isset($_SERVER[$key]) && $_SERVER[$key] !== '') {
            return $_SERVER[$key];
        }
    }

    return null;
}

function allowSameOriginCors() {
    if (empty($_SERVER['HTTP_ORIGIN']) || empty($_SERVER['HTTP_HOST'])) {
        return;
    }

    $originHost = parse_url($_SERVER['HTTP_ORIGIN'], PHP_URL_HOST);
    $requestHost = preg_replace('/:\\d+$/', '', $_SERVER['HTTP_HOST']);

    if ($originHost === $requestHost) {
        header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
        header('Vary: Origin');
        header('Access-Control-Allow-Methods: GET, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type');
    }
}

function respondJson($statusCode, $payload) {
    http_response_code((int) $statusCode);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

function executeNotionRequest($url, $apiKey, $notionVersion, $method, $body) {
    $headers = array(
        'Authorization: Bearer ' . $apiKey,
        'Notion-Version: ' . $notionVersion,
        'Content-Type: application/json',
    );

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 20);

    if ($method === 'POST') {
        curl_setopt($ch, CURLOPT_POST, true);
        if ($body !== null) {
            curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
        }
    }

    $response = curl_exec($ch);
    $httpCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);

    if ($response === false) {
        $error = curl_error($ch);
        curl_close($ch);
        return array(
            'ok' => false,
            'status' => 502,
            'body' => array('error' => 'Failed to reach Notion', 'details' => $error),
        );
    }

    curl_close($ch);
    $decoded = json_decode($response, true);

    return array(
        'ok' => $httpCode >= 200 && $httpCode < 300,
        'status' => $httpCode,
        'body' => $decoded !== null ? $decoded : array('raw' => $response),
    );
}

function publishedPostsQueryBody() {
    return json_encode(array(
        'filter' => array(
            'property' => 'Publicado',
            'checkbox' => array('equals' => true),
        ),
        'page_size' => 100,
    ), JSON_UNESCAPED_UNICODE);
}

function fetchPublishedPosts($databaseId, $apiKey, $notionVersion) {
    $url = 'https://api.notion.com/v1/databases/' . rawurlencode($databaseId) . '/query';
    return executeNotionRequest($url, $apiKey, $notionVersion, 'POST', publishedPostsQueryBody());
}

function isValidNotionId($value) {
    return preg_match('/^[a-f0-9-]{32,36}$/i', $value) === 1;
}

function redirectToOriginalImage($url) {
    header('Cache-Control: private, max-age=300');
    header('Location: ' . $url, true, 302);
    exit;
}

function fetchRemoteImage($url) {
    $body = '';
    $maxBytes = 20 * 1024 * 1024;
    $tooLarge = false;
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_MAXREDIRS, 3);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 8);
    curl_setopt($ch, CURLOPT_TIMEOUT, 25);
    curl_setopt($ch, CURLOPT_WRITEFUNCTION, function ($curl, $chunk) use (&$body, $maxBytes, &$tooLarge) {
        if (strlen($body) + strlen($chunk) > $maxBytes) {
            $tooLarge = true;
            return 0;
        }

        $body .= $chunk;
        return strlen($chunk);
    });

    $success = curl_exec($ch);
    $status = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $contentType = (string) curl_getinfo($ch, CURLINFO_CONTENT_TYPE);
    curl_close($ch);

    if ($success === false || $tooLarge || $status < 200 || $status >= 300 || strpos($contentType, 'image/') !== 0) {
        return null;
    }

    return $body;
}

function createMobileWebp($source, $targetWidth) {
    if (!function_exists('imagecreatefromstring') || !function_exists('imagewebp')) {
        return null;
    }

    $dimensions = @getimagesizefromstring($source);
    if (!$dimensions || empty($dimensions[0]) || empty($dimensions[1])) {
        return null;
    }

    $sourceWidth = (int) $dimensions[0];
    $sourceHeight = (int) $dimensions[1];

    // Avoid exhausting shared-hosting memory on exceptionally large originals.
    if ($sourceWidth * $sourceHeight > 40000000) {
        return null;
    }

    $image = @imagecreatefromstring($source);
    if (!$image) {
        return null;
    }

    $outputWidth = min($sourceWidth, $targetWidth);
    $outputHeight = max(1, (int) round($sourceHeight * ($outputWidth / $sourceWidth)));
    $output = imagecreatetruecolor($outputWidth, $outputHeight);

    if (!$output) {
        imagedestroy($image);
        return null;
    }

    imagealphablending($output, false);
    imagesavealpha($output, true);
    $transparent = imagecolorallocatealpha($output, 0, 0, 0, 127);
    imagefilledrectangle($output, 0, 0, $outputWidth, $outputHeight, $transparent);

    imagecopyresampled(
        $output,
        $image,
        0,
        0,
        0,
        0,
        $outputWidth,
        $outputHeight,
        $sourceWidth,
        $sourceHeight
    );

    ob_start();
    $encoded = imagewebp($output, null, 77);
    $webp = ob_get_clean();
    imagedestroy($output);
    imagedestroy($image);

    return $encoded && $webp !== false ? $webp : null;
}

function serveWebp($contents) {
    $etag = '"' . hash('sha256', $contents) . '"';

    if (isset($_SERVER['HTTP_IF_NONE_MATCH']) && trim($_SERVER['HTTP_IF_NONE_MATCH']) === $etag) {
        header('ETag: ' . $etag);
        header('Cache-Control: public, max-age=86400, stale-while-revalidate=604800');
        http_response_code(304);
        exit;
    }

    header('Content-Type: image/webp');
    header('Content-Length: ' . strlen($contents));
    header('Cache-Control: public, max-age=86400, stale-while-revalidate=604800');
    header('ETag: ' . $etag);
    echo $contents;
    exit;
}

function serveMobileNotionImage($apiKey, $notionVersion) {
    $blockId = isset($_GET['blockId']) ? $_GET['blockId'] : '';
    $pageId = isset($_GET['pageId']) ? $_GET['pageId'] : '';
    $targetWidth = isset($_GET['width']) ? (int) $_GET['width'] : 960;

    if (!in_array($targetWidth, array(640, 960), true)) {
        respondJson(400, array('error' => 'Invalid image width'));
    }

    if ($blockId && isValidNotionId($blockId)) {
        $entityId = $blockId;
        $entityKind = 'block';
        $notionUrl = 'https://api.notion.com/v1/blocks/' . rawurlencode($blockId);
    } elseif ($pageId && isValidNotionId($pageId)) {
        $entityId = $pageId;
        $entityKind = 'cover';
        $notionUrl = 'https://api.notion.com/v1/pages/' . rawurlencode($pageId);
    } else {
        respondJson(400, array('error' => 'Invalid image identifier'));
    }

    $cacheDirectory = __DIR__ . '/.notion-image-cache';
    $cacheKey = hash('sha256', $entityKind . ':' . $entityId . ':' . $targetWidth . ':77');
    $cachePath = $cacheDirectory . '/' . $cacheKey . '.webp';
    $cacheLifetime = 86400;

    if (is_readable($cachePath) && filemtime($cachePath) >= time() - $cacheLifetime) {
        $cached = file_get_contents($cachePath);
        if ($cached !== false) {
            serveWebp($cached);
        }
    }

    $result = executeNotionRequest($notionUrl, $apiKey, $notionVersion, 'GET', null);
    if (!$result['ok']) {
        respondJson($result['status'], $result['body']);
    }

    $entity = $result['body'];
    if ($entityKind === 'block') {
        $image = isset($entity['type'], $entity['image']) && $entity['type'] === 'image' ? $entity['image'] : null;
    } else {
        $image = isset($entity['cover']) ? $entity['cover'] : null;
    }

    if (!$image || !isset($image['type'])) {
        respondJson(404, array('error' => 'Notion image not found'));
    }

    // External URLs are redirected to the browser, never fetched by this server.
    if ($image['type'] === 'external' && !empty($image['external']['url'])) {
        redirectToOriginalImage($image['external']['url']);
    }

    if ($image['type'] !== 'file' || empty($image['file']['url'])) {
        respondJson(404, array('error' => 'Notion image not found'));
    }

    $originalUrl = $image['file']['url'];
    $source = fetchRemoteImage($originalUrl);
    if ($source === null) {
        redirectToOriginalImage($originalUrl);
    }

    $webp = createMobileWebp($source, $targetWidth);
    if ($webp === null) {
        redirectToOriginalImage($originalUrl);
    }

    if ((!is_dir($cacheDirectory) && @mkdir($cacheDirectory, 0755, true)) || is_dir($cacheDirectory)) {
        $temporaryPath = $cachePath . '.' . uniqid('', true) . '.tmp';
        if (@file_put_contents($temporaryPath, $webp, LOCK_EX) !== false) {
            @rename($temporaryPath, $cachePath);
        } else {
            @unlink($temporaryPath);
        }
    }

    serveWebp($webp);
}

loadProjectEnv();
allowSameOriginCors();

if (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$NOTION_API_KEY = readConfigValue(array('NOTION_API_KEY', 'VITE_NOTION_API_KEY'));
$DATABASE_ID = readConfigValue(array('NOTION_DATABASE_ID', 'VITE_NOTION_DATABASE_ID'));
$NOTION_VERSION = readConfigValue(array('NOTION_VERSION'));
$action = isset($_GET['action']) ? $_GET['action'] : '';

if (!$DATABASE_ID) {
    $DATABASE_ID = '31a0435d6d4d801996acf976f5b7918f';
}

if (!$NOTION_VERSION) {
    $NOTION_VERSION = '2022-06-28';
}

if (!$NOTION_API_KEY) {
    respondJson(500, array('error' => 'Missing NOTION_API_KEY server configuration'));
}

if ($action === 'getImage') {
    serveMobileNotionImage($NOTION_API_KEY, $NOTION_VERSION);
}

if ($action === 'getPosts') {
    $result = fetchPublishedPosts($DATABASE_ID, $NOTION_API_KEY, $NOTION_VERSION);
    respondJson($result['status'], $result['body']);
}

if ($action === 'getPost') {
    $pageId = isset($_GET['pageId']) ? $_GET['pageId'] : '';

    if (!$pageId || !isValidNotionId($pageId)) {
        respondJson(400, array('error' => 'Invalid pageId'));
    }

    $url = 'https://api.notion.com/v1/pages/' . rawurlencode($pageId);
    $result = executeNotionRequest($url, $NOTION_API_KEY, $NOTION_VERSION, 'GET', null);
    respondJson($result['status'], $result['body']);
}

if ($action === 'getBlocks') {
    $blockId = isset($_GET['blockId']) ? $_GET['blockId'] : '';

    if (!$blockId || !isValidNotionId($blockId)) {
        respondJson(400, array('error' => 'Invalid blockId'));
    }

    $url = 'https://api.notion.com/v1/blocks/' . rawurlencode($blockId) . '/children?page_size=100';
    $result = executeNotionRequest($url, $NOTION_API_KEY, $NOTION_VERSION, 'GET', null);
    respondJson($result['status'], $result['body']);
}

respondJson(404, array('error' => 'Acción no válida o no especificada'));
