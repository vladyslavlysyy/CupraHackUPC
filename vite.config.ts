import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    base: command === 'build' ? '/CupraHackUPC/' : '/', // Solo en producción
    build: {
      outDir: 'build',
      emptyOutDir: true,
    },
    assetsInclude: ['**/*.woff', '**/*.woff2'],
  };
});