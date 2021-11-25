import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import "./Navbar.css";
import logo from "../../assets/images/brandLogo.png";
import Donate from "../../assets/images/donate.svg";

const navbar = () => {
	return (
		<div className="app">
			<Navbar expand="lg">
				<Container>
					<NavLink to="/" className="navbar-brand">
						<img className="logo" src={logo} alt="Bersinar Logo" />
					</NavLink>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto d-flex justify-content-center align-items-center">
							<NavLink
								exact
								className="item nav-link"
								aria-current="page"
								to="/"
							>
								Home
							</NavLink>
							<NavLink className="item nav-link" to="/our-class">
								Our Class
							</NavLink>
							<NavLink className="item nav-link" to="/events">
								Our Events
							</NavLink>
							<NavLink className="item nav-link" to="/about-us">
								About Us
							</NavLink>
							<div className="donate">
								<a
									className="btn donate px-3 py-2"
									href="https://trakteer.id/BersinarProject/tip/embed/modal"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={Donate}
										alt="Donate"
										className="donate-icon"
									/>
									Donate
								</a>
							</div>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default navbar;
