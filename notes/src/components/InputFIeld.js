export default function InputField ({id, value, onPress }) {
  return (
    <input
      id = {id}
      value = {value}
      onChange = {()=> onPress(id) }
    />
  )
}