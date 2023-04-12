import React from 'react';
import '../styles/main.css'
import MyButton from './UI/myButton';

function NoteHeader({
    setFormAddVisible,
    setformEditVisible,
    formAddVisible,
    formEditVisible,
    filterNote,
    notes,
    reset }
) {
    function removeNote(){
        notes.map(note => {
            return filterNote(note);
        })
    }
    function visiabilityAdd() {
        if (!formAddVisible) {
            setFormAddVisible(true)
            setformEditVisible(false)
        } else {
            setFormAddVisible(false)
        }
    }
    function visiabilityEdit() {
        if (!formEditVisible) {
            setformEditVisible(true)
            setFormAddVisible(false)
        } else {
            setformEditVisible(false)
        }
    }

    return (
        <header className='note__header'>
            <MyButton click={visiabilityAdd} name={"Add"} />
            <MyButton click={removeNote} name={"Remove"} />
            <MyButton click={visiabilityEdit} name={"Edit"} />
            <MyButton click={reset} name={"Reset"} />
        </header>
    );
}

export default NoteHeader;