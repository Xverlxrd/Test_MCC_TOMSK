import React, { useState } from "react";
import "../Styles/main.css";
import NoteItem from "./noteItem";

function NoteList({ notes }) {
    const[selectedNoteId, setSelectedNoteId] = useState(null)
    function handleNoteItemClick(id) {
        setSelectedNoteId(id);
    }
  return (
    <div className="note__container">
      {notes.map((note) => (
        <NoteItem 
        note={note} 
        isChecked={selectedNoteId === note.id} 
        onNoteItemClick={() => handleNoteItemClick(note.id)}
        key={note.id} />
      ))}
    </div>
  );
}

export default NoteList;
