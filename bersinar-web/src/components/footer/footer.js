/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "react-reveal";
import "animate.css";

import "./Footer.css";
import { NavLink } from "react-router-dom";
import logoFull from "../../assets/images/bersinar-logo/bersinarLogoFull.svg";

const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="row row-cols-2 row-cols-sm-2 row-cols-md-4 row-cols-lg-5">
					<div className="col">
						<h1 className="footer-title">Navigasi</h1>
						<ul className="py-2">
							<li className="footer-link">
								<NavLink className="footer-link" to="/">
									Beranda
								</NavLink>
							</li>
							<li className="footer-link">
								<NavLink
									className="footer-link"
									to="/our-class"
								>
									Jadwal Kelas
								</NavLink>
							</li>
							<li className="footer-link">
								<NavLink className="footer-link" to="/about-us">
									Tentang Kami
								</NavLink>
							</li>
							<li className="footer-link">
								<a className="footer-link" href="/">
									Donasi
								</a>
							</li>
						</ul>
					</div>
					<div className="col">
						<h1 className="footer-title">Kelas</h1>
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
						<h1 className="footer-title">Media Sosial</h1>
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
						<h1 className="footer-title">Tautan</h1>
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
									Kalender
								</a>
							</li>
						</ul>
					</div>
					<div className="col footerLogo">
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
			</div>
		</div>
	);
};

export default Footer;
