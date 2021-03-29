import React from 'react';
import Board from './Board/Board';
import NewNote from './Note/NewNote';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Noteable() {
    return (
        <div className="noteable">
            <Navbar bg="light" expand="md">
                <Navbar.Brand>Noteable</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        Board
                        New Note
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <NewNote />
            <Board />
        </div>
      );
}

export default Noteable;