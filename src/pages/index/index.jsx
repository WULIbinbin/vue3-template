import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  setup() {
    const title = '首页'
    const navigate = [
      { path: '/reactive', title: '响应式示例' },
      { path: '/router', title: 'vue-router示例' },
    ]
    onMounted(() => {
      console.log(navigate)
    })
    return () => (
      <div>
        <h2>{title}</h2>
        <div>
          {
            navigate.map(item => (
              <router-link to={item.path}>{item.title}</router-link>
            ))
          }
        </div>
      </div>
    )
  }
})