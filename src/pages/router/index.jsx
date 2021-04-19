import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  setup() {
    const title = '路由例子'
    onMounted(() => {
      console.log(this)
    })
    return () => (
      <div>
        <h2>{title}</h2>
      </div>
    )
  }
})