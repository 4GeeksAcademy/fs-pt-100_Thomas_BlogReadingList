// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    hmr: {
      protocol: 'wss',
      host: `stunning-space-goggles-v6r67pxj7g6x2pwq4-3000.app.github.dev`,
      clientPort: 443,
    }
  }
})