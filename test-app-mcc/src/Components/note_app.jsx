import React from "react";
import NoteHeader from "./note_header";
import NoteList from "./noteList";
import NoteForm from "./noteForm";

function NoteApp() {
  return (
    <div className="note__app">
      <NoteHeader />
      <NoteForm/>
      <NoteList/>
      
    </div>
  );
}

export default NoteApp;
