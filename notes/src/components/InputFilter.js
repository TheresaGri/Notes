export default function InputFilter({onChange}) {
return (
  <input  type = "text" placeholder="filter notes" onChange={(event) => onChange(event)}/> 
)

}
