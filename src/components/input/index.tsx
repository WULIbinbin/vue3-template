import './index.scss'

//使用typescript的话props用type和interface规范
export default function (props, data) {
  const defaultProps = {
    type: 'text',
    placeholder: '请输入',
    ...props
  }
  return (
    <div class='b-form-input'>
      <input {...defaultProps} />
    </div>
  )
}
