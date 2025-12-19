import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../',
    emptyOutDir: false, // Don't delete CNAME, README.md, etc.
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html')
      }
    }
  },
  base: './', // Use relative paths for GitHub Pages
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  }
})
