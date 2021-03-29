import React from 'react';
import Board from './Board/Board';
import NewNote from './Note/NewNote';

function Noteboard() {
    return (
        <div className="noteboard">
            <NewNote />
            <Board />
        </div>
      );
}

export default Noteboard;