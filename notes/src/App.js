import "./App.css";
import NotesContainer from "./components/NotesContainer.js";
import InputField from "./components/InputField";
import ButtonComponent from "./components/ButtonComponent";
import Selection from "./components/Selection";
import InputFilter from "./components/InputFilter";
import { useState } from "react";

function App() {
  const [componentDiv, setComponentDiv] = useState([
    { id: 1, class: "NotesContainer_div_block", value: "", inputValue: "" },
    { id: 2, class: "NotesContainer_div_block", value: "", inputValue: "" },
  ]);

  function addNewNote() {
    let arrId = componentDiv.map((component) => component.id);
    let maxId = Math.max(...arrId);
    console.log(maxId);
    setComponentDiv([
      ...componentDiv,
      { id: maxId + 1, class: "NotesContainer_div_block" },
    ]);
  }

  function changeClass(id) {
    setComponentDiv(
      componentDiv.map((component) => {
        if (component.id === id) {
          return { ...component, class: "NotesContainer_div_none" };
        } else {
          return component;
        }
      })
    );
  }

  function changeCategory(id, event) {
    setComponentDiv(
      componentDiv.map((component) => {
        if (component.id === id) {
          return { ...component, value: event.target.value };
        } else {
          return component;
        }
      })
    );
  }

  function changeInputValue(id, event) {
    setComponentDiv(
      componentDiv.map((component) => {
        if (component.id === id) {
          return { ...component, inputValue: event.target.value };
        } else {
          return component;
        }
      })
    );
    console.log(componentDiv);
  }

  function filterNotes(event) {
    setComponentDiv(
      componentDiv.map((component) => {
        if (component.inputValue.includes(event.target.value)) {
          return { ...component, class: "NotesContainer_div_block" };
        } else {
          return { ...component, class: "NotesContainer_div_none" };
        }
      })
    );
  }

  return (
    <div className="App">
      <ButtonComponent onPress={() => addNewNote()}>Add</ButtonComponent>
      <InputFilter onChange={(event) => filterNotes(event)} />
      {componentDiv.map((component) => (
        <div
          id={component.id}
          className={component.class}
          style={{
            backgroundColor: `${component.value === "work" ? "red" : "blue"}`,
          }}
        >
          <NotesContainer>
            <InputField
              onChange={(event) => changeInputValue(component.id, event)}
            />
            <ButtonComponent onPress={() => changeClass(component.id)}>
              Delete
            </ButtonComponent>
            <Selection
              value={component.value}
              changeCategory={(event) => changeCategory(component.id, event)}
            ></Selection>
          </NotesContainer>
        </div>
      ))}
    </div>
  );
}

export default App;
