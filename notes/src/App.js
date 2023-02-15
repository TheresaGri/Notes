import "./App.css";
import NotesContainer from "./components/NotesContainer.js";
import InputField from "./components/InputFIeld";
import ButtonComponent from "./components/ButtonComponent";
import Selection from "./components/Selection";
import { useState } from "react";

function App() {
  const [componentDiv, setComponentDiv] = useState([
    { id: 1, class: "NotesContainer_div_block", value: "" },
    { id: 2, class: "NotesContainer_div_block", value: "" },
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
    console.log(id);
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
   setComponentDiv( componentDiv.map((component) => {
      console.log(componentDiv);

      if (component.id === id) {
        return { ...component, value: event.target.value };
      } else {
        return component;
      }
    }));
  }

  return (
    <div className="App">
      <ButtonComponent onPress={() => addNewNote()}>Add</ButtonComponent>
      {componentDiv.map((component) => (
        <div
          id={component.id}
          className={component.class}
          style={{
            backgroundColor: `${component.value === "work" ? "red" : "blue"}`,
          }}
        >
          <NotesContainer>
            <InputField />
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
