import "./App.css";
import Corkboard from "./Noteable/Images/corkboard.png";
import Noteable from "./Noteable/Noteable";

function App() {
	return (
		<div
			className="App"
			style={{
				backgroundImage: `url(${Corkboard})`,
				fontFamily: "PullMeOut, sans-serif",
			}}
		>
			<Noteable />
		</div>
	);
}

export default App;
