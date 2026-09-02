import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'

const root = document.getElementById('root')
const application = <App />

if (document.documentElement.dataset.newsGenerated === 'true') {
  root.replaceChildren()
  createRoot(root).render(application)
} else if (root.hasChildNodes()) {
  hydrateRoot(root, application)
} else {
  createRoot(root).render(application)
}
