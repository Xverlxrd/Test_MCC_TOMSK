import React, { useState } from "react";
import "./styles/main.css";
import NoteHeader from "./Components/note_header";
import NoteForm from "./Components/note_form";
import NoteList from "./Components/note_list";

function App() {
  const [formAddVisible, setFormAddVisible] = useState(false);
  const [formEditVisible, setformEditVisible] = useState(false);
  const [notes, setNotes] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

  function handleNoteItemClick(id) {
    // Устанавливаем id выбранного элемента в состояние
    setSelectedItemId(id);
  }

  function addNewSubnote(newSubnote, notes, selectedItemId) {
    function addSubnoteRecursively(notesArray, targetId, newSubnoteItem) {
      return notesArray.map((note) => {
        if (note.id === targetId) {
          return { ...note, subNote: [...note.subNote, newSubnoteItem] };
        } else if (note.subNote.length > 0) {
          return {
            ...note,
            subNote: addSubnoteRecursively(
              note.subNote,
              targetId,
              newSubnoteItem
            ),
          };
        }
        return note;
      });
    }

    const updatedNotes = addSubnoteRecursively(
      notes,
      selectedItemId,
      newSubnote
    );
    setNotes(updatedNotes);
  }

  function reset() {
    setNotes([]);
  }
  function addNewNote(newNote) {
    setNotes([...notes, newNote]);
  }
  function addNewTitle(newTitle) {
    const updateTitleNotes = notes.map((n) => {
      if (selectedItemId === n.id) {
        return { ...n, title: newTitle };
      }
      return n;
    });
    setNotes(updateTitleNotes);
  }
  function filterNote(note) {
    if (selectedItemId === note.id) {
      setNotes(notes.filter((e) => e.id !== note.id));
    }
  }
  return (
    <div className="App">
      <NoteHeader
        reset={reset}
        notes={notes}
        filterNote={filterNote}
        formEditVisible={formEditVisible}
        formAddVisible={formAddVisible}
        setFormAddVisible={setFormAddVisible}
        setformEditVisible={setformEditVisible}
      />

      <NoteList
        handleNoteItemClick={handleNoteItemClick}
        notes={notes}
        selectedItemId={selectedItemId}
        setSelectedItemId={setSelectedItemId}
      />

      {formAddVisible && (
        <NoteForm
          notes={notes}
          addNewSubnote={addNewSubnote}
          selectedItemId={selectedItemId}
          setformEditVisible={setformEditVisible}
          setFormAddVisible={setFormAddVisible}
          addNewNote={addNewNote}
          FormTitle={"Add note"}
          ButtonTitle={"Add"}
        />
      )}

      {formEditVisible && (
        <NoteForm
          setformEditVisible={setformEditVisible}
          addNewTitle={addNewTitle}
          FormTitle={"Edit note"}
          ButtonTitle={"Edit"}
        />
      )}
    </div>
  );
}

export default App;
