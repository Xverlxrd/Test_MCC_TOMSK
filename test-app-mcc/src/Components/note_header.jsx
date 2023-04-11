import React from 'react';
import '../Styles/note_header.css'
import MyButton from './UI/btns/myButton';

function NoteHeader() {
    return ( 
        <header className='note__header'>
            <MyButton placeholder={'Add'}/>
            <MyButton placeholder={'Remove'}/>
            <MyButton placeholder={'Edit'}/>
            <MyButton placeholder={'Reset'}/>
        </header>
     );
}

export default NoteHeader;