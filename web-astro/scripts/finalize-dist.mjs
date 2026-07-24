import { copyFile, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const outputDir = resolve(process.argv[2] || 'dist');

const htaccess = `# Configuracion exclusiva de la version SEO estatica
Options -MultiViews

<FilesMatch "^\\.">
    Order allow,deny
    Deny from all
</FilesMatch>

<Files "notion-seo-lib.php">
    Order allow,deny
    Deny from all
</Files>

ErrorDocument 404 /404.html

<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /

    RewriteRule ^$ /es/ [R=301,L]

    # Las entradas de Notion se resuelven dinamicamente sin recompilar Astro.
    RewriteRule ^(es|fr)/(blog|resenas-literarias)/([a-f0-9-]{32,36})/?$ /notion-entry.php?locale=$1&section=$2&id=$3 [L,QSA]

    # No se usa fallback SPA: cada ruta publica debe existir fisicamente.
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^ - [R=404,L]
</IfModule>
`;

await writeFile(resolve(outputDir, '.htaccess'), htaccess, 'utf8');
await copyFile(resolve('server/notion-seo-lib.php'), resolve(outputDir, 'notion-seo-lib.php'));
await copyFile(resolve('server/notion-entry.php'), resolve(outputDir, 'notion-entry.php'));
await copyFile(resolve('server/notion-sitemap.php'), resolve(outputDir, 'notion-sitemap.php'));

const sitemapIndexPath = resolve(outputDir, 'sitemap-index.xml');
const sitemapIndex = await readFile(sitemapIndexPath, 'utf8');
const dynamicSitemap = '<sitemap><loc>https://belenjuarez.com/notion-sitemap.php</loc></sitemap>';
if (!sitemapIndex.includes('notion-sitemap.php')) {
    await writeFile(sitemapIndexPath, sitemapIndex.replace('</sitemapindex>', `${dynamicSitemap}</sitemapindex>`), 'utf8');
}
console.log(`SEO server files generated in ${outputDir}`);
