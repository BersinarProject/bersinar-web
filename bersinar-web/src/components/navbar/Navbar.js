import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import "./Navbar.css";
import logo from "../../assets/images/brandLogo.png";

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
							<NavLink className="item nav-link" to="/about-us">
								About Us
							</NavLink>
							<NavLink className="item nav-link" to="/our-class">
								Our Class
							</NavLink>
							<div
								id="trbtn-overlay-container-0"
								className="trbtn-overlay-container inline"
							>
								<a
									className="trbtn btn-donate-navbar btn btn-shadow px-3"
									href="https://trakteer.id/BersinarProject/tip/embed/modal"
									target="_blank"
									rel="noreferrer"
								>
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
