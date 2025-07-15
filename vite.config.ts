/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  base: '/testTaskOpenMeteo/',
  plugins: [
    react(),
    tsconfigPaths(),
    tailwindcss(),
    ghPages({
      branch: 'deploy_on_github_pages',
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
});
