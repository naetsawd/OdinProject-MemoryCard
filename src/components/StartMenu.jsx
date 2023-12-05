import "../styles/StartMenu.css";

function StartMenu({ setGameStarted, setDifficulty }) {
	const startGameBtn = (difficulty) => {
		setGameStarted(true);
		setDifficulty(difficulty);
	};

	return (
		<div className="start-container">
			<button onClick={() => startGameBtn(3)}>Easy</button>
			<button onClick={() => startGameBtn(7)}>Medium</button>
			<button onClick={() => startGameBtn(10)}>Hard</button>
		</div>
	);
}

export default StartMenu;
