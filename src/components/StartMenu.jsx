import { useEffect, useState } from "react";

import "../styles/StartMenu.css";

function StartMenu({ setGameStarted }) {
	const startGameBtn = () => {
		setGameStarted(true);
	};

	return (
		<div className="start-container">
			<button onClick={startGameBtn}>Start Game</button>
		</div>
	);
}

export default StartMenu;
