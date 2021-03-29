import React from 'react';

import Board from './Board/Board';
import NewNote from './Note/NewNote';

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import {
    HashRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

function Noteable() {
    return (
        <Router>
            <Navbar bg="light" expand="md">
                <Navbar.Brand>Noteable</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/">Board</Link>
                        <Link className="nav-link" to="/new-note">New Note</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Switch>
                    <Route path='/new-note'>
                        <NewNote />
                    </Route>
                    <Route exact path='/'>
                        <Board />
                    </Route>
                    <Route path='/'>
                        Error: 404 not found
                    </Route>
                </Switch>
            </Container>
        </Router>
      );
}

export default Noteable;