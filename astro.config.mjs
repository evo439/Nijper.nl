// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://nijper.nl',
  trailingSlash: 'ignore',
  build: {
    // over.astro -> over.html (so /over keeps working on GitHub Pages),
    // en/index.astro -> en/index.html (served at /en/)
    format: 'preserve',
    // the whole stylesheet is small; inlining removes the render-blocking request
    inlineStylesheets: 'always',
  },
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    // hreflang pairs live in each page's <head>; NL and EN slugs differ, so the
    // sitemap's path-based i18n matching would pair them incorrectly
    sitemap({
      // directory indexes (EN home, designs overview): keep URLs identical to the canonicals
      serialize: (item) => ({ ...item, url: item.url.replace(/\/(en|ontwerpen|en\/designs)$/, '/$1/') }),
      // demo sites for fictional clients are noindex; keep them out of the sitemap
      filter: (page) => !/\/(ontwerpen|en\/designs)\/[^/]/.test(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
