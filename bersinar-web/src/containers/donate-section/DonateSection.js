import React from "react";

import "./DonateSection.css";
import donate from "../../assets/images/landing-page/donateIllustration.svg";
import donateIcon from "../../assets/images/landing-page/donateIcon.svg";

const Donate = () => {
	return (
		<div className="donate-section container">
			<div className="donate-section-content d-flex flex-wrap align-items-center">
				<img src={donate} alt="donate" className="donate-image" />
				<div className="donate-text col-md-6">
					<h1 className="donate-text-title">Donasi untuk Bersinar</h1>
					<p className="donate-text-description">
						Dukung Bersinar agar dapat terus berkembang dan
						menjangkau lebih banyak pelajar lainnya dengan
						berdonasi!
					</p>
					<a
						href="https://trakteer.id/BersinarProject/tip/embed/modal"
						className="btn-donate d-flex align-item-center text-decoration-none"
					>
						<img
							src={donateIcon}
							alt="donate icon"
							className="btn-donate-icon"
						/>
						<span className="btn-donate-text">Donasi di sini</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Donate;
