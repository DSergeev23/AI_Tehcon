import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import { vitePrerenderPlugin } from 'vite-prerender-plugin'
import { catalogProducts } from './src/lib/catalog/index.js'
import { catalogCategoryNav } from './src/lib/catalog/categorySeo.js'

const prerenderRoutes = [
  '/404.html',
  '/about',
  '/catalog',
  ...catalogCategoryNav.map(({ slug }) => `/catalog/${slug}`),
  ...catalogProducts.map(({ id }) => `/catalog/${id}`),
  '/news',
  '/contacts',
  '/privacy-policy',
  '/terms-of-use',
]

// https://vite.dev/config/
export default defineConfig({
  logLevel: 'error', // Suppress warnings, only show errors
  plugins: [
    react(),
    vitePrerenderPlugin({
      renderTarget: '#root',
      prerenderScript: fileURLToPath(new URL('./src/prerender.jsx', import.meta.url)),
      additionalPrerenderRoutes: prerenderRoutes,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // The prerender entry is executed in Node, so react-markdown must use
      // the DOM-free decoder implementation instead of index.dom.js.
      'decode-named-character-reference': fileURLToPath(
        new URL('./node_modules/decode-named-character-reference/index.js', import.meta.url),
      ),
    },
  },
});
