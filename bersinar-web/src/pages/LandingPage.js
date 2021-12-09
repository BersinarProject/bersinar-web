import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../containers/hero/Hero";
import Counter from "../components/counter/Counter";
import UpcomingClass from "../containers/upcoming-class/UpcomingClass";
import Testimonials from "../containers/testimonials/Testimonials";
import YoutubeSection from "../containers/youtube-section/YoutubeSection";
import DonateSection from "../containers/donate-section/DonateSection";
import FAQSection from "../containers/faq-section/FAQSection";
import Footer from "../components/footer/Footer";

const LandingPage = () => {
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
};

export default LandingPage;
