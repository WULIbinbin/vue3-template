import './index.scss'

export default function (props, { slots }) {
  return (
    <div className='b-form-item'>
      <span className='b-form-item--title'>{props.title}</span>
      <div>
        {slots.default ? slots.default() : null}
      </div>
    </div>
  )
}