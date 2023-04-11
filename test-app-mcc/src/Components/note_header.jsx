import React from 'react';
import '../Styles/note_header.css'
import MyButton from './UI/btns/myButton';

function NoteHeader({setFormVisibility, removeNote}) {
    function Visibility(){
        setFormVisibility(true)
    }


    return ( 
        <header className='note__header'>
            <MyButton func={Visibility} placeholder={'Add'}/>
            <MyButton func={removeNote} placeholder={'Remove'}/>
            <MyButton func placeholder={'Edit'}/>
            <MyButton func placeholder={'Reset'}/>
        </header>
     );
}

export default NoteHeader;