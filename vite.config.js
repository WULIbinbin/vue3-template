import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
const { resolve } = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  base:'https://wulibinbin.github.io/vue3-jsx-study',
  plugins: [
    vue(),
    jsx(),
  ],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  resolve:{
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
