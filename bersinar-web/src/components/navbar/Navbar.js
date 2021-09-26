import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import "./Navbar.css";
import logo from "../../assets/images/brandLogo.png";

const navbar = () => {
	return (
		<div className="app">
			<Navbar bg="light" expand="lg">
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
							<NavLink
								className="btn-donate-navbar btn btn-shadow px-3"
								to="/"
							>
								Donate
							</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default navbar;
