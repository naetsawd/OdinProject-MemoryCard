import "../styles/Footer.css";

import ghLogo from "../assets/githubLogo.svg";

function Footer() {
	return (
		<div className="footer">
			<a
				className="gh-logo"
				href="https://github.com/naetsawd/OdinProject-MemoryCard"
				target="blank"
			>
				<img src={ghLogo} />
			</a>
			<p className="footer-text">Designed &amp; Built by Dechsit Naetsawan</p>
		</div>
	);
}

export default Footer;
