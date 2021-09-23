import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../containers/hero/Hero";
import Counter from "../components/counter/Counter";
import Introduce from "../containers/introduce/Introduce";
import UpcomingClass from "../containers/upcoming-class/UpcomingClass";
import Testimonials from "../containers/testimonials/Testimonials";
import YoutubeSection from "../containers/youtube-section/YoutubeSection";
import DonateSection from "../containers/donate-section/Donate";

const LandingPage = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<Counter />
			<Introduce />
			<UpcomingClass />
			<Testimonials />
			<YoutubeSection />
			<DonateSection />
		</div>
	);
};

export default LandingPage;
