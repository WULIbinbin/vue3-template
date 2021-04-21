import { defineComponent, onMounted } from 'vue'
import style from './style.module.scss'

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
        <h2 className='main_title'>{title}</h2>
        <div className={style.navigate}>
          {
            navigate.map(item => (
              <router-link className={style.navigate_item} to={item.path}>{item.title}</router-link>
            ))
          }
        </div>
      </div>
    )
  }
})