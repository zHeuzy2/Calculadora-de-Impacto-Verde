import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Se for publicar no GitHub Pages, ajuste "base" para "/<nome-do-repo>/".
export default defineConfig({
  plugins: [react()],
  base: './',
})
