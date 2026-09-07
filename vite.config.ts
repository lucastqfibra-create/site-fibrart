import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Caminho relativo universal para qualquer hospedagem
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
