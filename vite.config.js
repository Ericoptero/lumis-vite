/**
 * @type {import('vite').UserConfig}
*/
const { resolve } = require('path')

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
}

export default config
