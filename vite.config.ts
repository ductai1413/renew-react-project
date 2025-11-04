import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import svgr from 'vite-plugin-svgr';
/* import { visualizer } from 'rollup-plugin-visualizer'; */

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        // This will transform your SVG to a React component
        exportType: 'named',
        namedExport: 'ReactComponent',
      },
    }),
    /* visualizer({
      filename: 'bundle-report.html',
      open: true,
    }), */
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/index" as *;
        `,
      },
    },
  },
  build: {
    // Tối ưu hóa output
    outDir: 'dist',
    sourcemap: false, // Tắt sourcemap để build nhanh hơn
    minify: 'esbuild', // Sử dụng esbuild để minify (nhanh hơn)
    chunkSizeWarningLimit: 1100,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
  },
});
