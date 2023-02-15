import "./NotesContainer.css";

export default function NotesContainer({children, className}) {
  return (
    <div className = {className} >{children}</div>
  )
}