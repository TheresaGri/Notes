import "./Selection.css";

export default function Selection({onPress, classOfOptions}) {
  return (
    <div className="Selection_div" onClick = {() => onPress() }>
      <div className = {classOfOptions}>work</div>
      <div className = {classOfOptions}>personal</div>
    </div>
  );
}
