import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Required for GitHub Pages — matches the repo name in the URL
  base: '/ui-ux_career-guide/',
})
