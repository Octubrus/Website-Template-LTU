import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  // Prefetch every internal link as soon as it enters the viewport, so by
  // the time the prospect clicks a nav link the HTML is already cached.
  // Note: prefetch is production-only (npm run build && npm run preview);
  // `astro dev` always feels slightly slower because of HMR + Vite overhead.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
