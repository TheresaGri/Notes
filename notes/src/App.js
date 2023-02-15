import { useState } from "react";
import "./App.css";
import NotesContainer from "./components/NotesContainer.js";
import InputField from "./components/InputFIeld";

function App() {
  const [notes, setNotes] = useState([
    { id: 1, text: "A" },
    { id: 2, text: "A" },
  ]);

  /*  const changeInputNote = (id, event) => {
    console.log(id);
    console.log(event.target);
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          return { ...note, text: event.target.value };
        } else {
          return note;
        }
      })
    ); 
  }; */

  return (
    <div className="App">
      {notes.map((note) => (
        <NotesContainer>
          {note.text}
          <InputField
            id={note.id}
            value={note.text}
            onPress={(event) => {
              console.log(event.target.value);
              /*               changeInputNote(note.id);
               */
            }}
          />
        </NotesContainer>
      ))}
    </div>
  );
}

export default App;
