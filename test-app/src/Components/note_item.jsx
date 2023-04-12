import React from "react";

function NoteItem({ note, onNoteItemClick, isSelected }) {
  return (
    <div className="note__item_conatainer">
      <div
        onClick={() => onNoteItemClick(note.id)}
        style={{ backgroundColor: isSelected ? "blue" : "white" }}
        className="note__item"
      >
        <h1 className="note__item_title">{note.title}</h1>
      </div>
      <div className="subnote__container">

      </div>
    </div>
  );
}

export default NoteItem;
