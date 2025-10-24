// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/<repo-name>/', // e.g. '/gemini-clone/'
  plugins: [react()]
})
