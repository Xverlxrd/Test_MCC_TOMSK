import React from 'react';
import '../btns/myButton.css'

function MyButton(props) {
    return ( 
        <button onClick={props.func} className='MyButton'>
            {props.placeholder}
        </button>
     );
}

export default MyButton;