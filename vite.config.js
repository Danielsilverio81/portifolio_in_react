import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Configure o diretório de saída para 'public'
    outDir: 'public',
  },
});