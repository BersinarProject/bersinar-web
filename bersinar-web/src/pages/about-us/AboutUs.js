import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";

import "./AboutUs.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";

import aboutUsHero from "../../assets/images/about-us/aboutUsHero.svg";
import bersinarLogoIcon from "../../assets/images/bersinar-logo/bersinarLogoIcon.svg";
import presidenBersinar from "../../assets/images/about-us/PresidenBersinar.png";
import misi1 from "../../assets/images/about-us/misi/misi-1.svg";
import misi2 from "../../assets/images/about-us/misi/misi-2.svg";
import misi3 from "../../assets/images/about-us/misi/misi-3.svg";
import misi4 from "../../assets/images/about-us/misi/misi-4.svg";
import achievement from "../../assets/images/about-us/achievement.svg";
import FAQIllustration from "../../assets/images/FAQIllustration.png";
import FAQButtonIcon from "../../assets/images/FAQButtonIcon.svg";
import coreIcon from "../../assets/images/coreIcon.svg";

export default function AboutUs() {
	return (
		<div className="about-us">
			<Navbar />
			<Container>
				<div className="d-flex justify-content-center">
					<img
						src={aboutUsHero}
						alt="About Us Hero"
						className="about-us-hero"
					/>
				</div>
				<div className="what-is-bersinar d-flex justify-content-center align-items-center">
					<img src={bersinarLogoIcon} alt="Logo Bersinar" />
					<div className="d-flex flex-column flex-wrap col-md-6">
						<h1 className="what-is-bersinar-title">
							Apa itu Bersinar Project?
						</h1>
						<h2 className="what-is-bersinar-subTitle">
							Bersinar Project adalah sebuah platform edukasi yang
							menyediakan kelas-kelas gratis khusus persiapan UTBK
							dan ujian mandiri masuk perguruan tinggi.
						</h2>
					</div>
				</div>
				<div className="president-speech">
					<div className="d-flex justify-content-between align-items-center">
						<div className="president-speech-image">
							<img
								src={presidenBersinar}
								alt="Presiden Bersinar Project"
							/>
						</div>
						<div className="president-speech-text">
							<h1 className="president-speech-title">
								Sambutan Presiden
							</h1>
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
					</div>
				</div>
				<div className="visi-bersinar d-flex flex-column justify-content-center align-items-center">
					<h1 className="visi-bersinar-title">Visi Bersinar</h1>
					<p className="col-md-9">
						Mewujudkan demokratisasi persiapan masuk perguruan
						tinggi di Indonesia melalui peningkatan akses terhadap
						pembelajaran berkualitas.
					</p>
				</div>
				<div className="misi-bersinar d-flex flex-column justify-content-center align-items-center">
					<h1 className="misi-bersinar-title">Misi Bersinar</h1>
					<div className="misi-bersinar-contents d-flex flex-column justify-content-center">
						<div className="misi-bersinar-content d-flex justify-content-center align-items-start">
							<img src={misi1} alt="Misi 1" />
							<p className="col-md-8">
								Menyediakan wadah pengembangan
								akademik/nonakademik yang mendukung pengembangan
								pola pikir terbuka dan kreatif bagi audiens dan
								pengurus Bersinar.
							</p>
						</div>
						<div className="misi-bersinar-content d-flex justify-content-center align-items-start">
							<img src={misi2} alt="Misi 2" />
							<p className="col-md-8">
								Mempertemukan para pengajar berkualitas dengan
								para pelajar berdedikasi dalam wadah yang ramah
								dan tidak penuh tekanan.
							</p>
						</div>
						<div className="misi-bersinar-content d-flex justify-content-center align-items-start">
							<img src={misi3} alt="Misi 3" />
							<p className="col-md-8">
								Memberikan kesadaran akan pentingnya long-life
								learning melalui program dan kebijakan Bersinar.
							</p>
						</div>
						<div className="misi-bersinar-content d-flex justify-content-center align-items-start">
							<img src={misi4} alt="Misi 4" />
							<p className="col-md-8">
								Mendukung pelayanan edukasi berkelanjutan sesuai
								dengan SDG ke-4 dan membantu persiapan para
								pelajar untuk menghadapi dunia kerja sesuai
								dengan SDG ke-8.
							</p>
						</div>
					</div>
				</div>
				<div className="bersinar-achievement">
					<div className="bersinar-achievement-contents d-flex justify-content-center align-items-center">
						<img
							src={achievement}
							alt="Achievement"
							className="bersinar-achievement-image"
						/>
						<div className="bersinar-achievement-text col-md-7">
							<h1 className="bersinar-achievement-title">
								Pencapaian Kami
							</h1>
							<p>
								Selected 10 out of 162 teams to join Startup
								Academy at COMPFEST
							</p>
						</div>
					</div>
				</div>
				<div className="about-us-faq container">
					<div className="about-us-faq-content d-flex flex-column justify-content-center align-items-center p-0">
						<div className="about-us-faq-content-image">
							<img src={FAQIllustration} alt="Signal Icon" />
						</div>
						<div className="about-us-faq-content-text d-flex flex-column justify-content-center align-items-center">
							<h2 className="about-us-faq-content-title text-center">
								Punya pertanyaan?
							</h2>
							<h4 className="about-us-faq-content-subTitle text-center">
								Cek jawaban FAQ Kami!
							</h4>
							<NavLink
								className="about-us-faq-content-button btn d-flex justify-content-center align-items-center"
								to="/faq"
							>
								<img src={FAQButtonIcon} alt="Signal Icon" />
								FAQ Kami
							</NavLink>
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
