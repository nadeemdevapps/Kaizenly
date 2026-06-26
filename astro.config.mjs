import { defineConfig } from 'astro/config';
import { SITE } from './src/config.mjs';

// https://astro.build/config
export default defineConfig({
  site: SITE.origin,
  // SITE.base is '' for Netlify - site deploys at root (no subpath)
  base: SITE.base || '/',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  devToolbar: { enabled: false },
});
