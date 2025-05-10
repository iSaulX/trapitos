import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
// @ts-ignore
import tailwindcss from "@tailwindcss/vite"; 

// vite.plugins/rewrite-api.ts
function rewriteApiPlugin() {
  return {
    name: 'vite:rewrite-api',
    enforce: 'pre',
    transform(code: string, id: string) {
      if (!id.endsWith('.ts') && !id.endsWith('.tsx') && !id.endsWith('.js') && !id.endsWith('.jsx')) {
        return null;
      }

      const API_URL =  'http://localhost:3001/api';


      const transformed = code.replace(
        /fetch\(['"`]\/api(.*?)['"`]\)/g,
        `fetch('${API_URL}$1')`
      );
      console.log('Transformed code:', transformed);
      return {
        code: transformed,
        map: null,
      };
    },
  };
}

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react(), tailwindcss(), rewriteApiPlugin()],
  }
})
