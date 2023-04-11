import React, { useState } from "react";

function NoteForm({ setFormVisibility, formVisibility, addNewNote }) {
  const [note, setNote] = useState({ title: "" });                                          
  function createNote(e) {
    e.preventDefault();
    const newNote = {
      title: note.title,
      id: Date.now(),
    };
    if (note.title.trim()) {
      addNewNote(newNote);
      setNote({title: ""});
      setFormVisibility(false);
    }
  }
  return (
    formVisibility && (
      <form className="note__form">
        <h1 className="form__title">Add note</h1>
        <input
          type="text"
          className="input__title"
          value={note.title}
          onChange={(e) => setNote({ title: e.target.value })}
        />
        <button onClick={createNote} className="btn_add">
          Add
        </button>
      </form>
    )
  );
}

export default NoteForm;
