<?php

require_once __DIR__ . '/notion-seo-lib.php';

$cached = seo_cache_read('notion-sitemap', 600);
if ($cached !== false) {
    header('Content-Type: application/xml; charset=UTF-8');
    header('Cache-Control: public, max-age=600, stale-while-revalidate=1200');
    echo $cached;
    exit;
}

$urls = array();
foreach (array('blog' => 'blog', 'reviews' => 'resenas-literarias') as $section => $slug) {
    $databaseId = seo_database_id($section);
    if (!seo_valid_notion_id($databaseId)) continue;
    foreach (array('es', 'fr') as $locale) {
        foreach (seo_query_published($databaseId, $locale) as $page) {
            if (empty($page['id'])) continue;
            $urls[] = array(
                'loc' => 'https://belenjuarez.com/' . $locale . '/' . $slug . '/' . $page['id'] . '/',
                'lastmod' => !empty($page['last_edited_time']) ? substr($page['last_edited_time'], 0, 10) : '',
            );
        }
    }
}

$xml = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
$xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";
foreach ($urls as $url) {
    $xml .= '  <url><loc>' . seo_escape($url['loc']) . '</loc>';
    if ($url['lastmod']) $xml .= '<lastmod>' . seo_escape($url['lastmod']) . '</lastmod>';
    $xml .= '</url>' . "\n";
}
$xml .= '</urlset>' . "\n";

header('Content-Type: application/xml; charset=UTF-8');
header('Cache-Control: public, max-age=600, stale-while-revalidate=1200');
seo_cache_write('notion-sitemap', $xml);
echo $xml;

