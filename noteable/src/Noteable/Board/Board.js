import React from "react";
import Button from "react-bootstrap/Button";

class Board extends React.Component {
	buildRows() {
		return this.props.notes.map((current) => (
			<div className="row" key={current.id}>
				<div
					className="m-auto"
					style={{
						backgroundImage: `url(${current.colour})`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						width: "35rem",
						height: "35rem",
					}}
				>
					<Button
						className="btn-danger"
						style={{
							marginLeft: "25rem",
							marginTop: "3rem",
						}}
						onClick={() => this.props.onRemove(current.id)}
					>
						Remove
					</Button>
					<h2
						style={{
							paddingTop: "3rem",
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
						id="note-description"
						style={{
							height: "12rem",
							fontSize: "1.25rem",
						}}
					>
						{current.description}
					</p>
					<p className="pt-4">
						<span className="m-auto">
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
										this.props.onStamp(current.id)
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
			<div id="board" className="text-center">
				<div className="mt-2">
					<h1
						style={{
							fontSize: "4rem",
						}}
					>
						My Board
					</h1>
				</div>
				<div id="notes-area" className="container">
					{this.buildRows()}
				</div>
			</div>
		);
	}
}

export default Board;
