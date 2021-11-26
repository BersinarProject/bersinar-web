import React from "react";
import { NavLink } from "react-router-dom";
import { Card } from "react-bootstrap";

import "./FAQSection.css";
import FAQIllustration from "../../assets/images/FAQIllustration.png";
import FAQButtonIcon from "../../assets/images/FAQButtonIcon.svg";

const FAQSection = () => {
	return (
		<div className="faq-section container">
			<Card className="faq-section-card border-0">
				<Card.Body className="faq-section-card-content d-flex flex-wrap align-items-center p-0">
					<div className="faq-section-card-content-text d-flex flex-column flex-wrap">
						<h2 className="faq-section-card-content-title">
							Punya pertanyaan?
						</h2>
						<h4 className="faq-section-card-content-subTitle">
							Coba periksa FAQ berikut
						</h4>
						<NavLink
							className="faq-section-card-content-button btn d-flex justify-content-center align-items-center"
							to="/faq"
						>
							<img src={FAQButtonIcon} alt="Signal Icon" />
							FAQ Kami
						</NavLink>
					</div>
					<div className="faq-section-card-content-image">
						<img src={FAQIllustration} alt="Signal Icon" />
					</div>
				</Card.Body>
			</Card>
		</div>
	);
};

export default FAQSection;
