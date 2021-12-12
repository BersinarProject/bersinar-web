import React from "react";
import "react-reveal";
import { Container } from "react-bootstrap";
import "animate.css";

import "./Footer.css";
import { NavLink } from "react-router-dom";
import logoFull from "../../assets/images/bersinar-logo/bersinarLogoFull.svg";

const Footer = () => {
	return (
		<div className="footer">
			<Container>
				<div className="footer-contents d-flex">
					<div className="footer-links d-flex">
						<div className="footer-link">
							<h1 className="footer-title footer-title-navigasi">
								Navigasi
							</h1>
							<ul className="py-2">
								<li>
									<NavLink className="footer-link" to="/">
										Beranda
									</NavLink>
								</li>
								<li>
									<NavLink
										className="footer-link"
										to="/our-class"
									>
										Jadwal Kelas
									</NavLink>
								</li>
								<li>
									<NavLink
										className="footer-link"
										to="/about-us"
									>
										Tentang Kami
									</NavLink>
								</li>
								<li>
									<a
										className="footer-link"
										target="_blank"
										rel="noreferrer"
										href="https://trakteer.id/BersinarProject/"
									>
										Donasi
									</a>
								</li>
							</ul>
						</div>
						<div className="footer-link">
							<h1 className="footer-title footer-title-kelas">
								Kelas
							</h1>
							<ul className="py-2">
								<li>
									<NavLink
										className="footer-link"
										to="/our-class"
									>
										Saintek
									</NavLink>
								</li>
								<li>
									<NavLink
										className="footer-link"
										to="/our-class"
									>
										Soshum
									</NavLink>
								</li>
								<li>
									<NavLink
										className="footer-link"
										to="/our-class"
									>
										TPS
									</NavLink>
								</li>
							</ul>
						</div>
						<div className="footer-link">
							<h1 className="footer-title footer-title-media-sosial">
								Media Sosial
							</h1>
							<ul className="py-2">
								<li>
									<a
										className="footer-link"
										target="_blank"
										rel="noreferrer"
										href="https://instagram.com/bersinarproject"
									>
										Instagram
									</a>
								</li>
								<li>
									<a
										className="footer-link"
										target="_blank"
										rel="noreferrer"
										href="https://twitter.com/bersinarproject"
									>
										Twitter
									</a>
								</li>
								<li>
									<a
										className="footer-link"
										target="_blank"
										rel="noreferrer"
										href="https://youtube.com/bersinarproject"
									>
										YouTube
									</a>
								</li>
								<li>
									<a
										className="footer-link"
										target="_blank"
										rel="noreferrer"
										href="https://www.linkedin.com/company/bersinar"
									>
										LinkedIn
									</a>
								</li>
								<li>
									<a
										className="footer-link"
										target="_blank"
										rel="noreferrer"
										href="https://tiktok.com/@bersinarproject"
									>
										TikTok
									</a>
								</li>
							</ul>
						</div>
						<div className="footer-link">
							<h1 className="footer-title footer-title-tautan-penting">
								Tautan Penting
							</h1>
							<ul className="py-2">
								<li>
									<a
										className="footer-link"
										target="_blank"
										rel="noreferrer"
										href="https://bit.ly/MateriBersinar"
									>
										Materi
									</a>
								</li>
								<li>
									<a
										className="footer-link"
										target="_blank"
										rel="noreferrer"
										href="https://bit.ly/SoalBersinar"
									>
										Soal
									</a>
								</li>
								<li>
									<NavLink
										className="footer-link"
										to="/our-class"
									>
										Kalender
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
					<div className="footer-logo">
						<ul>
							<li className="">
								<img
									className="footer-logo-img"
									src={logoFull}
									alt="Bersinar Logo"
								/>
							</li>
							<li>
								<div className="footer-text">
									Made with ❤️ while listening
									<b className="footer-text-bold">
										{" "}
										Favorite Crime
									</b>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Footer;
