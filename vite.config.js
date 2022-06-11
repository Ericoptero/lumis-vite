/**
 * @type {import('vite').UserConfig}
*/
const { resolve } = require('path')
import handlebars from 'vite-plugin-handlebars';

import { pageData } from './src/partials/partialsConfig';

const config = {
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        teste: resolve(__dirname, 'src/teste.html'),
        api: resolve(__dirname, 'src/api.html'),
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  plugins: [handlebars({
    context(pagePath) {
      return pageData[pagePath];
    },
    partialDirectory: resolve(__dirname, 'src/partials'),
  })]
}

export default config
