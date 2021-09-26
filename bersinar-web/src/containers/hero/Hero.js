import React from "react";
import "./Hero.css";
import { NavLink } from "react-router-dom";
import heroImg from "../../assets/images/Hero.png";

const hero = () => {
	return (
		<div className="hero column">
			<div className="hero-section container d-flex justify-content-between align-items-center">
				<div className="hero-left-section">
					<h1 className="hero-title col-xl-9">
						Mantepin UTBK Kamu dari Sekarang!
					</h1>
					<p className="hero-subTitle col-xl-7">
						Platform kolaborasi pelajar Indonesia untuk meraih mimpi
						dan #BersinarBersama
					</p>
					<NavLink className="btn btn-start btn-shadow px-3" to="/">
						Mulai Belajar
					</NavLink>
				</div>
				<div className="">
					<img className="heroImg" src={heroImg} alt="" />
				</div>
			</div>
		</div>
	);
};

export default hero;
