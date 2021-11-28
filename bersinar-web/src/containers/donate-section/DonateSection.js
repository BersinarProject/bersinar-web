import React from "react";

import "./DonateSection.css";
import donate from "../../assets/images/donateHero.png";
import donateIcon from "../../assets/images/donateIcon.svg";

const Donate = () => {
	return (
		<div className="donate-section">
			<div className="container d-flex flex-wrap justify-content-around align-items-center mb-5">
				<img src={donate} alt="donate" className="donate-section-img" />
				<div className="donate-text col-md-6">
					<h1 className="donate-title">Donate to Bersinar Project</h1>
					<p className="donate-description">
						Dukung Bersinar agar dapat terus berkembang dan
						menjangkau lebih banyak pelajar lainnya!
					</p>
					<a href="/" className="btn-donate">
						<img
							src={donateIcon}
							alt="donate icon"
							className="donate-icon"
						/>
						Donate
					</a>
				</div>
			</div>
		</div>
	);
};

export default Donate;
