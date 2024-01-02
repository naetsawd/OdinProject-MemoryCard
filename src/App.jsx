import { useState } from "react";
import { useQuery } from "@apollo/client";

import "./styles/App.css";

import GameBoard from "./components/GameBoard.jsx";
import StartMenu from "./components/StartMenu.jsx";
import GET_DATA from "./characters.jsx";

function App() {
	const [gameStarted, setGameStarted] = useState(false);
	const [difficulty, setDifficulty] = useState(0);
	
	const { loading, error, data } = useQuery(GET_DATA);

	// REST method
	// const [charList, setCharList] = useState([]);
	// const wantedChars = [1, 2, 3, 4, 196, 180, 47, 826, 242, 331];
	// useEffect(() => {
	// 	fetch(`https://rickandmortyapi.com/api/character/${wantedChars.toString()}`)
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			setCharList(data);
	// 		})
	// 		.catch((error) => console.error(error));
	// }, []);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<>
			<div className="content">
				{gameStarted ? (
					<GameBoard
						setGameStarted={setGameStarted}
						charList={data.charactersByIds}
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
