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
				<div className="row flex justify-content-between">
					<div className="col-md-2 d-flex flex-column">
						<h1 className="footer-title">Navigation</h1>
						<ul>
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
					<div className="col-md-2 d-flex flex-column">
						<h1 className="footer-title">Class</h1>
						<ul>
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
					<div className="col-md-2 d-flex flex-column">
						<h1 className="footer-title">Follow Us</h1>
						<ul>
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
						</ul>
					</div>
					<div className="col-md-2 d-flex flex-column">
						<h1 className="footer-title">Useful Link</h1>
						<ul>
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
					<div className="col-md-6 py-4">
						<ul>
							<li className="">
								<img
									className="footer-logo"
									src={logo}
									alt="Bersinar Logo"
								/>
							</li>
							<li className="">
								<img
									className="footer-logotext"
									src={logotext}
									alt="Bersinar Logo"
								/>
							</li>
							<li>
								<div className="footer-text">
									Made with ❤️ while listening
									<span>
										{" "}
										<br /> Favorite Crime
									</span>
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
