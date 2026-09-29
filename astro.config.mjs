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
      // the EN home is a directory index; keep its URL identical to the canonical
      serialize: (item) => ({ ...item, url: item.url.replace(/\/en$/, '/en/') }),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
