import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr'; // make sure to import it

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/v1": {
        target: "http://notesdocker-project-1:8000",
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => path.replace(/^\/v1/, ""),
      },
    },
    host: '0.0.0.0',
    port: 3000,
  },
  plugins: [svgr(), react()],
})
