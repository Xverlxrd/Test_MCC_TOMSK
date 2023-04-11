import React, { useState } from "react";
import NoteHeader from "./note_header";
import NoteList from "./noteList";
import NoteForm from "./noteForm";

function NoteApp() {
    const[notes, setNotes] = useState([

    ])
    const[formVisibility, setFormVisibility] = useState(false)

    function addNewNote(newNote){
        setNotes([...notes, newNote])
    }
    function removeNote(note){
        setNotes(notes.filter(d => d.id !== note.id))
    }
  return (
    <div className="note__app">
      <NoteHeader notes={notes} removeNote={removeNote}  setFormVisibility={setFormVisibility} />
      <NoteForm 
      addNewNote={addNewNote} 
      setFormVisibility={setFormVisibility} 
      formVisibility={formVisibility}
      />
      <NoteList notes={notes}/>
      
    </div>
  );
}

export default NoteApp;
