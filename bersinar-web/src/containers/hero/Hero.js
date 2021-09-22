import React from "react";
import "./Hero.css";
import { NavLink } from "react-router-dom";
import heroImg from "../../assets/images/Hero.png";

const hero = () => (
	<div className="hero column">
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<h1 className="title">Mantepin UTBK Kamu dari Sekarang!</h1>
					<p className="subTitle">
						Platform kolaborasi pelajar Indonesia untuk meraih mimpi
						dan #BersinarBersama
					</p>
					<NavLink className="btn-start btn  btn-shadow px-4" to="/">
						Mulai Belajar
					</NavLink>
				</div>
				<div className="col-lg-5">
					<img className="heroImg" src={heroImg} alt="" />
				</div>
			</div>
		</div>
	</div>
);

export default hero;
