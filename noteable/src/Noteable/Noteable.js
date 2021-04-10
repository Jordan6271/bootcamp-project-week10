import React from "react";

import Colour from "./Note/Colour";
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
					username: `User1`,
					title: `Test Title`,
					description: `Test Description`,
					stamps: 0,
					currentTime: `${new Date().toLocaleString()}`,
					// id: `test0`,
					colour: Colour[0],
				},
				{
					username: `User2`,
					title: `My Note`,
					description: `Interesting ideas.`,
					stamps: 100,
					currentTime: `${new Date().toLocaleString()}`,
					// id: `test1`,
					colour: Colour[4],
				},
			],
		};
	}

	stampCounter() {
		this.setState({
			stamps: +1,
		});
		console.log(`Working`);
	}

	componentDidMount() {
		console.log(this.state.notes[0].colour);
		console.log(this.state.notes[1].colour);
		const listContents = localStorage.getItem(`notelist`);
		this.setState({
			listItems: JSON.parse(listContents) || [],
		});
	}

	updateNotes(username, title, description, stamps, currentTime, colour) {
		const listItem = {
			username,
			title,
			description,
			stamps,
			currentTime,
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
				<Navbar bg="light" expand="md">
					<Navbar.Brand>Noteable</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Link className="nav-link" to="/">
								Board
							</Link>
							<Link className="nav-link" to="/new-note">
								New Note
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<Container>
					<Switch>
						<Route path="/new-note">
							<NewNote
								onsubmit={(
									username,
									title,
									description,
									stamps,
									currentTime,
									colour
								) =>
									this.updateNotes(
										username,
										title,
										description,
										stamps,
										currentTime,
										colour
									)
								}
							/>
						</Route>
						<Route exact path="/">
							<Board notes={this.state.notes} />
						</Route>
						<Route path="/">Error: 404 not found</Route>
					</Switch>
				</Container>
			</Router>
		);
	}
}

export default Noteable;
