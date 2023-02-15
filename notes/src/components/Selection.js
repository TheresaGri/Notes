import "./Selection.css";

export default function Selection({ select, changeCategory }) {
  return (
    <div>
      <select value={select} onChange={(event) => changeCategory(event)}>
        <option>personal</option>
        <option>work</option>
      </select>
    </div>
  );
}
