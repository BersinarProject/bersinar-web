import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import "./Navbar.css";
import bersinarLogoFull from "../../assets/images/bersinar-logo/bersinarLogoFull.svg";
import bersinarLogoIcon from "../../assets/images/bersinar-logo/bersinarLogoIcon.svg";
import Donate from "../../assets/images/donate.svg";

const navbar = () => {
	function isMobile() {
		const mediaQuery = window.matchMedia("(max-width: 576px)");
		return mediaQuery.matches;
	}

	return (
		<div className="navbar-component">
			<Navbar fixed="top" expand="xl">
				<Container>
					<NavLink to="/" className="navbar-brand">
						{isMobile() ? (
							<img
								className="navbar-logo-icon"
								src={bersinarLogoIcon}
								alt="Bersinar Logo"
							/>
						) : (
							<img
								className="navbar-logo-full"
								src={bersinarLogoFull}
								alt="Bersinar Logo"
							/>
						)}
					</NavLink>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="nav-links ms-auto d-flex justify-content-center align-items-center">
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
								Event Kami
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
