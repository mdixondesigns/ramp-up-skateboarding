// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Required for canonical URLs and Open Graph tags.
  // TODO(Christine): confirm this is the production domain.
  site: 'https://rampupskate.com',

  integrations: [mdx()],
});