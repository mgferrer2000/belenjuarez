import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';

const legacySource = fileURLToPath(new URL('./src/legacy/', import.meta.url));

export default defineConfig({
  site: 'https://belenjuarez.com',
  output: 'static',
  trailingSlash: 'always',
  publicDir: './public',
  vite: {
    cacheDir: './.vite-cache',
    resolve: {
      alias: {
        '@legacy': legacySource,
      },
    },
  },
  build: {
    format: 'directory',
  },
  integrations: [
    react(),
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        return pathname !== '/' && pathname !== '/404/' && !pathname.endsWith('/blog/post/') && !pathname.endsWith('/resenas-literarias/post/');
      },
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
          fr: 'fr-FR',
        },
      },
    }),
  ],
});
