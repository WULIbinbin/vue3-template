import './index.scss'

export default function (props, { slots }) {
  return (
    <div class='b-form-item b-bottom-line'>
      <span class='b-form-item--title'>{props.title}</span>
      <div class='b-form-item--content'>
        {slots.default ? slots.default() : null}
      </div>
    </div>
  )
}