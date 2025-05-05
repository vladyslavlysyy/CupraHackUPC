import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/CupraHackUPC/', // Asegúrate que coincida con el nombre de tu repositorio
  plugins: [react()],
  build: {
    outDir: 'build', // Esto debe coincidir con la carpeta que subes en el workflow
  }
})
