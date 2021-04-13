import React from "react";

import Colour from "./Colour";
import Stamp from "./Stamp";

import toastr from "toastr";
import "toastr/build/toastr.min.css";

import Form from "react-bootstrap/Form";
import Text from "react-bootstrap/FormText";
import Button from "react-bootstrap/Button";

class NewNote extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: ``,
			title: ``,
			description: ``,
			stamps: Math.floor(Math.random() * 101),
			stamped: false,
			stampStyle: Stamp[0],
			currentTime: ``,
			id: 2,
			colour: Colour[0],
		};
		toastr.options = {
			closeButton: true,
			debug: false,
			extendedTimeOut: "1000",
			hideDuration: "1000",
			hideEasing: "linear",
			hideMethod: "slideUp",
			newestOnTop: false,
			onclick: null,
			positionClass: "toast-bottom-full-width",
			preventDuplicates: true,
			progressBar: true,
			showDuration: "300",
			showEasing: "swing",
			showMethod: "slideDown",
			timeOut: "5000",
		};
	}

	updateTime() {
		this.setState({
			currentTime: `${new Date().toLocaleString()}`,
		});
	}

	updateId() {
		const lastNote = this.props.notes.slice(-1)[0];
		const lastNoteId = lastNote.id;
		if (lastNoteId >= this.state.id) {
			this.setState({ id: lastNoteId + 1 });
		}
	}

	updateVariables() {
		this.updateId();
		this.updateTime();
	}

	handleColour(event) {
		const value = event.target.value;
		switch (value) {
			case "2":
				this.setState({
					colour: Colour[1],
				});
				break;
			case "3":
				this.setState({
					colour: Colour[2],
				});
				break;
			case "4":
				this.setState({
					colour: Colour[3],
				});
				break;
			case "5":
				this.setState({
					colour: Colour[4],
				});
				break;
			case "6":
				this.setState({
					colour: Colour[5],
				});
				break;
			default:
				this.setState({
					colour: Colour[0],
				});
				break;
		}
	}

	handleChange(event) {
		const newState = {};
		newState[event.target.name] = event.target.value;
		this.setState(newState);
		if (newState.username !== ``) {
			document.getElementById(`username-error`).innerHTML = ``;
		}
		if (newState.title !== ``) {
			document.getElementById(`title-error`).innerHTML = ``;
		}
		if (newState.description !== ``) {
			document.getElementById(`description-error`).innerHTML = ``;
		}
		this.updateVariables();
	}

	submitHandler(event) {
		event.preventDefault();
		if (this.state.username === ``) {
			document.getElementById(`username-error`).innerHTML =
				"You must enter a username!";
		} else if (this.state.title === ``) {
			document.getElementById(`title-error`).innerHTML =
				"You must enter a title!";
		} else if (this.state.description === ``) {
			document.getElementById(`description-error`).innerHTML =
				"You must enter a description!";
		} else {
			this.formSubmit();
		}
	}

	formSubmit() {
		this.props.onsubmit(
			this.state.username,
			this.state.title,
			this.state.description,
			this.state.stamps,
			this.state.stamped,
			this.state.stampStyle,
			this.state.currentTime,
			this.state.id,
			this.state.colour
		);
		toastr.success(`Note pinned`);
		this.setState({
			username: ``,
			title: ``,
			description: ``,
			currentTime: ``,
			stamps: Math.floor(Math.random() * 101),
			stamped: false,
			stampStyle: Stamp[0],
			colour: Colour[0],
		});
	}

	render() {
		return (
			<div
				className="p-5"
				id="new-note"
				style={{
					fontWeight: "bold",
					height: "90vh",
				}}
			>
				<Form
					onSubmit={(event) => this.submitHandler(event)}
					className="p-4"
					style={{
						backgroundColor: "rgba(255,255,255,0.25)",
					}}
				>
					<Form.Group controlId="noteUsername">
						<Form.Label>Username:</Form.Label>
						<Form.Control
							onChange={(event) => this.handleChange(event)}
							name="username"
							type="text"
							value={this.state.username}
						/>
						<span
							className="error"
							style={{
								color: "#9A0000",
							}}
						>
							<p id="username-error"></p>
						</span>
					</Form.Group>

					<Form.Group controlId="noteTitle">
						<Form.Label>Title:</Form.Label>
						<Form.Control
							onChange={(event) => this.handleChange(event)}
							name="title"
							type="text"
							value={this.state.title}
						/>
						<span
							className="error"
							style={{
								color: "#9A0000",
							}}
						>
							<p id="title-error"></p>
						</span>
					</Form.Group>

					<Form.Group controlId="noteDescription">
						<Form.Label>Description:</Form.Label>
						<Form.Control
							onChange={(event) => this.handleChange(event)}
							name="description"
							type="text"
							value={this.state.description}
						/>
						<span
							className="error"
							style={{
								color: "#9A0000",
							}}
						>
							<p id="description-error"></p>
						</span>
					</Form.Group>

					<Form.Group controlId="noteColour">
						<Form.Label>Note Colour:</Form.Label>
						<br />
						<select
							className="form-select"
							aria-label="Selection of note colours"
							onChange={(event) => this.handleColour(event)}
							defaultValue="1"
						>
							<option value="1">Yellow</option>
							<option value="2">Blue</option>
							<option value="3">Green</option>
							<option value="4">Orange</option>
							<option value="5">Pink</option>
							<option value="6">Purple</option>
						</select>
					</Form.Group>

					<Form.Group controlId="noteStatic">
						<Text type="hidden" value={this.state.stamps} />
						<Text type="hidden" value={this.state.currentTime} />
						<Text type="hidden" value={this.state.id} />
						<Text type="hidden" value={this.state.colour} />
					</Form.Group>
					<div className="justify-content-center mx-auto">
						<Button
							onClick={() => this.updateVariables()}
							variant="danger"
							type="submit"
						>
							Pin
						</Button>
					</div>
				</Form>
			</div>
		);
	}
}

export default NewNote;
