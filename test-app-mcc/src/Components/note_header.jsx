import React from 'react';
import '../Styles/note_header.css'
import MyButton from './UI/btns/myButton';

function NoteHeader({setFormVisibility, setEditVisibility, notes, filterNote, resetNotes}) {
    function VisibilityForm(){
        setFormVisibility(true)
        setEditVisibility(false)
    }
    function VisibilityEdit(){
        setEditVisibility(true)
        setFormVisibility(false)
    }
    function delNote(){
        notes.map(note =>(
            filterNote(note)
        ))
    }

    return ( 
        <header className='note__header'>
            <MyButton func={VisibilityForm} placeholder={'Add'}/>
            <MyButton func={delNote} placeholder={'Remove'}/>
            <MyButton func={VisibilityEdit} placeholder={'Edit'}/>
            <MyButton func={resetNotes} placeholder={'Reset'}/>
        </header>
     );
}

export default NoteHeader;