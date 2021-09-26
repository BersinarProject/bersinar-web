import React from "react";
import "./Counter.css";

const counter = () => {
	return (
		<div className="container">
			<div className="countBox d-flex flex-wrap justify-content-around align-items-center">
				<div className="d-flex flex-column countDetail">
					<h2 className="number">100</h2>
					<h4 className="textDetail">Kelas</h4>
				</div>
				<div className="d-flex flex-column countDetail">
					<h2 className="number">1200</h2>
					<h4 className="textDetail">Jam</h4>
				</div>
				<div className="d-flex flex-column countDetail">
					<h2 className="number">10.000++</h2>
					<h4 className="textDetail">Peserta</h4>
				</div>
				<div className="d-flex flex-column countDetail">
					<h2 className="number">100</h2>
					<h4 className="textDetail">Bulan</h4>
				</div>
			</div>
		</div>
	);
};

export default counter;
