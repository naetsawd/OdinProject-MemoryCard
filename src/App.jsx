import { useEffect, useState } from "react";

import "./App.css";

function App() {
	const [charList, setCharList] = useState([]);

	useEffect(() => {
		fetch("https://rickandmortyapi.com/api/character")
			.then((response) => response.json())
			.then((data) => {
				setCharList(data.results.slice(0, 5));
			})
			.catch((error) => console.error(error));
	}, []);

	return (
		<>
			<div>
				{charList.map((char) => (
					<div>{char.name}</div>
				))}
			</div>
		</>
	);
}

export default App;
