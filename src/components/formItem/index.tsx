import './index.scss'

export default function (props, { slots }) {
  return (
    <div className='b-form-item b-bottom-line'>
      <span className='b-form-item--title'>{props.title}</span>
      <div className='b-form-item--content'>
        {slots.default ? slots.default() : null}
      </div>
    </div>
  )
}