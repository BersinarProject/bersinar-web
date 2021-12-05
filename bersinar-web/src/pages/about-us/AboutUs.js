import React from "react";
import { Container } from "react-bootstrap";

import "./AboutUs.css";
import Navbar from "../../components/navbar/Navbar";
import bersinarLogo from "../../assets/images/about-us/BersinarLogo.png";
import presidenBersinar from "../../assets/images/about-us/PresidenBersinar.png";

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
			</Container>
		</div>
	);
}
