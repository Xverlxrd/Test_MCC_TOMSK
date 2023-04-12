import React, { useState } from 'react';
import '../styles/main.css'

function NoteForm({
    ButtonTitle,
    FormTitle,
    addNewNote,
    setFormAddVisible,
    setformEditVisible,
    addNewTitle,
    addSubNote,
    selectedItemId
}) {
    const [note, setNote] = useState({ title: "" });

    function createNewNote() {
        if (note.title.trim()) {
            const newNote = {
                id: Date.now(),
                title: note.title,
            }
            if (selectedItemId !== null) {
                const newSubNote = {
                    id: Date.now(),
                    title: note.title,
                    subNotes: []
                }
                addSubNote(newSubNote)
            } else {
                addNewNote(newNote)
            }
            setNote({ title: '' });
            setFormAddVisible(false);
        }
    }
    function editNote() {
        if (note.title.trim()) {
            const newTitle = {
                title: note.title,
                id: selectedItemId,
            }
            addNewTitle(newTitle.title)
            setNote({ title: '' })
            setformEditVisible(false)
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