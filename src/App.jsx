import { useEffect, useState } from "react";

import backgroundImage from "./assets/backgroundImage.jpg";

import "./styles/App.css";

import CardsGrid from "./components/GameBoard.jsx";
import StartMenu from "./components/StartMenu.jsx";

function App() {
	const [gameStarted, setGameStarted] = useState(false);
	const [charList, setCharList] = useState([]);
	const [difficulty, setDifficulty] = useState(3);

	const wantedChars = [1, 2, 3, 4, 196, 180, 47, 826, 242, 331];

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character/${wantedChars.toString()}`)
			.then((response) => response.json())
			.then((data) => {
				setCharList(data);
			})
			.catch((error) => console.error(error));
	}, []);

	return (
		<>
			<div className="overlay"></div>

			<div className="content">
				{gameStarted ? (
					<CardsGrid
						setGameStarted={setGameStarted}
						charList={charList}
						difficulty={difficulty}
					/>
				) : (
					<StartMenu
						setGameStarted={setGameStarted}
						setDifficulty={setDifficulty}
					/>
				)}
			</div>
		</>
	);
}

export default App;
