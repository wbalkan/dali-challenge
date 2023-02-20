import React from "react";

import './Column.css';

const Column = (props) => {
    return(
        <div className="column">
            {props.content}
            <h2>{props.text}</h2>
            
        </div>
    )
}

export default Column