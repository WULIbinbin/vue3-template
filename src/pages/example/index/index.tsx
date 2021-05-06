import { defineComponent, onMounted } from 'vue'
import './style.scss'

export default defineComponent({
  setup() {
    const title = '首页'
    const navigate = [
      { path: '/reactive', title: '响应式示例' },
      { path: '/router', title: 'vue-router示例' },
    ]
    onMounted(() => {

    })
    return () => (
      <div>
        <h2 class='b-main-title'>{title}</h2>
        <div class='navigate'>
          {
            navigate.map(item => (
              <router-link class='navigate-item' to={item.path}>{item.title}</router-link>
            ))
          }
        </div>
      </div>
    )
  }
})