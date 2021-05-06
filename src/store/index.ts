import { createStore } from 'vuex'
import modules from './modules/index'
console.log(modules)
const store = createStore({
  modules
})

export default store