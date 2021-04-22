
export default function (props, { slots }) {
  return (
    <div>
      <span>{props.title}</span>
      <div>
        {slots.default ? slots.default() : null}
      </div>
    </div>
  )
}