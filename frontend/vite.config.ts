import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr'; // make sure to import it

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://192.168.96.5:8000",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
    host: '0.0.0.0',
    port: 3000,
  },
  plugins: [svgr(), react()],
})
