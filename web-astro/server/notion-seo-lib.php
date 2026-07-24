<?php

function seo_load_dot_env($path) {
    if (!$path || !is_readable($path)) {
        return;
    }

    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    if ($lines === false) {
        return;
    }

    foreach ($lines as $line) {
        $line = trim($line);
        if ($line === '' || substr($line, 0, 1) === '#' || strpos($line, '=') === false) {
            continue;
        }

        list($key, $value) = explode('=', $line, 2);
        $key = trim($key);
        $value = trim($value, " \t\n\r\0\x0B\"'");
        if ($key !== '' && getenv($key) === false) {
            putenv($key . '=' . $value);
            $_ENV[$key] = $value;
            $_SERVER[$key] = $value;
        }
    }
}

function seo_load_environment() {
    $candidates = array(__DIR__ . '/.env', dirname(__DIR__) . '/.env', dirname(dirname(__DIR__)) . '/.env');
    foreach ($candidates as $candidate) {
        if (is_readable($candidate)) {
            seo_load_dot_env($candidate);
            return;
        }
    }
}

function seo_env($keys) {
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

function seo_config() {
    static $config = null;
    if ($config !== null) {
        return $config;
    }

    seo_load_environment();
    $config = array(
        'key' => seo_env(array('NOTION_API_KEY', 'VITE_NOTION_API_KEY')),
        'blog' => seo_env(array('NOTION_DATABASE_ID', 'VITE_NOTION_DATABASE_ID')),
        'reviews' => seo_env(array('NOTION_REVIEWS_DATABASE_ID', 'VITE_NOTION_REVIEWS_DATABASE_ID')),
        'version' => seo_env(array('NOTION_VERSION')) ?: '2022-06-28',
    );
    if (!$config['blog']) {
        $config['blog'] = '31a0435d6d4d801996acf976f5b7918f';
    }
    return $config;
}

function seo_valid_notion_id($value) {
    return is_string($value) && preg_match('/^[a-f0-9-]{32,36}$/i', $value) === 1;
}

function seo_normalized_id($value) {
    return strtolower(str_replace('-', '', (string) $value));
}

function seo_notion_request($path, $method = 'GET', $body = null) {
    $config = seo_config();
    if (!$config['key']) {
        return array('ok' => false, 'status' => 500, 'body' => array('error' => 'Missing NOTION_API_KEY'));
    }

    $headers = array(
        'Authorization: Bearer ' . $config['key'],
        'Notion-Version: ' . $config['version'],
        'Content-Type: application/json',
    );
    $ch = curl_init('https://api.notion.com/v1/' . ltrim($path, '/'));
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 8);
    curl_setopt($ch, CURLOPT_TIMEOUT, 25);
    if ($method === 'POST') {
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($body, JSON_UNESCAPED_UNICODE));
    }

    $response = curl_exec($ch);
    $status = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
    if ($response === false) {
        $error = curl_error($ch);
        curl_close($ch);
        return array('ok' => false, 'status' => 502, 'body' => array('error' => $error));
    }
    curl_close($ch);
    $decoded = json_decode($response, true);
    return array(
        'ok' => $status >= 200 && $status < 300,
        'status' => $status,
        'body' => is_array($decoded) ? $decoded : array('error' => 'Invalid Notion response'),
    );
}

function seo_property($page, $names, $type = null) {
    $properties = isset($page['properties']) && is_array($page['properties']) ? $page['properties'] : array();
    foreach ($properties as $name => $property) {
        foreach ($names as $candidate) {
            if (strcasecmp((string) $name, (string) $candidate) === 0 && (!$type || (isset($property['type']) && $property['type'] === $type))) {
                return $property;
            }
        }
    }
    if ($type) {
        foreach ($properties as $property) {
            if (isset($property['type']) && $property['type'] === $type) {
                return $property;
            }
        }
    }
    return null;
}

function seo_rich_plain($items) {
    $text = '';
    if (!is_array($items)) {
        return $text;
    }
    foreach ($items as $item) {
        if (isset($item['plain_text'])) {
            $text .= $item['plain_text'];
        }
    }
    return trim($text);
}

function seo_page_title($page) {
    $property = seo_property($page, array('Título', 'Titulo', 'Name', 'Title'), 'title');
    return $property && isset($property['title']) ? seo_rich_plain($property['title']) : '';
}

function seo_page_date($page) {
    $property = seo_property($page, array('Fecha', 'Date'), 'date');
    if ($property && !empty($property['date']['start'])) {
        return $property['date']['start'];
    }
    return isset($page['created_time']) ? $page['created_time'] : '';
}

function seo_page_tags($page) {
    $property = seo_property($page, array('Etiqueta', 'Etiquetas', 'Tag', 'Tags'));
    if (!$property || empty($property['type'])) {
        return array();
    }
    if ($property['type'] === 'multi_select' && isset($property['multi_select'])) {
        return array_values(array_filter(array_map(function ($item) {
            return isset($item['name']) ? trim($item['name']) : '';
        }, $property['multi_select'])));
    }
    if ($property['type'] === 'select' && !empty($property['select']['name'])) {
        return array(trim($property['select']['name']));
    }
    return array();
}

function seo_page_language($page) {
    $property = seo_property($page, array('Idioma', 'Language', 'Langue'), 'select');
    return $property && !empty($property['select']['name']) ? $property['select']['name'] : 'Español';
}

function seo_page_original_id($page) {
    $property = seo_property($page, array('Original ES', 'Original español'), 'rich_text');
    return $property && isset($property['rich_text']) ? seo_rich_plain($property['rich_text']) : '';
}

function seo_page_published($page) {
    $property = seo_property($page, array('Publicado', 'Published'), 'checkbox');
    return $property && !empty($property['checkbox']);
}

function seo_page_cover($page) {
    $cover = isset($page['cover']) ? $page['cover'] : null;
    if (!$cover || empty($cover['type'])) {
        return '';
    }
    return $cover['type'] === 'file' && !empty($cover['file']['url'])
        ? $cover['file']['url']
        : (!empty($cover['external']['url']) ? $cover['external']['url'] : '');
}

function seo_fetch_page($id) {
    if (!seo_valid_notion_id($id)) {
        return null;
    }
    $result = seo_notion_request('pages/' . rawurlencode($id));
    return $result['ok'] ? $result['body'] : null;
}

function seo_database_id($section) {
    $config = seo_config();
    return $section === 'reviews' ? $config['reviews'] : $config['blog'];
}

function seo_find_french_page($databaseId, $spanishId) {
    if (!seo_valid_notion_id($databaseId) || !seo_valid_notion_id($spanishId)) {
        return null;
    }
    $result = seo_notion_request('databases/' . rawurlencode($databaseId) . '/query', 'POST', array(
        'filter' => array('and' => array(
            array('property' => 'Publicado', 'checkbox' => array('equals' => true)),
            array('property' => 'Idioma', 'select' => array('equals' => 'Français')),
            array('property' => 'Original ES', 'rich_text' => array('equals' => $spanishId)),
        )),
        'page_size' => 1,
    ));
    return $result['ok'] && !empty($result['body']['results'][0]) ? $result['body']['results'][0] : null;
}

function seo_localized_page($databaseId, $requestedId, $locale) {
    $source = seo_fetch_page($requestedId);
    if (!$source) {
        return null;
    }
    $language = seo_page_language($source);
    $targetLanguage = $locale === 'fr' ? 'Français' : 'Español';
    if ($language === $targetLanguage) {
        return seo_page_published($source) ? $source : null;
    }
    if ($locale === 'es') {
        $original = seo_page_original_id($source);
        $page = seo_valid_notion_id($original) ? seo_fetch_page($original) : null;
        return $page && seo_page_published($page) ? $page : null;
    }
    $spanishId = $language === 'Français' ? seo_page_original_id($source) : $source['id'];
    $page = seo_find_french_page($databaseId, $spanishId);
    return $page && seo_page_published($page) ? $page : null;
}

function seo_query_published($databaseId, $locale) {
    if (!seo_valid_notion_id($databaseId)) {
        return array();
    }
    $results = array();
    $cursor = null;
    do {
        $body = array(
            'filter' => array('and' => array(
                array('property' => 'Publicado', 'checkbox' => array('equals' => true)),
                array('property' => 'Idioma', 'select' => array('equals' => $locale === 'fr' ? 'Français' : 'Español')),
            )),
            'page_size' => 100,
        );
        if ($cursor) {
            $body['start_cursor'] = $cursor;
        }
        $response = seo_notion_request('databases/' . rawurlencode($databaseId) . '/query', 'POST', $body);
        if (!$response['ok']) {
            break;
        }
        $batch = isset($response['body']['results']) ? $response['body']['results'] : array();
        $results = array_merge($results, $batch);
        $cursor = !empty($response['body']['has_more']) ? $response['body']['next_cursor'] : null;
    } while ($cursor);
    return $results;
}

function seo_fetch_blocks($blockId, $depth = 0) {
    if (!seo_valid_notion_id($blockId) || $depth > 5) {
        return array();
    }
    $blocks = array();
    $cursor = null;
    do {
        $path = 'blocks/' . rawurlencode($blockId) . '/children?page_size=100';
        if ($cursor) {
            $path .= '&start_cursor=' . rawurlencode($cursor);
        }
        $response = seo_notion_request($path);
        if (!$response['ok']) {
            break;
        }
        $batch = isset($response['body']['results']) ? $response['body']['results'] : array();
        foreach ($batch as &$block) {
            if (!empty($block['has_children']) && !empty($block['id'])) {
                $block['children'] = seo_fetch_blocks($block['id'], $depth + 1);
            }
        }
        unset($block);
        $blocks = array_merge($blocks, $batch);
        $cursor = !empty($response['body']['has_more']) ? $response['body']['next_cursor'] : null;
    } while ($cursor);
    return $blocks;
}

function seo_escape($value) {
    return htmlspecialchars((string) $value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function seo_rich_html($items) {
    if (!is_array($items)) {
        return '';
    }
    $html = '';
    foreach ($items as $item) {
        // Replace line breaks instead of adding <br> beside the original newline.
        // Keeping both would render every verse with a duplicated vertical break
        // because poem blocks use white-space: pre-wrap.
        $node = preg_replace('/\R/u', '<br>', seo_escape(isset($item['plain_text']) ? $item['plain_text'] : ''));
        $annotations = isset($item['annotations']) ? $item['annotations'] : array();
        if (!empty($annotations['bold'])) $node = '<strong>' . $node . '</strong>';
        if (!empty($annotations['italic'])) $node = '<em>' . $node . '</em>';
        if (!empty($annotations['strikethrough'])) $node = '<s>' . $node . '</s>';
        if (!empty($annotations['underline'])) $node = '<u>' . $node . '</u>';
        if (!empty($annotations['code'])) $node = '<code>' . $node . '</code>';
        $href = !empty($item['href']) ? $item['href'] : (!empty($item['text']['link']['url']) ? $item['text']['link']['url'] : '');
        if ($href) {
            $node = '<a href="' . seo_escape($href) . '" rel="noreferrer">' . $node . '</a>';
        }
        $html .= $node;
    }
    return $html;
}

function seo_block_items($block) {
    $type = isset($block['type']) ? $block['type'] : '';
    return isset($block[$type]['rich_text']) ? $block[$type]['rich_text'] : array();
}

function seo_youtube_embed($url) {
    $parts = parse_url($url);
    if (!$parts || empty($parts['host'])) {
        return '';
    }
    $host = preg_replace('/^(www\.|m\.)/', '', $parts['host']);
    $id = '';
    if ($host === 'youtu.be') {
        $id = trim(isset($parts['path']) ? $parts['path'] : '', '/');
    } elseif ($host === 'youtube.com' || $host === 'youtube-nocookie.com') {
        if (!empty($parts['query'])) {
            parse_str($parts['query'], $query);
            $id = isset($query['v']) ? $query['v'] : '';
        }
        if (!$id && !empty($parts['path']) && preg_match('#/(?:shorts|live|embed)/([^/?]+)#', $parts['path'], $match)) {
            $id = $match[1];
        }
    }
    return preg_match('/^[A-Za-z0-9_-]{6,20}$/', $id) ? 'https://www.youtube-nocookie.com/embed/' . $id . '?rel=0' : '';
}

function seo_render_block($block, $locale, $section) {
    $type = isset($block['type']) ? $block['type'] : '';
    $value = isset($block[$type]) ? $block[$type] : array();
    $items = seo_block_items($block);
    $plain = seo_rich_plain($items);
    $rich = seo_rich_html($items);
    if ($type === 'heading_1') return '<h2 class="notion-h1">' . $rich . '</h2>';
    if ($type === 'heading_2') return '<h2 class="notion-h2">' . $rich . '</h2>';
    if ($type === 'heading_3') return '<h3 class="notion-h3">' . $rich . '</h3>';
    if ($type === 'paragraph') {
        if (trim($plain) === '') return '<div class="notion-space" aria-hidden="true"></div>';
        $lines = array_values(array_filter(preg_split('/\R/u', $plain), 'strlen'));
        $average = count($lines) ? array_sum(array_map('strlen', $lines)) / count($lines) : 999;
        $class = count($lines) > 1 && $average <= 42 ? ' class="notion-poem"' : '';
        return '<p' . $class . '>' . $rich . '</p>';
    }
    if ($type === 'quote') return '<blockquote>' . $rich . '</blockquote>';
    if ($type === 'callout') return '<aside class="notion-callout">' . $rich . '</aside>';
    if ($type === 'divider') return '<hr>';
    if ($type === 'column_list') {
        $children = isset($block['children']) ? $block['children'] : array();
        return '<div class="notion-columns columns-' . count($children) . '">' . seo_render_blocks($children, $locale, $section) . '</div>';
    }
    if ($type === 'column') return '<div class="notion-column">' . seo_render_blocks(isset($block['children']) ? $block['children'] : array(), $locale, $section) . '</div>';
    if ($type === 'image') {
        $src = !empty($value['file']['url']) ? $value['file']['url'] : (!empty($value['external']['url']) ? $value['external']['url'] : '');
        if (!$src) return '';
        $captionItems = isset($value['caption']) ? $value['caption'] : array();
        $caption = seo_rich_plain($captionItems);
        $alt = $caption ?: ($locale === 'fr' ? 'Image de l’article' : 'Imagen del artículo');
        $mobile = '/notion-proxy.php?action=getImage&amp;blockId=' . rawurlencode($block['id']) . '&amp;width=640&amp;section=' . rawurlencode($section);
        $desktop = '/notion-proxy.php?action=getImage&amp;blockId=' . rawurlencode($block['id']) . '&amp;width=960&amp;section=' . rawurlencode($section);
        return '<figure class="notion-image"><picture><source media="(max-width: 720px)" srcset="' . $mobile . '"><img src="' . $desktop . '" alt="' . seo_escape($alt) . '" loading="lazy"></picture>' . ($caption ? '<figcaption>' . seo_rich_html($captionItems) . '</figcaption>' : '') . '</figure>';
    }
    if ($type === 'video') {
        $src = !empty($value['file']['url']) ? $value['file']['url'] : (!empty($value['external']['url']) ? $value['external']['url'] : '');
        if (!$src) return '';
        $embed = seo_youtube_embed($src);
        $media = $embed ? '<iframe src="' . seo_escape($embed) . '" title="Video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' : '<video src="' . seo_escape($src) . '" controls></video>';
        return '<figure class="notion-video">' . $media . '</figure>';
    }
    if ($type === 'code') return '<pre><code>' . seo_escape($plain) . '</code></pre>';
    if ($type === 'bookmark' && !empty($value['url'])) return '<p><a href="' . seo_escape($value['url']) . '" rel="noreferrer">' . seo_escape($value['url']) . '</a></p>';
    if ($type === 'child_page' && !empty($value['title'])) return '<h3 class="notion-h3">' . seo_escape($value['title']) . '</h3>';
    return trim($plain) !== '' ? '<p>' . $rich . '</p>' : '';
}

function seo_render_blocks($blocks, $locale, $section) {
    $html = '';
    $count = count($blocks);
    for ($index = 0; $index < $count; $index++) {
        $block = $blocks[$index];
        $type = isset($block['type']) ? $block['type'] : '';
        if ($type === 'bulleted_list_item' || $type === 'numbered_list_item') {
            $tag = $type === 'bulleted_list_item' ? 'ul' : 'ol';
            $html .= '<' . $tag . '>';
            while ($index < $count && isset($blocks[$index]['type']) && $blocks[$index]['type'] === $type) {
                $item = $blocks[$index];
                $html .= '<li>' . seo_rich_html(seo_block_items($item));
                if (!empty($item['children'])) $html .= seo_render_blocks($item['children'], $locale, $section);
                $html .= '</li>';
                $index++;
            }
            $index--;
            $html .= '</' . $tag . '>';
        } else {
            $html .= seo_render_block($block, $locale, $section);
        }
    }
    return $html;
}

function seo_first_description($blocks, $fallback) {
    foreach ($blocks as $block) {
        if (isset($block['type']) && in_array($block['type'], array('paragraph', 'quote', 'callout'), true)) {
            $text = trim(preg_replace('/\s+/u', ' ', seo_rich_plain(seo_block_items($block))));
            if (strlen($text) >= 35) {
                if (function_exists('mb_substr')) return mb_substr($text, 0, 155, 'UTF-8');
                return substr($text, 0, 155);
            }
        }
    }
    return $fallback;
}

function seo_format_date($date, $locale) {
    $timestamp = strtotime($date);
    if (!$timestamp) return $date;
    $monthsEs = array(1 => 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre');
    $monthsFr = array(1 => 'janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre');
    $months = $locale === 'fr' ? $monthsFr : $monthsEs;
    return (int) date('j', $timestamp) . ' ' . $months[(int) date('n', $timestamp)] . ' ' . date('Y', $timestamp);
}

function seo_cache_read($name, $lifetime) {
    $directory = __DIR__ . '/.notion-seo-cache';
    $path = $directory . '/' . hash('sha256', $name) . '.cache';
    return is_readable($path) && filemtime($path) >= time() - $lifetime ? file_get_contents($path) : false;
}

function seo_cache_lock($name) {
    $directory = __DIR__ . '/.notion-seo-cache';
    if ((!is_dir($directory) && !@mkdir($directory, 0755, true)) || !is_dir($directory)) return false;
    $path = $directory . '/' . hash('sha256', $name) . '.lock';
    $handle = @fopen($path, 'c');
    if ($handle === false || !@flock($handle, LOCK_EX)) {
        if (is_resource($handle)) @fclose($handle);
        return false;
    }
    return $handle;
}

function seo_cache_unlock($handle) {
    if (!is_resource($handle)) return;
    @flock($handle, LOCK_UN);
    @fclose($handle);
}

function seo_cache_write($name, $contents) {
    $directory = __DIR__ . '/.notion-seo-cache';
    if ((!is_dir($directory) && !@mkdir($directory, 0755, true)) || !is_dir($directory)) return;
    $path = $directory . '/' . hash('sha256', $name) . '.cache';
    @file_put_contents($path, $contents, LOCK_EX);
}
