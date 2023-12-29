import { useEffect, useState } from "react";

import "../styles/GameBoard.css";

import showTitle from "../assets/showTitle.png";
import winBanner from "../assets/winBanner.jpg";
import loseBanner from "../assets/loseBanner.jpg";

function GameBoard({ setGameStarted, charList, difficulty }) {
	charList = charList.slice(0, difficulty);

	const [shuffledChars, setShuffledChars] = useState(shuffle(charList));
	const [chosenChar, setChosenChar] = useState([]);
	const [currScore, setCurrScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [loseModal, setLoseModal] = useState(false);
	const [winModal, setWinModal] = useState(false);
	const [flipped, setFlipped] = useState(true);

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

		setCurrScore((prevScore) => prevScore + 1);

		setTimeout(() => {
			setShuffledChars(shuffle(charList));
		}, 500);
	};

	const restartGame = () => {
		setChosenChar([]);
		setCurrScore(0);
		setLoseModal(false);
		setWinModal(false);
		setShuffledChars(shuffle(charList));
	};

	useEffect(() => {
		if (new Set(chosenChar).size !== chosenChar.length) {
			setLoseModal(true);
		} else if (chosenChar.length === difficulty) {
			setWinModal(true);
		}
	}, [chosenChar]);

	useEffect(() => {
		if (currScore > highScore) {
			setHighScore(currScore);
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
					<div key={char.id} className={`card ${flipped ? "flipped" : ""}`}>
						<div
							className="card-front"
							onClick={flipped ? () => selectChar(char.id) : null}
						>
							<img src={char.image} />
							<p>{char.name}</p>
						</div>

						<img className="card-back"></img>
					</div>
				))}
			</div>

			{(winModal || loseModal) && (
				<div className="modal-container">
					<div className="modal">
						<p className="game-outcome">
							{winModal ? "You Win!" : loseModal ? "Game Over!" : null}
						</p>

						<div className="modal-btns">
							<button onClick={goHomeBtn}>Menu</button>
							<button onClick={restartGame}>Retry</button>
						</div>

						<img src={winModal ? winBanner : loseModal ? loseBanner : null} />
					</div>
				</div>
			)}
		</div>
	);
}

export default GameBoard;
