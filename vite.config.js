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
          'carbon-trading': resolve(__dirname, 'projects/carbon-trading.html'),
          'records-management': resolve(__dirname, 'projects/records-management.html'),
          timesheet: resolve(__dirname, 'projects/timesheet.html')
        }
      }
    }
  };
});
