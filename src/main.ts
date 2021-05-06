import { createApp } from 'vue'
import router from './router/index'
import store from './store/index'
import App from './App'

import '@/assets/js/setRem.js'
//全局组件注册
import FormItem from '@/components/formItem/index'

const app = createApp(App)
app.use(router)
app.use(store)
app.component('form-item',FormItem)
app.mount('#app')
