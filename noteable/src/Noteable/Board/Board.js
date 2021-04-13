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
						width: "35rem",
						height: "35rem",
					}}
				>
					<h2
						id="note-username"
						style={{
							paddingTop: "8rem",
							marginBottom: "0.5rem",
						}}
					>
						{current.username}
					</h2>
					<h3
						style={{
							height: "4rem",
						}}
					>
						{current.title}
					</h3>
					<p
						style={{
							height: "12rem",
							justifyContent: "center",
						}}
					>
						{current.description}
					</p>
					<p className="pt-4">
						<span id="stamps" className="m-auto">
							<Button
								style={{
									backgroundColor: "rgba(0, 0, 0, 0)",
									boxShadow: "none",
									border: "none",
								}}
							>
								<img
									src={current.stampStyle}
									alt=""
									onClick={() =>
										this.props.onClick(current.id)
									}
									style={{
										width: "2rem",
										height: "2rem",
									}}
								/>
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
