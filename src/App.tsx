import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return () => (
      <div>
        <router-view></router-view>
      </div>
    )
  }
})