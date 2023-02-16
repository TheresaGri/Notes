export default function InputField({className, onChange}) {
  return <input type = "text" className={className} onChange = {(event) => onChange(event)}/>;
}
