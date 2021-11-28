import React from "react";
import "./Counter.css";

const counter = () => {
	return (
		<div className="countBox">
			<div className="container d-flex flex-wrap justify-content-center align-items-center">
				<div className="col-lg-12 col-md-10 justify-content-center">
					<h1 className="counter-title mb-3">Pencapaian Kami</h1>
					<h2 className="counter-subTitle">
						Desember 2020 hingga Desember 2021
					</h2>
				</div>
				<div className="col-lg-3 col-md-3 countDetail d-flex flex-column">
					<h2 className="number">165</h2>
					<h4 className="textDetail">Kelas</h4>
				</div>
				<div className="col-lg-3 col-md-3 countDetail d-flex flex-column">
					<h2 className="number">330</h2>
					<h4 className="textDetail">Jam</h4>
				</div>
				<div className="col-lg-3 col-md-3 countDetail d-flex flex-column">
					<h2 className="number">13.814</h2>
					<h4 className="textDetail">Pelajar</h4>
				</div>
				<div className="col-lg-3 col-md-3 countDetail d-flex flex-column">
					<h2 className="number">90%</h2>
					<h4 className="textDetail">Kepuasan</h4>
				</div>
			</div>
		</div>
	);
};

export default counter;
