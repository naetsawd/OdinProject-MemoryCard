import { useEffect, useState } from "react";

import "../styles/CardsGrid.css";

function CardsGrid({ setGameStarted, charList }) {
	const endGameBtn = () => {
		setGameStarted(false);
	};

	return (
		<div className="cards-container">
			<button onClick={endGameBtn}>Main Menu</button>
			{charList.map((char) => (
				<div key={char.id}>
					<div>{char.name}</div>
					<img src={char.image} />
				</div>
			))}
		</div>
	);
}

export default CardsGrid;
