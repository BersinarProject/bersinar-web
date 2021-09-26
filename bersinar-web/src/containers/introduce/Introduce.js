/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Introduce.css";
import infoImg from "../../assets/images/infoImg.png";

const introduce = () => {
	return (
		<div className="intro column">
			<div className="container intro-section d-flex justify-content-between align-items-center">
				<div className="col-xl-6">
					<img className="introImg" src={infoImg} alt="Info Image" />
				</div>
				<div className="intro-right-section col-xl-6">
					<h1 className="intro-title">
						Bersinar hadir dengan menyediakan kelas persiapan UTBK
						dan ujian mandiri gratis.
					</h1>
					<p className="intro-subtitle">
						Sejak Desember 2020, Bersinar telah membantu lebih dari
						10.000 calon mahasiswa dari seluruh kelas yang telah
						dilaksanakan.
					</p>
				</div>
			</div>
		</div>
	);
};

export default introduce;
