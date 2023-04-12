import React, { useState } from 'react';
import '../styles/main.css'

function NoteForm({ ButtonTitle, FormTitle, addNewNote, setFormAddVisible }) {
    const [note, setNote] = useState({ title: ""});

    function createNewNote(e) {
        e.preventDefault()
        const newNote = {
            id: Date.now(),
            title: note.title,
        }
        if(note.title.trim()){
            addNewNote(newNote)
            setNote({title: ''})
            setFormAddVisible(false)
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
            <button onClick={createNewNote} className='note_btn'>{ButtonTitle}</button>
        </form>
    );
}

export default NoteForm;