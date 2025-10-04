import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
   server: {
    host: true,       // exposes the server on LAN
    port: 5173,       // optional, defaults to 5173
  }
});
