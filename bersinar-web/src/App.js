import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "animate.css";

import LandingPage from "./pages/LandingPage";
import OurClass from "./pages/OurClass";
import "./components/buttons/Button.css";
import ScrollToTop from "./ScrollToTop";
import Faq from "./pages/FAQ";

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
					<Route path="/faq">
						<Faq />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
