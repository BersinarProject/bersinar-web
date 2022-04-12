import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../containers/Hero/Hero";
import Counter from "../../components/Counter/Counter";
import UpcomingClass from "../../containers/UpcomingClass/UpcomingClass";
import Testimonials from "../../containers/Testimonials/Testimonials";
import YoutubeSection from "../../containers/YoutubeSection/YoutubeSection";
import DonateSection from "../../containers/DonateSection/DonateSection";
import FAQSection from "../../containers/FaqSection/FaqSection";
import Footer from "../../components/Footer/Footer";

export default function index() {
	return (
		<div className="landing-page">
			<Navbar />
			<Hero />
			<Counter />
			<UpcomingClass />
			<YoutubeSection />
			<DonateSection />
			<Testimonials />
			<FAQSection />
			<Footer />
		</div>
	);
}
