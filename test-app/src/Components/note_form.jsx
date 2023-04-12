import React, { useState } from 'react';
import '../styles/main.css'

function NoteForm({
    ButtonTitle,
    FormTitle,
    addNewNote, 
    setFormAddVisible, 
    setformEditVisible, 
    addNewTitle 
}) {
    const [note, setNote] = useState({ title: "" });

    function createNewNote(e) {
        e.preventDefault()
        const newNote = {
            id: Date.now(),
            title: note.title,
        }
        if (note.title.trim()) {
            addNewNote(newNote)
            setNote({ title: '' })
            setFormAddVisible(false)
        }
    }
    function EditNote(e) {
        e.preventDefault()
        const newTitle = {
            title: note.title,
            id: Date.now(),
        }
        if (note.title.trim()) {
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
                <button onClick={EditNote} className='note_btn'>{ButtonTitle}</button>
            )}
        </form>
    );
}

export default NoteForm;