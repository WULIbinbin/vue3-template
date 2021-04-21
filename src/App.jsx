import { defineComponent } from 'vue'
import '@/assets/css/main.scss'

export default defineComponent({
  setup() {
    return () => (
      <div>
        <router-view></router-view>
      </div>
    )
  }
})