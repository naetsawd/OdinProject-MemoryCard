import "../styles/Modal.css";

import winBanner from "../assets/winBanner.jpg";
import loseBanner from "../assets/loseBanner.jpg";

const Modal = ({ showModal, goMenu, retry }) => (
	<div className="modal-container">
		<div className="modal">
			<p className="game-outcome">
				{showModal == "win"
					? "You Win!"
					: showModal == "lose"
					? "Game Over!"
					: null}
			</p>
			<div className="modal-btns">
				<button onClick={goMenu}>Menu</button>
				<button onClick={retry}>Retry</button>
			</div>
			<img
				src={
					showModal == "win"
						? winBanner
						: showModal == "lose"
						? loseBanner
						: null
				}
				alt={
					showModal == "win"
						? "You Win!"
						: showModal == "lose"
						? "Game Over!"
						: null
				}
			/>
		</div>
	</div>
);

export default Modal;
