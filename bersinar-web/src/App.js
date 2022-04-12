import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "animate.css";
import Homepage from "./pages/Homepage/Homepage";
import OurClass from "./pages/OurClass/OurClass";
import AboutUs from "./pages/AboutUs/AboutUs";
import Faq from "./pages/Faq/Faq";
import OurEvent from "./pages/our-event/OurEvent";
import ScrollToTop from "./ScrollToTop";

export default function App() {
	return (
		<div className="app">
			<Router>
				<ScrollToTop />
				<Switch>
					<Route exact path="/">
						<Homepage />
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
