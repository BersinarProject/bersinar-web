import React from "react";
import "./Counter.css";

const counter = () => {
	return (
		<div className="container">
			<div className="countBox d-flex flex-wrap justify-content-around align-items-center">
				<div className="countDetail d-flex flex-column">
					<h2 className="number">165</h2>
					<h4 className="textDetail">Kelas</h4>
				</div>
				<div className="countDetail d-flex flex-column">
					<h2 className="number">330</h2>
					<h4 className="textDetail">Jam</h4>
				</div>
				<div className="countDetail d-flex flex-column">
					<h2 className="number">13.814</h2>
					<h4 className="textDetail">Pelajar</h4>
				</div>
				<div className="countDetail d-flex flex-column">
					<h2 className="number">90%</h2>
					<h4 className="textDetail">Kepuasan</h4>
				</div>
			</div>
		</div>
	);
};

export default counter;
