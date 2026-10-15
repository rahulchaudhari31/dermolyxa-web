import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 1400,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three/')) {
            return 'vendor-three'
          }
          if (id.includes('node_modules/@react-three/')) {
            return 'vendor-r3f'
          }
          if (id.includes('node_modules/framer-motion/')) {
            return 'vendor-motion'
          }
          if (id.includes('node_modules/gsap/')) {
            return 'vendor-gsap'
          }
        },
      },
    },
  },
})
