<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, Notion-Version");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// -------------------------------------------------------------
// SECRETS (Estos valores solo vivirán en el servidor de Hostinger)
// -------------------------------------------------------------
$NOTION_API_KEY = "ntn_T11301963012CedNrp97xXVWCANka6U6okpKIAdQ39i9mv";
$DATABASE_ID = "31a0435d6d4d801996acf976f5b7918f";
$NOTION_VERSION = "2022-06-28";

$action = isset($_GET['action']) ? $_GET['action'] : '';

function executeNotionRequest($url, $method = 'GET', $body = null) {
    global $NOTION_API_KEY, $NOTION_VERSION;
    
    $headers = [
        "Authorization: Bearer " . $NOTION_API_KEY,
        "Notion-Version: " . $NOTION_VERSION,
        "Content-Type: application/json"
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    
    if ($method === 'POST') {
        curl_setopt($ch, CURLOPT_POST, true);
        if ($body) {
            curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
        }
    }

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    
    if (curl_errno($ch)) {
        http_response_code(500);
        echo json_encode(['error' => curl_error($ch)]);
        exit;
    }
    
    curl_close($ch);
    http_response_code($httpCode);
    return $response;
}

header('Content-Type: application/json');

// --- RUTAS DE LA API ---

// 1. Obtener todos los artículos (Consulta a la Base de Datos)
if ($action === 'getPosts') {
    $url = "https://api.notion.com/v1/databases/" . $DATABASE_ID . "/query";
    $body = json_encode([
        'filter' => [
            'property' => 'Publicado',
            'checkbox' => ['equals' => true]
        ],
        'sorts' => [
            ['property' => 'Fecha', 'direction' => 'descending']
        ]
    ]);
    
    echo executeNotionRequest($url, 'POST', $body);
    exit;
}

// 2. Obtener el contenido de un bloque / página específico
if ($action === 'getBlocks' && isset($_GET['blockId'])) {
    $blockId = $_GET['blockId'];
    $url = "https://api.notion.com/v1/blocks/" . $blockId . "/children?page_size=100";
    
    echo executeNotionRequest($url, 'GET');
    exit;
}

// Ruta no encontrada
http_response_code(404);
echo json_encode(['error' => 'Acción no válida o no especificada']);
