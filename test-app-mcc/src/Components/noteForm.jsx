import React, { useState } from 'react';
import MyButton from './UI/btns/myButton';

function NoteForm() {
    const[title, setTitle] = useState('')
    return ( 
    <form className='note__form'>
        <h1 className='form__title'>Add note</h1>
        <input 
        type="text" 
        className='input__title' 
        value={title}
        onChange={e => setTitle(e.target.value)}
        />
        <button className='btn_add'>Add</button>
    </form> 
    );
}

export default NoteForm;