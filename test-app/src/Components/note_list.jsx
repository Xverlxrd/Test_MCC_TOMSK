import React from "react";
import "../styles/main.css";
import NoteItem from "./note_item";

function NoteList({
  notes,
  selectedItemId,
  handleNoteItemClick,
}) {
  return (
    <div className="list__container">
      {notes.map((note) => (
        <NoteItem
          selectedItemId={selectedItemId}
          note={note}
          title={"Note"}
          onNoteItemClick={handleNoteItemClick}
          isSelected={selectedItemId === note.id}
          key={note.id}
        />
      ))}
    </div>
  );
}

export default NoteList;
