import React, { useState } from "react";

function NoteItem({ note, onNoteItemClick, isSelected }) {
  const [selectedSubnoteId, setSelectedSubnoteId] = useState(null);

  const handleSubnoteItemClick = (subnoteId) => {
    setSelectedSubnoteId(subnoteId);
  };
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
      {note.subNote.map((subNote) => (
          <NoteItem
            key={subNote.id}
            note={subNote}
            onNoteItemClick={handleSubnoteItemClick}
            isSelected={selectedSubnoteId === subNote.id}
          />
        ))}
      </div>
    </div>
  );
}

export default NoteItem;
