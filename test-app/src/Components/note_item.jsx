import React from "react";

function NoteItem({ note, onNoteItemClick, selectedItemId }) {
  return (
    <div className="note__item_conatainer">
      <div
        onClick={() => onNoteItemClick(note.id)}
        className="note__item"
      >
        <h1 className="note__item_title">{note.title}</h1>
      </div>
      {note.subNote &&
        note.subNote.length > 0 && (
          <div className="subnote__container">
            {note.subNote.map((subNote) => (
              <NoteItem
                key={subNote.id}
                note={subNote}
                onNoteItemClick={onNoteItemClick}
                isSelected={selectedItemId === subNote.id}
              />
            ))}
          </div>
        )}
    </div>
  );
}

export default NoteItem;
