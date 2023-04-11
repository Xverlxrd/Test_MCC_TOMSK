import React, { useState } from "react";
import NoteHeader from "./note_header";
import NoteList from "./noteList";
import NoteForm from "./noteForm";

function NoteApp() {
  const [notes, setNotes] = useState([]);
  const [formVisibility, setFormVisibility] = useState(false);
  const [editVisibility, setEditVisibility] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  function addNewNote(newNote) {
    setNotes([...notes, newNote]);
  }
  function editNoteTitle(newTitle) {
    const updateTitleNote = notes.map(n => {
        if(n.id === selectedNoteId){
            return { ...n, title: newTitle };
        }
        return n;
    })
    setNotes(updateTitleNote)
    setEditVisibility(false);
  }
  function filterNote(note) {
    if (selectedNoteId === note.id) {
      setNotes(notes.filter((d) => d.id !== note.id));
    }
  }
  function resetNotes(notes) {
    setNotes([]);
  }
  return (
    <div className="note__app">
      <NoteHeader
        resetNotes={resetNotes}
        filterNote={filterNote}
        notes={notes}
        setFormVisibility={setFormVisibility}
        setEditVisibility={setEditVisibility}
      />
      <NoteForm
        editNoteTitle={editNoteTitle}
        addNewNote={addNewNote}
        setFormVisibility={setFormVisibility}
        formVisibility={formVisibility}
        setEditVisibility={setEditVisibility}
        editVisibility={editVisibility}
        selectedNoteId={selectedNoteId}
        notes={notes}
      />
      <NoteList
        selectedNoteId={selectedNoteId}
        setSelectedNoteId={setSelectedNoteId}
        notes={notes}
      />
    </div>
  );
}

export default NoteApp;
