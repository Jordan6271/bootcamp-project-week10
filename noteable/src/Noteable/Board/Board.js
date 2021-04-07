import React from "react";
import Table from "react-bootstrap/Table";

class Board extends React.Component {
	buildRows() {
		return this.props.notes.map((current) => (
			<tr key={current.username}>
				<td>{current.username}</td>
				<td>{current.title}</td>
				<td>{current.description}</td>
				<td>{current.stamps}</td>
				<td>{current.timestamp}</td>
			</tr>
		));
	}

	render() {
		return (
			<div id="board">
				<div id="board-title">
					<h1>Noteboard App</h1>
				</div>
				<div id="notes-area">
					<Table striped border hover>
						<thead>
							<tr>
								<th>Username</th>
								<th>Title</th>
								<th>Description</th>
								<th>Stamps</th>
								<th>Timestamp</th>
							</tr>
						</thead>
						<tbody>{this.buildRows()}</tbody>
					</Table>
				</div>
			</div>
		);
	}
}

export default Board;
