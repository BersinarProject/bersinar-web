import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import OurClass from "./pages/OurClass";
import "./components/buttons/Button.css";

function App() {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route exact path="/">
						<LandingPage />
					</Route>
					<Route path="/our-class">
						<OurClass />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
