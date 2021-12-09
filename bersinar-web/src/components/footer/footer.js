/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "react-reveal";
import "animate.css";

import "./Footer.css";
import logo from "../../assets/images/brandLogo.png";
import logotext from "../../assets/images/logoText.png";

const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="row row-cols-2 row-cols-sm-2 row-cols-md-4 row-cols-lg-5">
					<div className="col">
						<h1 className="footer-title">Navigation</h1>
						<ul className="py-2">
							<li className="footer-link">
								<a className="footer-link" href="/">
									Home
								</a>
							</li>
							<li className="footer-link">
								<a className="footer-link" href="/">
									About Us
								</a>
							</li>
							<li className="footer-link">
								<a className="footer-link" href="/">
									Our Class
								</a>
							</li>
							<li className="footer-link">
								<a className="footer-link" href="/">
									Donate
								</a>
							</li>
						</ul>
					</div>
					<div className="col">
						<h1 className="footer-title">Class</h1>
						<ul className="py-2">
							<li className="footer-link">
								<a className="footer-link" href="/">
									Saintek
								</a>
							</li>
							<li className="footer-link">
								<a className="footer-link" href="/">
									Soshum
								</a>
							</li>
							<li className="footer-link">
								<a className="footer-link" href="/">
									TPS
								</a>
							</li>
						</ul>
					</div>
					<div className="col">
						<h1 className="footer-title">Follow Us</h1>
						<ul className="py-2">
							<li className="footer-link">
								<a className="footer-link" href="/">
									Instagram
								</a>
							</li>
							<li className="footer-link">
								<a className="footer-link" href="/">
									Twitter
								</a>
							</li>
							<li className="footer-link">
								<a className="footer-link" href="/">
									YouTube
								</a>
							</li>
							<li className="footer-link">
								<a className="footer-link" href="/">
									LinkedIn
								</a>
							</li>
							<li className="footer-link">
								<a className="footer-link" href="/">
									TikTok
								</a>
							</li>
						</ul>
					</div>
					<div className="col">
						<h1 className="footer-title">Useful Link</h1>
						<ul className="py-2">
							<li className="footer-link">
								<a className="footer-link" href="/">
									Materi Bersinar
								</a>
							</li>
							<li className="footer-link">
								<a className="footer-link" href="/">
									Soal Bersinar
								</a>
							</li>
							<li className="footer-link">
								<a className="footer-link" href="/">
									Google Calendar Bersinar
								</a>
							</li>
						</ul>
					</div>
					<div className="col footerLogo">
						<ul>
							<li className="">
								<img
									className="footer-logo-img"
									src={logo}
									alt="Bersinar Logo"
								/>
							</li>
							<li className="">
								<img
									className="footer-logo-text"
									src={logotext}
									alt="Bersinar Logo"
								/>
							</li>
							<li>
								<div className="footer-text">
<<<<<<< HEAD
									Made with ❤️ while listening<b className="textBold"> Favorite Crime</b>
=======
									Made with ❤️ while listening
									<b> Favorite Crime</b>
>>>>>>> 457adc19c6cb7280f57f1e3a4f7f7f918644a766
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
