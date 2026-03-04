import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'gh-pages-setup',
      closeBundle() {
        const outDir = resolve(__dirname, 'dist')
        copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'))
        writeFileSync(resolve(outDir, '.nojekyll'), '')
      },
    },
  ],
  base: '/Intelligent-Floor-Shutdown-System/',
})
