// @ts-check
import { defineConfig } from 'astro/config';

const BASE_PATH = process.env.BASE_PATH ?? '/';

// https://astro.build/config
export default defineConfig({
  site: 'https://hhb-architekten.de',
  base: BASE_PATH,
});
