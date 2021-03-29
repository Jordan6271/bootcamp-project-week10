import Board from './Board/Board';
import Note from './Note/Note';

function Noteboard() {
    return (
        <div className="noteboard">
          <Board />
          <Note />
        </div>
      );
}

export default Noteboard;