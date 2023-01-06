import React, {useState} from 'react';

import './Button.scss';


function Button(props) {

    const { handlerFunction, buttonText } = props
    

    return (
        
        <div className="button" onClick={handlerFunction}>
            {buttonText}
        </div>
        
        
    )
}

export default Button;
