import React from 'react';
import '../styles/main.css'
import NoteItem from './note_item';

function NoteList({ notes, setSelectedItemId, selectedItemId, subNotes }) {


    function handleNoteItemClick(id) {
        // Устанавливаем id выбранного элемента в состояние
        setSelectedItemId(id);
    }

    return (
        <div className='list__container'>
            {notes.map(note => (
                <NoteItem
                    subNotes={subNotes}
                    note={note}
                    title={"Note"}
                    onNoteItemClick={handleNoteItemClick}
                    isSelected={selectedItemId === note.id}
                    key={note.id}
                />
            ))}
        </div>
    );
}

export default NoteList;