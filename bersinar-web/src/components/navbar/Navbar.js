import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import "./Navbar.css";
import bersinarLogo from "../../assets/images/landing-page/BersinarLogo.png";
import Donate from "../../assets/images/donate.svg";

const navbar = () => {
	return (
		<div className="navbar-component">
			<Navbar fixed="top" expand="lg">
				<Container>
					<NavLink to="/" className="navbar-brand">
						<img
							className="navbar-logo"
							src={bersinarLogo}
							alt="Bersinar Logo"
						/>
					</NavLink>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto d-flex justify-content-center align-items-center">
							<NavLink
								exact
								className="nav-link item"
								aria-current="page"
								to="/"
							>
								Beranda
							</NavLink>
							<NavLink className="nav-link item" to="/our-class">
								Jadwal Kelas
							</NavLink>
							<NavLink className="nav-link item" to="/events">
								Our Events
							</NavLink>
							<NavLink className="nav-link item" to="/about-us">
								Tentang Kami
							</NavLink>
							<div className="donate">
								<a
									className="donate-button btn d-flex align-items-center"
									href="https://trakteer.id/BersinarProject/tip/embed/modal"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={Donate}
										alt="Donate"
										className="donate-button-icon"
									/>
									<span className="donate-button-text">
										Donasi
									</span>
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
