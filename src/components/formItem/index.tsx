import './index.less'

type Props = {
  title?: string
}

export default function (props: Props, { slots }) {
  return (
    <div class='b-form-item b-bottom-line'>
      {props.title && <span class='b-form-item--title'>{props.title}</span>}
      <div class='b-form-item--content'>
        {slots.default ? slots.default() : null}
      </div>
    </div>
  )
}