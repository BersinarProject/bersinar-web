import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/brandLogo.png";

const navbar = () => (
	<div className="app">
		<div className="col-lg-12">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<NavLink to="/" className="navbar-brand">
						<img className="logo" src={logo} alt="" />
					</NavLink>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarNavAltMarkup"
					>
						<ul className="navbar-nav ms-auto">
							<li className="nav-item">
								<NavLink
									exact
									className="item nav-link"
									aria-current="page"
									to="/"
								>
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="item nav-link"
									to="/about-us"
								>
									About Us
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="item nav-link"
									to="/our-class"
								>
									Our Class
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="btn-donate btn  btn-shadow px-4"
									to="/"
								>
									Donate
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	</div>
);

export default navbar;
