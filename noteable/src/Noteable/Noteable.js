import React from "react";

import Colour from "./Note/Colour";
import Stamp from "./Note/Stamp";
import Board from "./Board/Board";
import NewNote from "./Note/NewNote";

import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

class Noteable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {
                    username: `Test User`,
                    title: `Test Title`,
                    description: `Test Description`,
                    stamps: 0,
                    stamped: false,
                    stampStyle: Stamp[0],
                    currentTime: `${new Date().toLocaleString()}`,
                    id: 0,
                    colour: Colour[0],
                },
                {
                    username: `Another User`,
                    title: `My Note`,
                    description: `I have some very interesting ideas.`,
                    stamps: 100,
                    stamped: true,
                    stampStyle: Stamp[1],
                    currentTime: `${new Date().toLocaleString()}`,
                    id: 1,
                    colour: Colour[4],
                },
            ],
        };
    }

    removeNote(currentId) {
        const notelist = JSON.parse(localStorage.getItem(`notelist`));
        const index = this.state.notes.indexOf(this.state.notes[currentId]);
        if (currentId > 1) {
            notelist.splice(index, 1);
            localStorage.setItem(`notelist`, JSON.stringify(notelist));
            this.componentDidMount();
        } else {
            alert(
                `This is a test note, it cannot be removed. Try removing one of your own.`
            );
        }
    }

    stampToggle(currentId) {
        let newState = Object.assign({}, this.state);
        if (this.state.notes[currentId].stamped === false) {
            newState.notes[currentId].stamps++;
            newState.notes[currentId].stamped = true;
            newState.notes[currentId].stampStyle = Stamp[1];
        } else {
            newState.notes[currentId].stamps--;
            newState.notes[currentId].stamped = false;
            newState.notes[currentId].stampStyle = Stamp[0];
        }
        this.setState(newState);
    }

    componentDidMount() {
        const listContents = localStorage.getItem(`notelist`);
        this.setState({
            notes: JSON.parse(listContents) || this.state.notes,
        });
    }

    updateNotes(
        username,
        title,
        description,
        stamps,
        stamped,
        stampStyle,
        currentTime,
        id,
        colour
    ) {
        const listItem = {
            username,
            title,
            description,
            stamps,
            stamped,
            stampStyle,
            currentTime,
            id,
            colour,
        };
        this.setState(
            (state) => ({
                notes: state.notes.concat(listItem),
            }),
            () =>
                localStorage.setItem(
                    `notelist`,
                    JSON.stringify(this.state.notes)
                )
        );
    }

    render() {
        return (
            <Router>
                <Navbar
                    bg="dark"
                    variant="dark"
                    className="fixed-top"
                    expand="md"
                    style={{
                        height: "10vh",
                        fontSize: "1.25rem",
                    }}
                >
                    <Navbar.Brand className="mr-5">Noteable</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link className="nav-link mx-2" to="/">
                                Board
                            </Link>
                            <Link className="nav-link mx-2" to="/new-note">
                                New Note
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Container className="pt-lg-5">
                    <Switch>
                        <Route path="/new-note">
                            <NewNote
                                notes={this.state.notes}
                                onsubmit={(
                                    username,
                                    title,
                                    description,
                                    stamps,
                                    stamped,
                                    stampStyle,
                                    currentTime,
                                    id,
                                    colour
                                ) =>
                                    this.updateNotes(
                                        username,
                                        title,
                                        description,
                                        stamps,
                                        stamped,
                                        stampStyle,
                                        currentTime,
                                        id,
                                        colour
                                    )
                                }
                            />
                        </Route>
                        <Route exact path="/">
                            <Board
                                notes={this.state.notes}
                                onStamp={(currentId) =>
                                    this.stampToggle(currentId)
                                }
                                onRemove={(currentId) =>
                                    this.removeNote(currentId)
                                }
                            />
                        </Route>
                        <Route path="/">Error: 404 not found</Route>
                    </Switch>
                </Container>
            </Router>
        );
    }
}

export default Noteable;
