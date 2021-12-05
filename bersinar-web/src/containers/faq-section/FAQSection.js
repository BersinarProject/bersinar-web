import React from "react";
import { NavLink } from "react-router-dom";

import "./FAQSection.css";
import FAQIllustration from "../../assets/images/FAQIllustration.png";
import FAQButtonIcon from "../../assets/images/FAQButtonIcon.svg";

const FAQSection = () => {
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
					<h4 className="faq-section-content-subTitle text-center">
						Cek jawaban FAQ Kami!
					</h4>
					<NavLink
						className="faq-section-content-button btn d-flex justify-content-center align-items-center"
						to="/faq"
					>
						<img src={FAQButtonIcon} alt="Signal Icon" />
						FAQ Kami
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default FAQSection;
