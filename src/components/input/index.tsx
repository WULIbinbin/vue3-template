import { defineComponent, PropType } from '@vue/runtime-core'
import './index.scss'


type Props = {
  placeholder?: string,
  type?: string,
  onInput?: (e: Event) => void
}

//使用typescript的话props用type和interface规范
const Input1 = defineComponent({
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
  emits: ['onInput'],
  setup(props: Props) {
    return () => (
      <div class='b-form-input'>
        <input {...props} />
      </div>
    )
  }
})
console.log(Input1)

const Input2 = defineComponent({
  props: {
    placeholder: {
      type: String,
      required: false,
      default: '请输入'
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
  },
  emits: {
    onInput(payload, event) {
      return event
    }
  },
  setup(props) {
    console.log(props, this)
    const onInput = (e) => {
      console.log(e)
    }

  },
  methods: {
    onChange(e) {
      //console.log(e.target.value)
      this.$emit('onInput', {}, e)
    }
  },
  render() {
    return (
      <div class='b-form-input'>
        <input onInput={this.onChange} />
      </div>
    )
  }
})

export default Input1
