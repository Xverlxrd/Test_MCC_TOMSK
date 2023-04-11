import React from 'react';
import '../btns/myButton.css'

function MyButton(props) {
    return ( 
        <button className='MyButton'>
            {props.placeholder}
        </button>
     );
}

export default MyButton;