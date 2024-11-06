import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables based on the mode
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    base: mode === 'development' ? '/' : 'https://martinstojmenovski.github.io/micro-biz-media',
  };
});
