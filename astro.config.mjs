import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.kadomasajes.com',
  output: 'static',
  trailingSlash: 'never',
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/avisolegal') && !page.endsWith('/404') && !page.endsWith('/tratamientos'),
    }),
  ],
});
