import React from "react";
import { NavLink } from "react-router-dom";
import "./Hero.css";
import landingPageHero from "../../assets/images/landing-page/landingPageHero.png";
import startIcon from "../../assets/images/startIcon.svg";

const hero = () => {
	return (
		<div className="hero">
			<div className="hero-section container d-flex justify-content-center align-items-center">
				<div className="hero-left-section">
					<h1 className="hero-title">
						Mantepin UTBK-Mu dari Sekarang!
					</h1>
					<p className="hero-subTitle">
						Platform kolaborasi pelajar Indonesia untuk meraih mimpi
						dan{" "}
						<span className="hero-subTitle-tag">
							#BersinarBersama
						</span>
					</p>
					<NavLink
						className="mulai-belajar-button btn"
						to="/our-class"
					>
						<img
							className="mulai-belajar-button-icon"
							src={startIcon}
							alt="Mulai Belajar"
						/>
						Mulai Belajar
					</NavLink>
				</div>
				<div className="hero-right-section">
					<img
						className="hero-image"
						src={landingPageHero}
						alt="Hero"
					/>
				</div>
			</div>
		</div>
	);
};

export default hero;
