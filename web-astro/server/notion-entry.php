<?php

require_once __DIR__ . '/notion-seo-lib.php';

function entry_error($status, $message) {
    http_response_code($status);
    header('Content-Type: text/html; charset=UTF-8');
    header('X-Robots-Tag: noindex, nofollow');
    $back = isset($_GET['locale']) && $_GET['locale'] === 'fr' ? '/fr/' : '/es/';
    echo '<!doctype html><html lang="es"><meta charset="utf-8"><meta name="robots" content="noindex, nofollow"><title>Error</title><body><main><h1>' . seo_escape($message) . '</h1><p><a href="' . $back . '">Belén Juárez</a></p></main></body></html>';
    exit;
}

function entry_replace($pattern, $replacement, $html) {
    return preg_replace_callback($pattern, function () use ($replacement) { return $replacement; }, $html, 1);
}

$locale = isset($_GET['locale']) && $_GET['locale'] === 'fr' ? 'fr' : 'es';
$sectionValue = isset($_GET['section']) ? $_GET['section'] : 'blog';
$section = $sectionValue === 'reviews' || $sectionValue === 'resenas-literarias' ? 'reviews' : 'blog';
$requestedId = isset($_GET['id']) ? $_GET['id'] : '';
if (!seo_valid_notion_id($requestedId)) {
    entry_error(404, $locale === 'fr' ? 'Article introuvable' : 'Artículo no encontrado');
}

$cacheKey = 'entry:v3:' . $locale . ':' . $section . ':' . seo_normalized_id($requestedId);
$freshLifetime = 900;
$staleLifetime = 86400;
$isWarmRequest = isset($_GET['warm']) && $_GET['warm'] === '1';
$cached = seo_cache_read($cacheKey, $freshLifetime);
if ($cached !== false) {
    header('Content-Type: text/html; charset=UTF-8');
    header('Cache-Control: public, max-age=300, stale-while-revalidate=600');
    header('X-Notion-Cache: HIT');
    echo $cached;
    exit;
}

$stale = seo_cache_read($cacheKey, $staleLifetime);
if ($stale !== false && !$isWarmRequest) {
    header('Content-Type: text/html; charset=UTF-8');
    header('Cache-Control: public, max-age=60, stale-while-revalidate=86400');
    header('X-Notion-Cache: STALE');
    echo $stale;
    exit;
}

// A warm-up request and a real navigation may overlap. Only one of them
// should query Notion; the other waits briefly and then reuses its result.
$cacheLock = seo_cache_lock($cacheKey);
$cached = seo_cache_read($cacheKey, $freshLifetime);
if ($cached !== false) {
    seo_cache_unlock($cacheLock);
    header('Content-Type: text/html; charset=UTF-8');
    header('Cache-Control: public, max-age=300, stale-while-revalidate=600');
    header('X-Notion-Cache: HIT-AFTER-WAIT');
    echo $cached;
    exit;
}

$databaseId = seo_database_id($section);
if (!seo_valid_notion_id($databaseId)) {
    entry_error(503, $locale === 'fr' ? 'Configuration Notion indisponible' : 'Configuración de Notion no disponible');
}

$page = seo_localized_page($databaseId, $requestedId, $locale);
if (!$page || empty($page['id'])) {
    entry_error(404, $locale === 'fr' ? 'Article introuvable' : 'Artículo no encontrado');
}

$resolvedId = $page['id'];
$sectionSlug = $section === 'reviews' ? 'resenas-literarias' : 'blog';
$canonicalPath = '/' . $locale . '/' . $sectionSlug . '/' . $resolvedId . '/';
if (seo_normalized_id($requestedId) !== seo_normalized_id($resolvedId)) {
    header('Location: ' . $canonicalPath, true, 301);
    exit;
}

$blocks = seo_fetch_blocks($resolvedId);
$title = seo_page_title($page);
if ($title === '') {
    $title = $locale === 'fr' ? 'Article sans titre' : 'Artículo sin título';
}
$date = seo_page_date($page);
$tags = seo_page_tags($page);
$cover = seo_page_cover($page);
$fallbackDescription = $locale === 'fr'
    ? $title . ', texte de Belén Juárez publié dans ' . ($section === 'reviews' ? 'Critiques littéraires.' : 'Journal ouvert.')
    : $title . ', texto de Belén Juárez publicado en ' . ($section === 'reviews' ? 'Reseñas literarias.' : 'Diario Abierto.');
$description = seo_first_description($blocks, $fallbackDescription);

$otherLocale = $locale === 'es' ? 'fr' : 'es';
$alternatePage = seo_localized_page($databaseId, $resolvedId, $otherLocale);
$alternatePath = $alternatePage && !empty($alternatePage['id'])
    ? '/' . $otherLocale . '/' . $sectionSlug . '/' . $alternatePage['id'] . '/'
    : '/' . $otherLocale . '/' . $sectionSlug . '/';
$spanishPath = $locale === 'es' ? $canonicalPath : $alternatePath;

$templatePath = __DIR__ . '/' . $locale . '/' . $sectionSlug . '/post/index.html';
if (!is_readable($templatePath)) {
    entry_error(500, 'Template unavailable');
}
$html = file_get_contents($templatePath);
if ($html === false) {
    entry_error(500, 'Template unavailable');
}

$backLabel = $locale === 'fr'
    ? ($section === 'reviews' ? 'Retour aux critiques' : 'Retour à l’index')
    : ($section === 'reviews' ? 'Volver a las reseñas' : 'Volver al índice');
$article = '<article class="journal-detail">';
$article .= '<a class="detail-back" href="/' . $locale . '/' . $sectionSlug . '/">← ' . seo_escape($backLabel) . '</a>';
$article .= '<header><time datetime="' . seo_escape($date) . '">' . seo_escape(seo_format_date($date, $locale)) . '</time><h1>' . seo_escape($title) . '</h1>';
$article .= '</header>';
if ($cover) {
    $mobileCover = '/notion-proxy.php?action=getImage&amp;pageId=' . rawurlencode($resolvedId) . '&amp;width=960&amp;section=' . rawurlencode($section);
    $article .= '<figure class="journal-detail-cover"><img src="' . $mobileCover . '" alt="' . seo_escape($title) . '"></figure>';
}
$article .= '<div class="notion-content">' . seo_render_blocks($blocks, $locale, $section) . '</div></article>';
$sectionHtml = '<section class="journal-post-shell content-shell">' . $article . '</section>';
$html = entry_replace('#<section class="journal-post-shell content-shell">[\s\S]*?</section>#', $sectionHtml, $html);

$fullTitle = $title . ' | Belén Juárez';
$absoluteCanonical = 'https://belenjuarez.com' . $canonicalPath;
$absoluteAlternate = 'https://belenjuarez.com' . $alternatePath;
$socialImage = $cover ?: 'https://belenjuarez.com/images/sobrebelen/IMG_0314.JPEG';
$html = entry_replace('#<title>[\s\S]*?</title>#', '<title>' . seo_escape($fullTitle) . '</title>', $html);
$html = entry_replace('#<meta name="description" content="[^"]*">#', '<meta name="description" content="' . seo_escape($description) . '">', $html);
$html = entry_replace('#<meta name="robots" content="[^"]*">#', '<meta name="robots" content="index, follow, max-image-preview:large">', $html);
$html = entry_replace('#<link rel="canonical" href="[^"]*">#', '<link rel="canonical" href="' . $absoluteCanonical . '">', $html);
$html = entry_replace('#<link rel="alternate" hreflang="' . $locale . '" href="[^"]*">#', '<link rel="alternate" hreflang="' . $locale . '" href="' . $absoluteCanonical . '">', $html);
if ($alternatePage) {
    $html = entry_replace('#<link rel="alternate" hreflang="' . $otherLocale . '" href="[^"]*">#', '<link rel="alternate" hreflang="' . $otherLocale . '" href="' . $absoluteAlternate . '">', $html);
} else {
    $html = preg_replace('#<link rel="alternate" hreflang="' . $otherLocale . '" href="[^"]*">#', '', $html, 1);
}
$html = entry_replace('#<link rel="alternate" hreflang="x-default" href="[^"]*">#', '<link rel="alternate" hreflang="x-default" href="https://belenjuarez.com' . seo_escape($spanishPath) . '">', $html);
$html = entry_replace('#<meta property="og:title" content="[^"]*">#', '<meta property="og:title" content="' . seo_escape($fullTitle) . '">', $html);
$html = entry_replace('#<meta property="og:description" content="[^"]*">#', '<meta property="og:description" content="' . seo_escape($description) . '">', $html);
$html = entry_replace('#<meta property="og:url" content="[^"]*">#', '<meta property="og:url" content="' . $absoluteCanonical . '">', $html);
$html = entry_replace('#<meta property="og:image" content="[^"]*">#', '<meta property="og:image" content="' . seo_escape($socialImage) . '">', $html);
$html = entry_replace('#<meta name="twitter:title" content="[^"]*">#', '<meta name="twitter:title" content="' . seo_escape($fullTitle) . '">', $html);
$html = entry_replace('#<meta name="twitter:description" content="[^"]*">#', '<meta name="twitter:description" content="' . seo_escape($description) . '">', $html);
$html = entry_replace('#<meta name="twitter:image" content="[^"]*">#', '<meta name="twitter:image" content="' . seo_escape($socialImage) . '">', $html);

$schema = array(
    '@context' => 'https://schema.org',
    '@type' => $section === 'reviews' ? 'Article' : 'BlogPosting',
    'headline' => $title,
    'description' => $description,
    'datePublished' => $date,
    'dateModified' => isset($page['last_edited_time']) ? $page['last_edited_time'] : $date,
    'inLanguage' => $locale,
    'url' => $absoluteCanonical,
    'mainEntityOfPage' => $absoluteCanonical,
    'author' => array('@type' => 'Person', 'name' => 'Belén Juárez Jiménez', 'url' => 'https://belenjuarez.com/' . $locale . '/sobre-belen/'),
    'publisher' => array('@type' => 'Person', 'name' => 'Belén Juárez Jiménez'),
);
if ($cover) $schema['image'] = $cover;
if ($tags) $schema['keywords'] = implode(', ', $tags);
$schemaTag = '<script type="application/ld+json">' . json_encode($schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . '</script>';
$html = str_replace('</head>', $schemaTag . '</head>', $html);

$oldAlternate = '/' . $otherLocale . '/' . $sectionSlug . '/post/';
$html = str_replace('href="' . $oldAlternate . '" lang="' . $otherLocale . '"', 'href="' . $alternatePath . '" lang="' . $otherLocale . '"', $html);

header('Content-Type: text/html; charset=UTF-8');
header('Cache-Control: public, max-age=300, stale-while-revalidate=600');
header('X-Robots-Tag: index, follow');
header('X-Notion-Cache: ' . ($isWarmRequest ? 'WARMED' : 'MISS'));
seo_cache_write($cacheKey, $html);
seo_cache_unlock($cacheLock);
echo $html;
