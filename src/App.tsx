import { defineComponent } from 'vue'

import './styles/index.less'

export default defineComponent({
  setup() {
    return () => (
      <div>
        <router-view></router-view>
      </div>
    )
  }
})