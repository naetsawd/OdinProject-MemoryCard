import showTitle from "../assets/showTitle.png";

import "../styles/StartMenu.css";

function StartMenu({ setGameStarted, setDifficulty }) {
	const startGameBtn = (difficulty) => {
		setGameStarted(true);
		setDifficulty(difficulty);
	};

	return (
		<div className="start-container">
			<img src={showTitle} className="show-title" />

			<p className="game-title">Memory Card Game</p>

			<div className="difficulty-btns-container">
				<button className="difficulty-btn" onClick={() => startGameBtn(3)}>
					Easy
				</button>
				<button className="difficulty-btn" onClick={() => startGameBtn(7)}>
					Medium
				</button>
				<button className="difficulty-btn" onClick={() => startGameBtn(10)}>
					Hard
				</button>
			</div>
		</div>
	);
}

export default StartMenu;
