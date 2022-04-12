import React from "react";
import { NavLink } from "react-router-dom";
import FAQIllustration from "../../assets/images/FAQIllustration.png";
import FAQButtonIcon from "../../assets/icons/buttons/faq.svg";
import "./FaqSection.css";

export default function FaqSection() {
	return (
		<div className="faq-section container">
			<div className="faq-section-content d-flex flex-column justify-content-center align-items-center p-0">
				<div className="faq-section-content-image">
					<img src={FAQIllustration} alt="Signal Icon" />
				</div>
				<div className="faq-section-content-text d-flex flex-column justify-content-center align-items-center">
					<h2 className="faq-section-content-title text-center">
						Punya pertanyaan?
					</h2>
					<h3 className="faq-section-content-subTitle text-center">
						Cek jawaban FAQ kami!
					</h3>
					<NavLink
						className="faq-section-content-button btn d-flex justify-content-center align-items-center"
						to="/faq"
					>
						<img src={FAQButtonIcon} alt="Signal Icon" />
						FAQ kami
					</NavLink>
				</div>
			</div>
		</div>
	);
}
