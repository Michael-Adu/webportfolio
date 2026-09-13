import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/michael-adu-embedded-software-engineer/",
  plugins: [react()],
  assetsInclude: ['**/*.md', '**/*.pdf', '**/*.glb']
})
