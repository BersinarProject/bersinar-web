import React from "react";
import "./faqBox.css";
import { NavLink } from "react-router-dom";

const faqBox = () => {
	return (
		<div className="container">
			<div className="faqBox d-flex flex-wrap justify-content-around align-items-center col-md-12">
				<div className="d-flex flex-column faq-box-text">
					<h2 className="faqBox-title">Have a Question?</h2>
					<h4 className="faqBox-subtitle">Let’s check our FAQ!</h4>
				</div>
				<div className="d-flex flex-column faq-box-button">
					<NavLink className="btn btn-faq btn-shadow px-3" to="/faq">
						Check FAQ
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default faqBox;
