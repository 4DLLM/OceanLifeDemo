import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // This is important for GitHub Pages
  build: {
    outDir: 'docs', // Build directly to docs folder for GitHub Pages
  },
});