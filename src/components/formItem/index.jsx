
export default function (props) {
  console.log(props)
  return (
    <div>
      <span>{props.title}</span>
      <slot></slot>
    </div>
  )
}