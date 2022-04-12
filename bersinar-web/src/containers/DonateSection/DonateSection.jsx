import React from "react";
import donateIllustration from "../../assets/images/donateIllustration.svg";
import donateButtonIcon from "../../assets/icons/buttons/gift-green.svg";
import "./DonateSection.css";

export default function DonateSection() {
	return (
		<div className="donate-section container">
			<div className="donate-section-content d-flex flex-wrap align-items-center">
				<img
					src={donateIllustration}
					alt="donate"
					className="donate-image"
				/>
				<div className="donate-text col-md-6">
					<h1 className="donate-text-title">Donasi untuk Bersinar</h1>
					<p className="donate-text-description">
						Dukung Bersinar agar dapat terus berkembang dan
						menjangkau lebih banyak pelajar lainnya dengan
						berdonasi!
					</p>
					<a
						href="https://trakteer.id/BersinarProject/"
						className="btn-donate d-flex align-item-center text-decoration-none"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src={donateButtonIcon}
							alt="donate icon"
							className="btn-donate-icon"
						/>
						<span className="btn-donate-text">Donasi di sini</span>
					</a>
				</div>
			</div>
		</div>
	);
}
