import './index.scss'

export default function (props = {
  type: 'text',
  placeHolder: ''
}, data) {
  return (
    <div>
      <input className='form-input' {...props} />
    </div>
  )
}