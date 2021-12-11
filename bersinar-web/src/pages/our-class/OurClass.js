import React from "react";
import { Container } from "react-bootstrap";

import "./OurClass.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import gaadaKelas from "../../assets/images/landing-page/gaadaKelas.svg";

const OurClass = () => {
	return (
		<div className="our-class">
			<Navbar />
			<Container>
				<div className="our-class-contents d-flex flex-column justify-content-center align-items-center">
					<img
						src={gaadaKelas}
						alt="Kelas tidak tersedia"
						className="our-class-gaada-kelas"
					/>
					<h2 className="our-class-info col-md-8">
						Maaf, Sob! Kelas yang kamu cari tidak tersedia. Saat ini
						belum ada jadwal kelas yang akan diadakan, harap tunggu
						ya!
					</h2>
				</div>
			</Container>
			<Footer />
		</div>
	);
};

export default OurClass;
