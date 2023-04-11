import React from "react";

function NoteItem(props) {
  return (
    <div className="note__item">
      <input
        className="note__item_checkbox"
        type={"radio"}
        checked={props.isChecked}
        onChange={props.onNoteItemClick}
      />
      <h1 className="note__item_title">{props.note.title}</h1>
    </div>
  );
}

export default NoteItem;
