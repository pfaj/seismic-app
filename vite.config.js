import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  reload: true,
  plugins: [react()],
  server: {
    open: true, // automatically open the app in the browser
    port: 3000,
  },
  esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
  },
})
