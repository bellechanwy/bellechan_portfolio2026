import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'node:path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    server: {
      port: parseInt(env.PORT) || 34891
    },
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          lumen: resolve(__dirname, 'projects/lumen.html'),
          tiller: resolve(__dirname, 'projects/tiller.html'),
          mosaic: resolve(__dirname, 'projects/mosaic.html'),
          pebble: resolve(__dirname, 'projects/pebble.html')
        }
      }
    }
  };
});
