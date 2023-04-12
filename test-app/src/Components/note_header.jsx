import React from 'react';
import '../styles/main.css'
import MyButton from './UI/myButton';

function NoteHeader({setFormAddVisible, setformEditVisible, formAddVisible, formEditVisible}) {
    function visiabilityAdd(){
        if(!formAddVisible){
            setFormAddVisible(true)
            setformEditVisible(false)
        }else{
            setFormAddVisible(false)
        }
    }
    function visiabilityEdit(){
        if(!formEditVisible){
            setformEditVisible(true)
            setFormAddVisible(false)
        }else{
            setformEditVisible(false)
        }
    }
    
    return ( 
        <header className='note__header'>
            <MyButton click={visiabilityAdd} name={"Add"}/>
            <MyButton name={"Remove"}/>
            <MyButton click={visiabilityEdit} name={"Edit"}/>
            <MyButton name={"Reset"}/>
        </header>
     );
}

export default NoteHeader;