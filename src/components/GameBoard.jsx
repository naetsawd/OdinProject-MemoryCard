import { useEffect, useState } from "react";

import "../styles/GameBoard.css";

import showTitle from "../assets/showTitle.png";
import cardFront from "../assets/cardFront.jpg";

function CardsGrid({ setGameStarted, charList, difficulty }) {
	charList = charList.slice(0, difficulty);

	const [shuffledChars, setShuffledChars] = useState(shuffle(charList));
	const [chosenChar, setChosenChar] = useState([]);
	const [currScore, setCurrScore] = useState(0);
	const [highScore, setHighScore] = useState(
		localStorage.getItem("highScore") || 0
	);

	const endGameBtn = () => {
		setGameStarted(false);
	};

	function shuffle(array) {
		const shuffledChars = [...array];

		for (let i = shuffledChars.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledChars[i], shuffledChars[j]] = [
				shuffledChars[j],
				shuffledChars[i],
			];
		}

		return shuffledChars;
	}

	const selectChar = (id) => {
		setChosenChar([...chosenChar, id]);
		setCurrScore((prevScore) => prevScore + 1);
		setShuffledChars(shuffle(charList));
	};

	useEffect(() => {
		if (new Set(chosenChar).size !== chosenChar.length) {
			console.log("Game Over!");
			setChosenChar([]);
			setCurrScore(0);
		} else if (chosenChar.length === difficulty) {
			console.log("You Win!");
			setChosenChar([]);
			setCurrScore(0);
		}
	}, [chosenChar]);

	useEffect(() => {
		if (currScore > highScore) {
			localStorage.setItem("highScore", currScore);
			setHighScore(currScore);
		}
	}, [currScore]);

	return (
		<div className="game-board">
			<img src={showTitle} className="home-btn" onClick={endGameBtn} />

			<div className="score-board">
				<div className="curr-score">Score: {currScore.toString()}</div>
				<div className="high-score">High Score: {highScore.toString()}</div>
			</div>

			<div className="cards-container">
				{shuffledChars.map((char) => (
					<div
						className="card"
						key={char.id}
						onClick={() => selectChar(char.id)}
					>
						<img src={char.image} />
						<div>{char.name}</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default CardsGrid;
