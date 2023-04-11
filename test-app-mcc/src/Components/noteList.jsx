import React from "react";
import "../Styles/main.css";
import NoteItem from "./noteItem";

function NoteList({ notes, selectedNoteId, setSelectedNoteId }) {


  function handleNoteItemClick(id) {
    setSelectedNoteId(id); 
  }


  return (
    <div className="note__container">
      {notes.map((note) => (
        <NoteItem
          note={note}
          key={note.id}
          isChecked={selectedNoteId === note.id} 
          onNoteItemClick={() => handleNoteItemClick(note.id)}
        />
      ))}
    </div>
  );
}

export default NoteList;
