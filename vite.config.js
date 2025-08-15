import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: mode === 'development' ? '/' : 'https://microbizmedia.github.io/web/',
    server: {
      port: 3000, // <-- this sets the dev server to localhost:3000
    },
  };
});
