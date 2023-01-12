import { createStore } from 'vuex'
import modules from './modules/index'

const store = createStore({
  modules
})

export default store