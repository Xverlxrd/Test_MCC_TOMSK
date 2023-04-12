import React from 'react';
import '../styles/main.css'
import NoteItem from './note_item';

function NoteList({ notes }) {
    return (
        <div className='list__container'>
            {notes.map((note) => (
                <NoteItem note={note} title={"Note"} key={note.id}/>
            ))}
        </div>
    );
}

export default NoteList;