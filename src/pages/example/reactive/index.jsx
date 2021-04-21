import { defineComponent, ref, reactive, readonly, onMounted } from 'vue'
import './style.module.scss'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '响应式示例'
    },
  },
  setup(props) {
    const input = ref('')
    const handleChangeRef = (event) => {
      input.value = event.target.value
    }
    const state = reactive({
      input: ''
    })
    const handleChangeRec = (event) => {
      state.input = event.target.value
    }
    const readonlyData = readonly(reactive({
      input: '输入也没用'
    }))
    const handleChangeReadonly = (event) => {
      readonlyData.input = event.target.value
    }
    onMounted(() => {

    })
    return () => (
      <div>
        <h2 className='main_title'>{props.title}</h2>
        <form-item title='使用ref:'>
          <input type="text" onInput={handleChangeRef} />
        </form-item>
        <p>已输入：{input.value}</p>
        <div>
          <span>使用reactive：</span>
          <input type="text" onInput={handleChangeRec} />
        </div>
        <p>已输入：{state.input}</p>
        <div>
          <span>使用readonly：</span>
          <input type="text" onInput={handleChangeReadonly} />
        </div>
        <p>已输入：{readonlyData.input}</p>
      </div>
    )
  }
})