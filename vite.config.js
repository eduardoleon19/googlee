import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/google/",
  plugins: [react()],
  server: {
    port: 8000,
    watch: {
        usePolling: true
    }
  },
})
