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

class Noteable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: [
                {username: `User1`, title: `Test Title`, description: `Test Description`, stamps: 0, timestamp: `${new Date().toLocaleString()}`},
                {username: `User2`, title: `My Note`, description: `Interesting ideas.`, stamps: 100, timestamp: `${new Date().toLocaleString()}`}
            ]
        }
    }

    componentDidMount() {
        const listContents = localStorage.getItem("list");
        this.setState(
            {
              listItems: JSON.parse(listContents) || []
            }
        )
      }

    updateNotes(username, title, description) {
        const listItem = {username, title, description};
        this.setState((state) => ({
            notes: state.listItems.concat(listItem)
        }), () => localStorage.setItem(`list`, JSON.stringify(this.state.notes)))
    }

    render() {
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
                            <NewNote onsubmit={(username, title, description) => this.updateNotes(username, title, description)} />
                        </Route>
                        <Route exact path='/'>
                            <Board notes={this.state.notes} />
                        </Route>
                        <Route path='/'>
                            Error: 404 not found
                        </Route>
                    </Switch>
                </Container>
            </Router>
        );
    }
}

export default Noteable;