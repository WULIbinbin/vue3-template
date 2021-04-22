import { createApp } from 'vue'
import router from './router/index'
import App from './App.jsx'

//全局组件注册
import FormItem from '@/components/formItem/index.jsx'

import '@/assets/js/setRem.js'

const app = createApp(App)
app.use(router)
app.component('form-item',FormItem)
app.mount('#app')
