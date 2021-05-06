import { defineComponent, ref, reactive, readonly, onMounted } from 'vue'
import { FormItem, Input } from '@/components/index'
import './style.scss'

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
        <h2 className='b-main-title'>{props.title}</h2>
        <FormItem title='使用ref：'>
          <Input onInput={handleChangeRef} />
        </FormItem>
        <FormItem title='使用reactive：'>
          <Input onInput={handleChangeRec} />
        </FormItem>
        <FormItem title='使用readonly：'>
          <Input onInput={handleChangeReadonly} />
        </FormItem>
        <div>
          <p className='reactive-msg'>结果</p>
          <p className='reactive-msg'>使用ref：{input.value}</p>
          <p className='reactive-msg'>使用reactive：{state.input}</p>
          <p className='reactive-msg'>使用readonly：{readonlyData.input}</p>
        </div>
      </div>
    )
  }
})