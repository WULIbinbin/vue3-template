import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
const postcss = require('./postcss.config.js').plugins
const { resolve } = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/vue3-template' : '',
  plugins: [
    vue(),
    jsx(),
    require('autoprefixer'),
    //...postcss
  ],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
