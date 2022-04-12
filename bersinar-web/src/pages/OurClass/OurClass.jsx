import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import gaadaKelas from "../../assets/images/gaadaKelas.svg";
import "./OurClass.css";

export default function index() {
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
}
