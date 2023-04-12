import React, { useState } from 'react';
import './styles/main.css';
import NoteHeader from './Components/note_header';
import NoteForm from './Components/note_form';
import NoteList from './Components/note_list';


function App() {
  const [formAddVisible, setFormAddVisible] = useState(false);
  const [formEditVisible, setformEditVisible] = useState(false);
  const [notes, setNotes] = useState([])
  

  function addNewNote(newNote) {
    setNotes([...notes, newNote])
  }
  return (
    <div className="App">

      <NoteHeader
        formEditVisible={formEditVisible}
        formAddVisible={formAddVisible}
        setFormAddVisible={setFormAddVisible}
        setformEditVisible={setformEditVisible}
      />

      <NoteList
        notes={notes}
      />

      {formAddVisible && (
        <NoteForm
          setFormAddVisible={setFormAddVisible}
          addNewNote={addNewNote}
          FormTitle={"Add note"}
          ButtonTitle={"Add"}
        />
      )
      }

      {formEditVisible && (
        <NoteForm
          FormTitle={"Edit note"}
          ButtonTitle={"Edit"}
        />
      )
      }
    </div>
  );
}

export default App;
