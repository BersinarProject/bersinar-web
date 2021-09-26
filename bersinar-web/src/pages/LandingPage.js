import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../containers/hero/Hero";
import Counter from "../components/counter/Counter";
import Introduce from "../containers/introduce/Introduce";
import UpcomingClass from "../containers/upcoming-class/UpcomingClass";
import Testimonials from "../containers/testimonials/Testimonials";
import YoutubeSection from "../containers/youtube-section/YoutubeSection";
import DonateSection from "../containers/donate-section/Donate";
import FaqBox from "../components/faq-box/faqBox";
import Footer from "../components/footer/footer";

const LandingPage = () => {
	return (
		<div className="landingpage">
			<Navbar />
			<Hero />
			<Counter />
			<Introduce />
			<UpcomingClass />
			<Testimonials />
			<YoutubeSection />
			<DonateSection />
			<FaqBox />
			<Footer />
		</div>
	);
};

export default LandingPage;
