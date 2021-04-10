import React from "react";
import Colour from "./Colour";
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
			stamps: 0,
			currentTime: ``,
			// id: 0,
			colour: Colour[0],
		};
	}

	updateTime() {
		this.setState({
			currentTime: `${new Date().toLocaleString()}`,
		});
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
	}

	submitHandler(event) {
		event.preventDefault();
		this.props.onsubmit(
			this.state.username,
			this.state.title,
			this.state.description,
			this.state.stamps,
			this.state.currentTime,
			// this.state.id,
			this.state.colour
		);
		this.setState({
			username: ``,
			title: ``,
			description: ``,
			stamps: 0,
			currentTime: ``,
			// id: this.state.id + 1,
			colour: Colour[0],
		});
	}

	render() {
		return (
			<div id="new-note">
				<Form onSubmit={(event) => this.submitHandler(event)}>
					<Form.Group controlId="noteUsername">
						<Form.Label>Username</Form.Label>
						<Form.Control
							onChange={(event) => this.handleChange(event)}
							name="username"
							type="text"
							value={this.state.username}
						/>
					</Form.Group>

					<Form.Group controlId="noteTitle">
						<Form.Label>Title</Form.Label>
						<Form.Control
							onChange={(event) => this.handleChange(event)}
							name="title"
							type="text"
							value={this.state.title}
						/>
					</Form.Group>

					<Form.Group controlId="noteDescription">
						<Form.Label>Description</Form.Label>
						<Form.Control
							onChange={(event) => this.handleChange(event)}
							name="description"
							type="text"
							value={this.state.description}
						/>
					</Form.Group>

					<Form.Group controlId="noteColour">
						<Form.Label>Note Colour</Form.Label>
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
						{/* <Text type="hidden" value={this.state.id} /> */}
						<Text type="hidden" value={this.state.colour} />
					</Form.Group>

					<Button
						onClick={() => this.updateTime()}
						variant="danger"
						type="submit"
					>
						Pin
					</Button>
				</Form>
			</div>
		);
	}
}

export default NewNote;
