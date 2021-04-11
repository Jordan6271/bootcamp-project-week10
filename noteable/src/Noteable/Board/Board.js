import React from "react";
import Button from "react-bootstrap/Button";

class Board extends React.Component {
	buildRows() {
		return this.props.notes.map((current) => (
			<div className="row" key={current.id}>
				<div
					id="user-notes"
					className="text-center col-xl-6 m-auto"
					style={{
						backgroundImage: `url(${current.colour})`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						width: "screenWidth",
						height: "screenHeight",
					}}
				>
					<h2
						id="note-username"
						style={{
							paddingTop: "125px",
							marginBottom: "25px",
						}}
					>
						{current.username} / {current.id}
					</h2>
					<h3
						style={{
							height: "50px",
						}}
					>
						{current.title}
					</h3>
					<p
						style={{
							height: "200px",
							justifyContent: "center",
						}}
					>
						{current.description}
					</p>
					<p className="pt-4">
						<span id="stamps" className="m-auto text-flex-start">
							<Button
								className={current.stampStyle}
								onClick={() => this.props.onClick(current.id)}
							>
								{current.stampText}
							</Button>
							Stamps: {current.stamps}
						</span>
						<span className="mx-5">{current.currentTime}</span>
					</p>
				</div>
			</div>
		));
	}

	render() {
		return (
			<div id="board">
				<div id="board-title">
					<h1>My Board</h1>
				</div>
				<div id="notes-area" className="container">
					{this.buildRows()}
				</div>
			</div>
		);
	}
}

export default Board;
