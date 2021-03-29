import React from 'react';
import Table from 'react-bootstrap/Table';

function Note() {
    
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
                        <th>ID:</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Username:</th>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Title:</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Attachment:</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Description:</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Timestamp:</th>
                        <td>{timestamp()}</td>
                    </tr>
                    <tr>
                        <th>Likes:</th>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Note;