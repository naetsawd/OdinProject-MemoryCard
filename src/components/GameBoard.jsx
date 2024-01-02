import { useEffect, useState } from "react";

import "../styles/GameBoard.css";

import Card from "../components/Card.jsx";
import Modal from "../components/Modal.jsx";

import showTitle from "../assets/showTitle.png";

function GameBoard({ setGameStarted, charList, difficulty }) {
	charList = charList.slice(0, difficulty);

	const [shuffledChars, setShuffledChars] = useState(shuffle(charList));
	const [chosenChar, setChosenChar] = useState([]);
	const [currScore, setCurrScore] = useState(-1);
	const [highScore, setHighScore] = useState(0);
	const [showModal, setShowModal] = useState([false, "neither"]);
	const [flipped, setFlipped] = useState(false);

	const goHomeBtn = () => {
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

	const flipAll = () => {
		setFlipped(false);
		setTimeout(() => {
			setFlipped(true);
		}, 600);
	};

	const selectChar = (id) => {
		flipAll();

		setChosenChar([...chosenChar, id]);

		setTimeout(() => {
			setShuffledChars(shuffle(charList));
		}, 500);
	};

	const restartGame = () => {
		setChosenChar([]);
		setCurrScore(-1);
		setShowModal([false, "neither"]);
		setShuffledChars(shuffle(charList));
	};

	useEffect(() => {
		setTimeout(() => {
			setFlipped(true);
		}, 500);
	}, []);

	useEffect(() => {
		if (new Set(chosenChar).size == chosenChar.length) {
			setCurrScore((prevScore) => prevScore + 1);
		}

		if (new Set(chosenChar).size !== chosenChar.length) {
			setShowModal([true, "lose"]);
		} else if (chosenChar.length === difficulty) {
			setShowModal([true, "win"]);
		}
	}, [chosenChar]);

	useEffect(() => {
		if (currScore > highScore) {
			setHighScore((prevHighScore) => Math.max(prevHighScore, currScore));
		}
	}, [currScore]);

	return (
		<div className="game-board">
			<img src={showTitle} className="home-btn-title" onClick={goHomeBtn} />

			<div className="score-board">
				<p className="curr-score">Score: {currScore.toString()}</p>
				<p className="high-score">High Score: {highScore.toString()}</p>
			</div>

			<div className="cards-container">
				{shuffledChars.map((char) => (
					<Card
						key={char.id}
						id={char.id}
						image={char.image}
						name={char.name}
						flipped={flipped}
						onClick={flipped ? () => selectChar(char.id) : null}
					/>
				))}
			</div>

			{showModal[0] == true && (
				<Modal
					showModal={showModal[1]}
					goMenu={goHomeBtn}
					retry={restartGame}
				/>
			)}
		</div>
	);
}

export default GameBoard;
