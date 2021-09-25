import React from "react";

import "./Donate.css";
import starwars from "../../assets/images/starwars.jpg";

const Donate = () => {
	return (
		<div className="container donate-section d-flex flex-wrap justify-content-around align-items-center mb-5">
			<img src={starwars} alt="starwars" className="donate-section-img" />
			<div className="donate-right-section">
				<h1 className="donate-title">Donate to Bersinar Project</h1>
				<p className="donate-description">
					Dukung Bersinar agar dapat terus berkembang dan menjangkau
					lebih banyak pelajar lainnya!
				</p>
				<button type="button" className="btn btn-donate-section px-3">
					<a
						href="https://www.youtube.com/c/BersinarProject"
						className="btn-donate-link text-decoration-none text-white"
					>
						Donate
					</a>
				</button>
			</div>
		</div>
	);
};

export default Donate;
