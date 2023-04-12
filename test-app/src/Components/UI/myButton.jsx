import React from 'react';
import '../UI/myButton.css'

function MyButton(props) {
    return ( 
        <button className='myBtn' onClick={props.click}>
            {props.name}
        </button>
     );
}

export default MyButton;