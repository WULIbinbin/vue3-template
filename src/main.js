import { createApp } from 'vue'
import router from './router/index'
import App from './App.jsx'

import FormItem from '@/components/formItem/index.jsx'
console.log(FormItem)

const app = createApp(App)
app.use(router)
app.component('form-item',FormItem)
app.mount('#app')
