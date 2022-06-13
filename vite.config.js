/**
 * @type {import('vite').UserConfig}
*/
const { resolve } = require('path')
import handlebars from 'vite-plugin-handlebars';

const config = {
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        'terms-conditions': resolve(__dirname, 'src/terms-conditions.html'),
        'privacy-policy': resolve(__dirname, 'src/privacy-policy.html'),
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  plugins: [handlebars({
    context(pagePath) {
      return pageData[pagePath];
    },
    partialDirectory: resolve(__dirname, 'src/partials'),
  })]
}

const pageData = {
  '/index.html': {
    title: 'Página Inicial',
  },
  '/terms-conditions.html': {
    title: 'Termos e condições',
  },
  '/privacy-policy.html': {
    title: 'Política e privacidade',
  }
}

export default config
