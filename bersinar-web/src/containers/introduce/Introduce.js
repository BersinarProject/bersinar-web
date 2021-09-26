import React from "react";

import "./Introduce.css";
import infoImg from "../../assets/images/infoImg.png";

const introduce = () => {
	return (
		<div className="intro column">
			<div className="intro-section container d-flex justify-content-between align-items-center">
				<div className="col-md-5">
					<img className="introImg" src={infoImg} alt="Info" />
				</div>
				<div className="intro-right-section">
					<h1 className="intro-title">
						Bersinar hadir dengan menyediakan kelas persiapan UTBK
						dan ujian mandiri gratis.
					</h1>
					<p className="intro-subTitle">
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
