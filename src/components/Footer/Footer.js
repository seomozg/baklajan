import './Footer.scss';
import React from "react";

const Footer = () => {
	return (
		<footer className="footer" id="contacts">
			<div className="container">
				<div className="footer__content">
					<img src="/images/logos/logo-colorful.png" alt="Logo" className="footer__logo" />

					<div className="footer__list">
						<a href="#" className="footer__link">
							TELEGRAM
						</a>
						<a href="#" className="footer__link">
							INSTAGRAM
						</a>
						<a href="#" className="footer__link">
							LINKEDIN
						</a>
						<a href="#" className="footer__link">
							HR-BOT
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;