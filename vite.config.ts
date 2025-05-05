import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  const isBuild = command === 'build';
  
  return {
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    // Use base path only for production builds (GitHub Pages)
    base: isBuild ? '/CupraHackUPC/' : '/',
    build: {
      outDir: 'build',
    },
    assetsInclude: ['**/*.woff', '**/*.woff2'],
  };
});