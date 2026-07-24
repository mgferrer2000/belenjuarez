import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const failures = [];
const warnings = [];

const files = (directory) => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const path = join(directory, entry.name);
  return entry.isDirectory() ? files(path) : [path];
});

const htmlFiles = files(dist).filter((path) => extname(path) === '.html');
const indexedPages = htmlFiles.filter((path) => !path.endsWith('404.html') && relative(dist, path) !== 'index.html' && !path.includes(join('blog', 'post')) && !path.includes(join('resenas-literarias', 'post')));
const titles = new Map();

const requireMatch = (html, pattern, label, page) => {
  if (!pattern.test(html)) failures.push(`${page}: falta ${label}`);
};

for (const path of indexedPages) {
  const page = relative(dist, path).replaceAll('\\', '/');
  const html = readFileSync(path, 'utf8');
  requireMatch(html, /<html lang="(?:es|fr)"/, 'idioma ES/FR', page);
  requireMatch(html, /<title>[^<]{8,}<\/title>/, 'title descriptivo', page);
  requireMatch(html, /<meta name="description" content="[^\"]{40,}"/, 'meta description', page);
  requireMatch(html, /<link rel="canonical" href="https:\/\/belenjuarez\.com\/(?:es|fr)\//, 'canonical', page);
  requireMatch(html, /hreflang="es"/, 'hreflang es', page);
  requireMatch(html, /hreflang="fr"/, 'hreflang fr', page);
  requireMatch(html, /hreflang="x-default"/, 'hreflang x-default', page);
  requireMatch(html, /property="og:title"/, 'Open Graph', page);
  requireMatch(html, /name="twitter:card"/, 'Twitter Card', page);

  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  if (title) titles.set(title, [...(titles.get(title) ?? []), page]);

  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(match[1]); } catch { failures.push(`${page}: JSON-LD no valido`); }
  }

  if (/contenido en migracion|page under construction|lorem ipsum/i.test(html)) {
    failures.push(`${page}: contiene texto provisional`);
  }

  for (const match of html.matchAll(/(?:src|href)="(\/[^\"?#]+)(?:[?#][^\"]*)?"/g)) {
    const url = decodeURI(match[1]);
    if (url.endsWith('/') || url.startsWith('/es/') || url.startsWith('/fr/') || url === '/') continue;
    const asset = join(dist, url.replace(/^\//, '').replaceAll('/', '\\'));
    if (!existsSync(asset)) failures.push(`${page}: recurso local inexistente ${url}`);
  }
}

for (const [title, pages] of titles) {
  const locales = pages.map((page) => page.split('/')[0]);
  if (new Set(locales).size !== pages.length) warnings.push(`title repetido dentro de un idioma (${pages.length}): ${title}`);
}

const sitemap = join(dist, 'sitemap-0.xml');
const sitemapIndex = join(dist, 'sitemap-index.xml');
const robots = join(dist, 'robots.txt');
if (!existsSync(sitemap) && !existsSync(sitemapIndex)) failures.push('falta sitemap');
if (!existsSync(robots) || !/Sitemap:\s*https:\/\/belenjuarez\.com\/sitemap-index\.xml/i.test(readFileSync(robots, 'utf8'))) failures.push('robots.txt no enlaza el sitemap');
for (const serverFile of ['notion-seo-lib.php', 'notion-entry.php', 'notion-sitemap.php']) {
  if (!existsSync(join(dist, serverFile))) failures.push(`falta modulo dinamico ${serverFile}`);
}
if (existsSync(sitemapIndex) && !/https:\/\/belenjuarez\.com\/notion-sitemap\.php/.test(readFileSync(sitemapIndex, 'utf8'))) failures.push('el indice no incluye el sitemap dinamico de Notion');
const htaccessPath = join(dist, '.htaccess');
if (!existsSync(htaccessPath) || !/notion-entry\.php\?locale=\$1&section=\$2&id=\$3/.test(readFileSync(htaccessPath, 'utf8'))) failures.push('falta la reescritura SEO de entradas Notion');

console.log(`Paginas HTML auditadas: ${indexedPages.length}`);
console.log(`Avisos: ${warnings.length}`);
warnings.forEach((warning) => console.log(`- ${warning}`));
if (failures.length) {
  console.error(`Errores: ${failures.length}`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log('Auditoria SEO y de recursos superada.');
