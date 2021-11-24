import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/footer";
import FaqAccordion from "../components/faq/faqAccordion";

const Faq = () => {
	return (
		<div className="landing-page">
			<Navbar />
			<FaqAccordion />
			<Footer />
		</div>
	);
};

export default Faq;
