import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,         // This makes it accessible from other devices on your network
    port: 5173,         // Optional, but explicit
  },
})
