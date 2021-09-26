import React from "react";
import { NavLink } from "react-router-dom";

import "./faqBox.css";

const faqBox = () => {
	return (
		<div className="container">
			<div className="faqBox d-flex justify-content-between align-items-center">
				<div className="faq-box-Detail">
					<h2 className="faqBox-title">Have a Question?</h2>
					<h4 className="faqBox-subtitle">Let’s check our FAQ!</h4>
				</div>
				<div className="faq-box-Detail">
					<NavLink className="btn btn-faq btn-shadow px-3" to="/">
						FAQ
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default faqBox;
