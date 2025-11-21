import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    https: true,
    host: true, // Allow access from network
    port: 3000
  }
});

