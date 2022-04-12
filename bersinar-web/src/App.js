import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "animate.css";

import LandingPage from "./pages/LandingPage";
import OurClass from "./pages/our-class/OurClass";
import AboutUs from "./pages/about-us/AboutUs";
import Faq from "./pages/faq/Faq";
import ScrollToTop from "./ScrollToTop";
import OurEvent from "./pages/our-event/OurEvent";

function App() {
	return (
		<div className="app">
			<Router>
				<ScrollToTop />
				<Switch>
					<Route exact path="/">
						<LandingPage />
					</Route>
					<Route path="/our-class">
						<OurClass />
					</Route>
					<Route path="/about-us">
						<AboutUs />
					</Route>
					<Route path="/events">
						<OurEvent />
					</Route>
					<Route path="/faq">
						<Faq />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
