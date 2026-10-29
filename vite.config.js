import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Relative asset paths work on both the root domain and a GitHub Pages project path.
export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
