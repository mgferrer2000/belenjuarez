<?php

header('Content-Type: application/json');

function loadDotEnv(string $filePath): void {
    if (!is_readable($filePath)) {
        return;
    }

    $lines = file($filePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    if ($lines === false) {
        return;
    }

    foreach ($lines as $line) {
        $trimmed = trim($line);
        if ($trimmed === '' || str_starts_with($trimmed, '#') || strpos($trimmed, '=') === false) {
            continue;
        }

        [$key, $value] = explode('=', $trimmed, 2);
        $key = trim($key);
        $value = trim($value, " \t\n\r\0\x0B\"'");

        if ($key !== '' && getenv($key) === false) {
            putenv($key . '=' . $value);
            $_ENV[$key] = $value;
            $_SERVER[$key] = $value;
        }
    }
}

function readConfigValue(array $keys) {
    foreach ($keys as $key) {
        $value = getenv($key);
        if ($value !== false && $value !== '') {
            return $value;
        }

        if (!empty($_ENV[$key])) {
            return $_ENV[$key];
        }

        if (!empty($_SERVER[$key])) {
            return $_SERVER[$key];
        }
    }

    return null;
}

function allowSameOriginCors(): void {
    if (empty($_SERVER['HTTP_ORIGIN']) || empty($_SERVER['HTTP_HOST'])) {
        return;
    }

    $originHost = parse_url($_SERVER['HTTP_ORIGIN'], PHP_URL_HOST);
    $requestHost = preg_replace('/:\d+$/', '', $_SERVER['HTTP_HOST']);

    if ($originHost === $requestHost) {
        header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
        header('Vary: Origin');
        header('Access-Control-Allow-Methods: GET, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type');
    }
}

function respondJson(int $statusCode, array $payload): void {
    http_response_code($statusCode);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

loadDotEnv(__DIR__ . '/../.env');
allowSameOriginCors();

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$NOTION_API_KEY = readConfigValue(['NOTION_API_KEY', 'VITE_NOTION_API_KEY']);
$DATABASE_ID = readConfigValue(['NOTION_DATABASE_ID', 'VITE_NOTION_DATABASE_ID']) ?: '31a0435d6d4d801996acf976f5b7918f';
$NOTION_VERSION = readConfigValue(['NOTION_VERSION']) ?: '2022-06-28';
$action = $_GET['action'] ?? '';

if (!$NOTION_API_KEY) {
    respondJson(500, ['error' => 'Missing NOTION_API_KEY server configuration']);
}

function executeNotionRequest(string $url, string $apiKey, string $notionVersion, string $method = 'GET', ?string $body = null): array {
    $headers = [
        'Authorization: Bearer ' . $apiKey,
        'Notion-Version: ' . $notionVersion,
        'Content-Type: application/json',
    ];

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
        return [
            'ok' => false,
            'status' => 502,
            'body' => ['error' => 'Failed to reach Notion', 'details' => $error],
        ];
    }

    curl_close($ch);
    $decoded = json_decode($response, true);

    return [
        'ok' => $httpCode >= 200 && $httpCode < 300,
        'status' => $httpCode,
        'body' => $decoded ?? ['raw' => $response],
    ];
}

function publishedPostsQueryBody(): string {
    return json_encode([
        'filter' => [
            'property' => 'Publicado',
            'checkbox' => ['equals' => true],
        ],
        'sorts' => [
            ['property' => 'Fecha', 'direction' => 'descending'],
        ],
        'page_size' => 100,
    ], JSON_UNESCAPED_UNICODE);
}

function fetchPublishedPosts(string $databaseId, string $apiKey, string $notionVersion): array {
    $url = 'https://api.notion.com/v1/databases/' . rawurlencode($databaseId) . '/query';
    return executeNotionRequest($url, $apiKey, $notionVersion, 'POST', publishedPostsQueryBody());
}

function isValidNotionId(string $value): bool {
    return preg_match('/^[a-f0-9-]{32,36}$/i', $value) === 1;
}

if ($action === 'getPosts') {
    $result = fetchPublishedPosts($DATABASE_ID, $NOTION_API_KEY, $NOTION_VERSION);
    respondJson($result['status'], $result['body']);
}

if ($action === 'getBlocks') {
    $blockId = $_GET['blockId'] ?? '';

    if (!$blockId || !isValidNotionId($blockId)) {
        respondJson(400, ['error' => 'Invalid blockId']);
    }

    $postsResult = fetchPublishedPosts($DATABASE_ID, $NOTION_API_KEY, $NOTION_VERSION);
    if (!$postsResult['ok']) {
        respondJson($postsResult['status'], $postsResult['body']);
    }

    $publishedIds = array_map(
        static function ($page) {
            return $page['id'] ?? null;
        },
        $postsResult['body']['results'] ?? []
    );

    if (!in_array($blockId, array_filter($publishedIds), true)) {
        respondJson(403, ['error' => 'Block is not available']);
    }

    $url = 'https://api.notion.com/v1/blocks/' . rawurlencode($blockId) . '/children?page_size=100';
    $result = executeNotionRequest($url, $NOTION_API_KEY, $NOTION_VERSION);
    respondJson($result['status'], $result['body']);
}

respondJson(404, ['error' => 'Acción no válida o no especificada']);
