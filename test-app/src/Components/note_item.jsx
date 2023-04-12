import React, { useState } from 'react';

function NoteItem({ note }) {
    const [color, setColor] = useState("white");
    const [selectItemId, setSelectItemId] = useState(null)

    function setItemColor() {
        setSelectItemId(note.id)
        if (color === "blue") {
            setColor("white")
        } else {
            setColor("blue")
        }


    }
    return (
        <div onClick={setItemColor}
            style={{ backgroundColor: note.id === selectItemId ? "blue" : "white" }}
            className='note__item'>
            <h1 className='note__item_title'>{note.title}</h1>
        </div>
    );
}

export default NoteItem;