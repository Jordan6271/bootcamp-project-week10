import React from 'react';
import Note from '../Note/Note';

function Board() {
    return (
        <div id="board">
            <div id="board-title">
                <h1>Noteboard App</h1>
            </div>
            <div id="notes-area">
                <Note />
            </div>
        </div>
    );
}

export default Board;