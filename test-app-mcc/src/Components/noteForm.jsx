import React, { useState } from "react";

function NoteForm({
  setFormVisibility,
  setEditVisibility,
  editVisibility,
  formVisibility,
  addNewNote,
  selectedNoteId,
  editNoteTitle,
  notes
}) {
  const [note, setNote] = useState({ title: "" });



  function createNote(e) {
    e.preventDefault();
    const newNote = {
      title: note.title,
      id: Date.now(),
    };
    if (note.title.trim()) {
      addNewNote(newNote);
      setNote({ title: "" });
      setFormVisibility(false);
    }
  }

  function editNote(e) {
    e.preventDefault();
    const newTitle = {
      title: note.title
    }
    editNoteTitle(newTitle.title)
    setNote({title: ""})
  }
  

  return (
    <div className="form__container">
      {formVisibility && (
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
      )}
      {editVisibility && (
        <form className="note__edit_form">
          <h1 className="edit_form_title">Edit note</h1>
          <input
            value={note.title}
            onChange={(e) => setNote({ title: e.target.value })}
            type="text"
            className="edit__input_title"
          />
          <button onClick={editNote} className="btn_edit">
            Edit
          </button>
        </form>
      )}
    </div>
  );
}

export default NoteForm;
