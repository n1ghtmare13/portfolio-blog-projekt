// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
  site: 'https://devfolio.pl',
  integrations: [sitemap(), pagefind()],

  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
        },
      },
    },
  },
});
