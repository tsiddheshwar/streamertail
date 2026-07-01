import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
        loadPaths: [resolve(__dirname, 'src')]
      }
    },
    // Use PostCSS for minification so @layer and modern CSS features are preserved
    postcss: resolve(__dirname, 'postcss.config.js')
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    cssMinify: false,
    rollupOptions: {
      input: {
        streamertail: resolve(__dirname, 'src/index.scss'),
        core: resolve(__dirname, 'src/core/index.scss'),
        colors: resolve(__dirname, 'src/colors/index.scss'),
        layouts: resolve(__dirname, 'src/layouts/index.scss'),
        animations: resolve(__dirname, 'src/animations/index.scss'),
      },
      output: {
        assetFileNames: '[name][extname]'
      }
    }
  }
});
