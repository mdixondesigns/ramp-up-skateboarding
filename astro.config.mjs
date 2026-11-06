// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Required for canonical URLs and Open Graph tags.
  // Note: rampupskate.com is the email domain. If it also serves a website,
  // 301 it to this one so SEO is not split across two domains.
  site: 'https://rampupskateboarding.com',

  integrations: [mdx()],
});