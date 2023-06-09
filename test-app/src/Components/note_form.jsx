import React, { useState } from 'react';
import '../styles/main.css'

function NoteForm({
    ButtonTitle,
    FormTitle,
    addNewNote,
    setFormAddVisible,
    setformEditVisible,
    addNewTitle,
    selectedItemId,
    addNewSubnote,
    notes,
    setSelectedItemId
}) {
    const [note, setNote] = useState({ title: "" , subNote: []});

    function createNewNote(e) {
        e.preventDefault()
        if (note.title.trim()) {
            const newNote = {
                id: Date.now(),
                title: note.title,
                subNote: []
            }
            const newSubnote = {
                id: Date.now(),
                title: note.title,
                subNote: [],
            }
            if (selectedItemId !== null) {
                addNewSubnote(newSubnote, notes, selectedItemId)
            } else {
                addNewNote(newNote)
            }
            setNote({ title: '' });
            setFormAddVisible(false);
        }
        setSelectedItemId(null)
    }
    function editNote() {
        if (note.title.trim()) {
            const newTitle = {
                title: note.title,
                id: selectedItemId,
            }
            addNewTitle(newTitle.title);
            setNote({ title: '' });
            setformEditVisible(false);
        }
    }
    return (
        <form className='note_form'>
            <h1 className='form_title'>{FormTitle}</h1>
            <input
                value={note.title}
                onChange={(e) => setNote({ title: e.target.value })}
                type="text"
                className="note_input"
            />
            {ButtonTitle === 'Add' && (
                <button onClick={createNewNote} className='note_btn'>{ButtonTitle}</button>
            )}
            {ButtonTitle === 'Edit' && (
                <button onClick={editNote} className='note_btn'>{ButtonTitle}</button>
            )}
        </form>
    );
}

export default NoteForm;