import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import { vitePrerenderPlugin } from 'vite-prerender-plugin'

const prerenderRoutes = [
  '/about',
  '/catalog',
  '/catalog/1c',
  '/catalog/image-analysis',
  '/catalog/content-factory',
  '/catalog/marketing',
  '/catalog/analytics',
  '/catalog/finance',
  '/catalog/marketplace',
  '/solutions/1c-automation',
  '/solutions/business-process-audit',
  '/solutions/email-automation',
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
    },
  },
});
