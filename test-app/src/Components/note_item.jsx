import React from 'react';

function NoteItem({ note, onNoteItemClick, isSelected}) {


    return (
        <div onClick={() => onNoteItemClick(note.id)}
            style={{ backgroundColor: isSelected ? "blue" : "white"}}
            className='note__item'>
            <h1 className='note__item_title'>{note.title}</h1>
        </div>
    );
}

export default NoteItem;