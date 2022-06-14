/**
 * @type {import('vite').UserConfig}
*/
const { resolve } = require('path')
import handlebars from 'vite-plugin-handlebars';

const config = {
  root: 'src',
  base: '',
  build: {
    outDir: '../dist/',
    rollupOptions: {
      // Páginas HTML
      input: {
        main: resolve(__dirname, 'src/index.html'),
        'privacy-policy': resolve(__dirname, 'src/privacy-policy.html'),
        'terms-conditions': resolve(__dirname, 'src/terms-conditions.html'),
        api: resolve(__dirname, 'src/api.html')
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  resolve: {
    // Apelido para o url() da pasta src em arquivos SASS/SCSS. ex: url('@/assets/imagem.png')
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

// Contexto com variaveis que podem ser usadas em páginas HTML ou em partials. ex: {{title}}
const pageData = {
  '/index.html': {
    title: 'Página Inicial',
  },
  '/terms-conditions.html': {
    title: 'Termos e condições',
  },
  '/privacy-policy.html': {
    title: 'Política e privacidade',
  },
  'api.html': {
    title: 'Chamada API',
  }
}

export default config
