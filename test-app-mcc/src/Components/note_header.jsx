import React from 'react';
import '../Styles/note_header.css'
import MyButton from './UI/btns/myButton';

function NoteHeader({setFormVisibility, notes, filterNote, resetNotes}) {
    function Visibility(){
        setFormVisibility(true)
    }
    function delNote(){
        notes.map(note =>(
            filterNote(note)
        ))
    }

    return ( 
        <header className='note__header'>
            <MyButton func={Visibility} placeholder={'Add'}/>
            <MyButton func={delNote} placeholder={'Remove'}/>
            <MyButton func placeholder={'Edit'}/>
            <MyButton func={resetNotes} placeholder={'Reset'}/>
        </header>
     );
}

export default NoteHeader;