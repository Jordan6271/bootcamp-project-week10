import React from 'react';
import Board from './Board/Board';
import NewNote from './Note/NewNote';

function Noteable() {
    return (
        <div className="noteable">
            <NewNote />
            <Board />
        </div>
      );
}

export default Noteable;