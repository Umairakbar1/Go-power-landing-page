import React from 'react';
//  importing css files
import "./button.css";
export const Buttons = (props) =>{
    return(
        <button className="buttons">
            {props.children}
        </button>
    )
}