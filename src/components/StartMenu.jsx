import showTitle from "../assets/showTitle.png";

import "../styles/StartMenu.css";

function StartMenu({ setGameStarted, setDifficulty, gameLoading, fetchError }) {
	const startGameBtn = (difficulty) => {
		setGameStarted(true);
		setDifficulty(difficulty);
	};

	return (
		<div className="start-container">
			<img src={showTitle} className="show-title" />

			{gameLoading ? (
				<p className="game-title">Loading...</p>
			) : fetchError ? (
				<p className="game-title">Error: {fetchError.message}</p>
			) : (
				<>
					<p className="game-title">Memory Card Game</p>
					<div className="difficulty-btns-container">
						<button className="difficulty-btn" onClick={() => startGameBtn(5)}>
							Easy
						</button>
						<button className="difficulty-btn" onClick={() => startGameBtn(10)}>
							Medium
						</button>
						<button className="difficulty-btn" onClick={() => startGameBtn(15)}>
							Hard
						</button>
					</div>
				</>
			)}
		</div>
	);
}

export default StartMenu;
