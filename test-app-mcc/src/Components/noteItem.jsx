import React, { useState } from "react";

function NoteItem(props) {
  const [subNotes, setSubNotes] = useState([]);

  const addSubNote = () => {
    const newSubNote = {
      id: Date.now(),
      title: "Новая подзаметка",
      subNotes: [], // Вложенные подзаметки
    };
    setSubNotes([...subNotes, newSubNote]);
  };

  return (
    <div className="note__item_container">
      <div className="note__item">
        <input
          className="note__item_checkbox"
          type={"radio"}
          checked={props.isChecked}
          onChange={props.onNoteItemClick}
        />
        <h1 className="note__item_title">{props.note.title}</h1>
        <button onClick={addSubNote}>Add</button>
      </div>
      <div className="subnote__container">
      {subNotes.map((subNote) => (
        <NoteItem key={subNote.id} note={subNote} />
      ))}
      </div>
    </div>
  );
}

export default NoteItem;
