import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://Makswaterson.github.io/redux-RTK-query',
  plugins: [react()],
  server: {
    open: '/index.html',
    port: 8000,
  },
});
