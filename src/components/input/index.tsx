import { defineComponent, PropType } from '@vue/runtime-core'
import './index.scss'


const Input = defineComponent({
  props: {
    placeholder: {
      type: String,
      default: '请输入'
    },
    type: {
      type: String,
      default: 'text'
    },
    onInput: {
      //使用PropType添加类型
      type: Function as PropType<(e: Event) => void>
    }
  },
  setup(props) {
    return () => (
      <div class='b-form-input'>
        <input
          type={props.type}
          placeholder={props.placeholder}
          onInput={props.onInput}
        />
      </div>
    )
  }
})

export default Input
