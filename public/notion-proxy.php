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
        'sorts' => array(
            array('property' => 'Fecha', 'direction' => 'descending'),
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

if ($action === 'getPosts') {
    $result = fetchPublishedPosts($DATABASE_ID, $NOTION_API_KEY, $NOTION_VERSION);
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
