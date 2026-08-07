import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const API_TARGET = process.env.VITE_API_TARGET || 'http://127.0.0.1:5188';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: { '/api': { target: API_TARGET, changeOrigin: true } },
  },
  build: {
    target: 'es2020',
    // Device budget: initial JS bundle <= 180 KB gzipped. three.js is never in
    // the main bundle — it is dynamically imported only when a 3D card opens.
    chunkSizeWarningLimit: 200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three')) return 'three';
          if (id.includes('node_modules/react')) return 'react-vendor';
          return undefined;
        },
      },
    },
  },
});
