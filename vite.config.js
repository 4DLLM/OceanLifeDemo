import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/OceanLifeDemo/', // This is the key change - your repo name
  build: {
    outDir: 'docs',
  },
});