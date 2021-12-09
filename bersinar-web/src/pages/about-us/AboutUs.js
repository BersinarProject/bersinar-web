import React from "react";
import { Container } from "react-bootstrap";

import "./AboutUs.css";
import Navbar from "../../components/navbar/Navbar";
import bersinarLogo from "../../assets/images/about-us/BersinarLogo.png";
import presidenBersinar from "../../assets/images/about-us/PresidenBersinar.png";
import Footer from "../../components/footer/footer";
import coreIcon from "../../assets/images/coreIcon.svg";

export default function AboutUs() {
	return (
		<div className="about-us">
			<Navbar />
			<Container>
				<div className="what-is-bersinar d-flex justify-content-between align-items-center">
					<img src={bersinarLogo} alt="Logo Bersinar" width="310" />
					<div className="d-flex flex-column flex-wrap">
						<h1 className="what-is-bersinar-title">
							Apa itu Bersinar Project?
						</h1>
						<h2 className="what-is-bersinar-subTitle">
							Bersinar Project adalah sebuah platform edukasi yang
							menyediakan kelas-kelas gratis khusus persiapan UTBK
							dan ujian mandiri masuk perguruan tinggi
						</h2>
					</div>
				</div>
				<div className="president-speech">
					<h1 className="president-speech-title">President Speech</h1>
					<div className="d-flex justify-content-between align-items-center">
						<div className="president-speech-text">
							<h2>Ahnaf Fairuzuhdy Aslam</h2>
							<h3>
								“Berdasarkan motivasi untuk membantu
								perkembangan dini anak muda di Indonesia,
								Bersinar hadir untuk menjembatani mimpi-mimpi
								anak muda melalui akses pendidikan yang layak
								dan berkualitas. Dengan nilai-nilai kepedulian,
								Bersinar dapat terus berkembang untuk merangkul
								anak-anak muda di seluruh Indonesia.”
							</h3>
						</div>
						<div className="president-speech-image">
							<img
								src={presidenBersinar}
								alt="Presiden Bersinar Project"
							/>
						</div>
					</div>
				</div>
				<div className="core-values">
					<div className="core-text">
						<h1 className="core-title">Our Core Values</h1>
						<h3 className="core-subTitle py-1">
							Kultur Bersinar Project sangat penting untuk
							berjalannya program Bersinar.
						</h3>
						<h3 className="core-subTitle">
							Bersinar Project berdiri dengan lima pilar utama
							untuk sukses.
						</h3>
					</div>
					<div className="core-values-card">
						<div className="row row-cols-3 d-flex justify-content-center">
							<div className="values col-md-4">
								<div className="values-card col-12">
									<div className="col-4">
										<img src={coreIcon} alt="" />
									</div>
									<div className="col-8 align-items-center">
										<h3>Dare to Share</h3>
									</div>
								</div>
							</div>
							<div className="values col-md-4">
								<div className="values-card col-12">
									<div className="col-4">
										<img src={coreIcon} alt="" />
									</div>
									<div className="col-8 align-items-center">
										<h3>Sustainable Social Influence</h3>
									</div>
								</div>
							</div>
							<div className="values col-md-4">
								<div className="values-card col-12">
									<div className="col-4">
										<img src={coreIcon} alt="" />
									</div>
									<div className="col-8 align-items-center">
										<h3>Smart Work</h3>
									</div>
								</div>
							</div>
							<div className="values col-md-4">
								<div className="values-card col-12">
									<div className="col-4">
										<img src={coreIcon} alt="" />
									</div>
									<div className="col-8 align-items-center">
										<h3>Hospitality</h3>
									</div>
								</div>
							</div>
							<div className="values col-md-4">
								<div className="values-card col-lg-12">
									<div className="col-lg-4">
										<img src={coreIcon} alt="" />
									</div>
									<div className="col-lg-8 align-items-center">
										<h3>Purpose-driven</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Footer />
		</div>
	);
}
