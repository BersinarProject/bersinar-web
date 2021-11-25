import React from "react";
import { NavLink } from "react-router-dom";
import "./Hero.css";
import heroImg from "../../assets/images/mainHero.png";
import startIcon from "../../assets/images/startIcon.svg";

const hero = () => {
	return (
		<div className="hero column">
			<div className="hero-section container d-flex justify-content-between align-items-center py-lg-2">
				<div className="hero-left-section">
					<h1 className="hero-title col-xl-8">
						Mantepin UTBK Kamu dari Sekarang!
					</h1>
					<p className="hero-subTitle col-xl-9">
						Platform kolaborasi pelajar Indonesia untuk meraih mimpi
						dan <b className="bold">#BersinarBersama</b>
					</p>
					<NavLink className="btn start px-3 py-2" to="/">
						<img
							className="start-icon"
							src={startIcon}
							alt="Start"
						/>
						Mulai Belajar
					</NavLink>
				</div>
				<div className="">
					<img className="hero-image" src={heroImg} alt="Hero" />
				</div>
			</div>
		</div>
	);
};

export default hero;
