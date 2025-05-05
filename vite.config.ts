import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/CupraHackUPC/' : '/',
  plugins: [react()],
  build: {
    outDir: 'build',
    emptyOutDir: true,
    assetsDir: 'assets',  // Explicit assets directory
  },
  assetsInclude: ['**/*.woff', '**/*.woff2', '**/*.png', '**/*.jpg'],
  resolve: {
    alias: {
      '@': '/src',  // Helps with consistent imports
    }
  }
}));