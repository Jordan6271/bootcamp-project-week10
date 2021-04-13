import "./App.css";
import Corkboard from "./Noteable/Images/corkboard.png";
import Noteable from "./Noteable/Noteable";

function App() {
	return (
		<div
			className="App"
			style={{
				backgroundImage: `url(${Corkboard})`,
			}}
		>
			<Noteable />
		</div>
	);
}

export default App;
