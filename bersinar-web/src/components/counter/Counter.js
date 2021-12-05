import React from "react";

import "./Counter.css";

const counter = () => {
	return (
		<div className="counter container">
			<div className="d-flex flex-column flex-wrap justify-content-center align-items-center">
				<div className="counter-header col-md-7">
					<h1 className="counter-header-title text-center">
						Pencapaian Kami
					</h1>
					<h2 className="counter-header-subTitle text-center">
						Sejak Desember 2020, Bersinar telah menjangkau ribuan
						pelajar di seluruh Indonesia melalui kelas-kelas gratis
						yang telah dilaksanakan!
					</h2>
				</div>
			</div>
			<div className="countDetails d-flex flex-wrap align-items-center">
				<div className="countDetail d-flex flex-column">
					<h2 className="countDetail-number">100</h2>
					<h4 className="countDetail-text">Total Kelas</h4>
				</div>
				<div className="countDetail d-flex flex-column">
					<h2 className="countDetail-number">100+</h2>
					<h4 className="countDetail-text">Jam Materi</h4>
				</div>
				<div className="countDetail d-flex flex-column">
					<h2 className="countDetail-number">10K</h2>
					<h4 className="countDetail-text">Total Peserta</h4>
				</div>
				<div className="countDetail d-flex flex-column">
					<h2 className="countDetail-number">90%</h2>
					<h4 className="countDetail-text">Total Kepuasan</h4>
				</div>
			</div>
		</div>
	);
};

export default counter;
