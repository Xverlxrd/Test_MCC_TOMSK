import React from 'react';
import '../Styles/main.css'
import NoteItem from './noteItem';

function NoteList() {
    return ( 
        <div className='note__container'>
            <NoteItem title={'Note 1'}/>
        </div>
     );
}

export default NoteList;