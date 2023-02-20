import React from "react";

import Column from '../Column/Column.js';
import './ColumnContainer.css';



const ColumnContainer = () => {
    const columns = [
        {id: "col1", text: "I love to play basketball, and I'm on the club basketball team here.", content: <> <img src={require("../../images/basketball.jpg")} alt="basketball"/></>},
        {id: "col2", text: "One thing I like to do is play a lot of bullet chess. Winrate aside, it's undeniable that my games are over quick, and that's half the battle. Add me on chess.com: wiIIyum.", content: <> <img src={require("../../images/chess.jpg")} alt="chess pawn"/></>, },
        {id: "col3", text: "I'm a computer science and economics major here at Dartmouth. I've found that this generally keeps me very busy.", content: <> <img src={require("../../images/computer.jfif")} alt="computer"/></>},
    ]

    return (
        <div className="column-container">
            {columns.map((column) => (
                <Column text={column.text} content={column.content}/>
            ))}
        </div>
    )
}

export default ColumnContainer