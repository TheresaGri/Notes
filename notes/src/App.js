import "./App.css";
import NotesContainer from "./components/NotesContainer.js";
import InputField from "./components/InputFIeld";
import ButtonComponent from "./components/ButtonComponent";
import { useState } from "react";

function App() {
  const [components, setComponents] = useState([1]);

  function addNewNote() {
    setComponents([...components, Math.max(...components) + 1]);
  }

  function deleteNote(id) {
    console.log(id);
    //problem, wenn etwas gelöscht wird, verschiebt sich der array!!!!!
    let array = components.filter((component) => component !== id);
    console.log(array);
    setComponents(array);
    console.log(components);
   }

  return (
    <div className="App">
      <ButtonComponent onPress={() => addNewNote()}>Add</ButtonComponent>
      {components.map((component) => (
        <div id={component}>
          <NotesContainer>
            <InputField />
            <ButtonComponent onPress={() => deleteNote(component)}>
              Delete
            </ButtonComponent>
          </NotesContainer>
        </div>
      ))}
    </div>
  );
}

export default App;
