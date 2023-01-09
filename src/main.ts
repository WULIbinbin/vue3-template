import { createApp } from 'vue'
import router from './router/index'
import store from './store/index'
import App from './App'
import TDesign from 'tdesign-mobile-vue';

import '@/assets/js/setRem.js'

const app = createApp(App)
app.use(TDesign);
app.use(router)
app.use(store)
app.mount('#app')
