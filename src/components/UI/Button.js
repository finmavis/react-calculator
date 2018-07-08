import React from 'react';

const Button = (props) => {
    let button = null;

    switch(props.type) {
        case('block') : 
            button = <button type="button" className="btn btn-block" onClick={props.click}>{props.children}</button>
            break;
        default : 
            button = <button type="button" className="btn" onClick={props.click} operator={props.operator ? props.operator : null} value={props.value ? props.value : null}>{props.children}</button>
    }
    return button;
};

export default Button;