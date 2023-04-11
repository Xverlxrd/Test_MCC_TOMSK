import React from "react";
import "../Styles/main.css";

function NoteEdit() {
  return (
    <form className="note__edit_form">
      <h1 className="edit_form_title">Add note</h1>
      <input
        type="text"
        className="edit__input_title"
      />
      <button className="btn_edit">
        Add
      </button>
    </form>
  );
}

export default NoteEdit;
