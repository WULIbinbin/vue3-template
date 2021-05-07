import { defineComponent, PropType } from '@vue/runtime-core'
import './index.scss'


type Props = {
  placeholder?: string,
  type?: string,
  onInput?: (e: Event) => void
}

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
  },
  emits: ['on-input'],
  setup(props:Props, ctx) {
    const onInput = (e) => {
      ctx.emit('on-input', e)
    }
    return () => (
      <div class='b-form-input'>
        <input
          type={props.type}
          placeholder={props.placeholder}
          onInput={onInput}
        />
      </div>
    )
  }
})

export default Input
