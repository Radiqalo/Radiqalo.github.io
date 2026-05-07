// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://radiqalo.github.io',
  integrations: [preact(), icon(), vue()],

  vite: {
    plugins: [tailwindcss()]
  }
});