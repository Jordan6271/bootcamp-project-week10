import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';

function Note() {
    const[id, changeId] = useState(0);
    const[username, changeUsername] = useState(`User1`);
    const[title, changeTitle] = useState(`Test Title`);
    const[attachment, changeAttachment] = useState(``);
    const[description, changeDescription] = useState(`Test Description`);
    const[stamps, changeStamps] = useState(0);
    
    const timestamp = () => {
        const now = new Date();
        return (
            now.toLocaleString()
        );
    }
    return (
        <div id="note">
            <Table>
                <thead>
                    <tr>
                        <td>{username}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{title}</th>
                    </tr>
                    <tr>
                        <td>{attachment}</td>
                    </tr>
                    <tr>
                        <td>{description}</td>
                    </tr>
                    <tr>
                        <td>Stamps: {stamps}</td>
                        <td>{timestamp()}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Note;