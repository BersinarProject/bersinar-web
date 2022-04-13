import React from "react";
import { Container } from "react-bootstrap";

import "./OurEvent.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

// eslint-disable-next-line import/no-duplicates
import heroNgabers from "../../assets/images/ngabersCard.jpg";
// eslint-disable-next-line import/no-duplicates
import poster from "../../assets/images/ngabersCard.jpg";

const OurEvent = () => {
	return (
		<div>
			<Navbar />
			<Container>
				<div className="ngabers-hero d-flex justify-content-center mt-5 pt-4 mx-auto">
					<img
						src={heroNgabers}
						alt="Ngabers Hero"
						className="ngabers-hero-image img-fluid mx-auto"
					/>
				</div>
				<div className="ngabers-event mb-5 d-flex flex-column">
					<div>
						<div className="what-is-ngabers-content">
							<h1 className="what-is-ngabers">
								Apa itu Ngambis Bareng <br /> Bersinar?
							</h1>
							<h3 className="desc-ngabers mb-5 pb-2">
								Ngambis Bareng Bersinar merupakan program
								pembelajaran intensif UTBK (Soshum dan Saintek)
								yang akan membantu teman-teman pejuang SBMPTN
								selama 1 bulan lebih dengan kelas-kelas yang
								akan diisi oleh tutor-tutor melalui Zoom Meeting
								Bersinar. Program ini juga memberikan akses
								Sober untuk masuk ke dalam komunitas bersinar di
								Discord, tempat dimana para pelajar
								bersosialisasi bersama
							</h3>
						</div>

						<div className="benefits-ngabers-content">
							<h1 className="benefits-ngabers">
								Benefits Mengikuti Program Ngabers!
							</h1>
							<ol className="benefits-ngabers-lists">
								<li className="benefits-ngabers-list">
									Persiapan mengikuti UTBK dengan program
									pembelajaran dan kelas-kelas yang intensif
									secara gratis.
								</li>
								<li className="benefits-ngabers-list">
									Mendapatkan catatan dan materi pembelajaran
									yang lengkap dan eksklusif.
								</li>
								<li className="benefits-ngabers-list">
									Mendapatkan lingkungan belajar yang suportif
									dan teman teman baru.
								</li>
								<li className="benefits-ngabers-list">
									Akses tanya jawab dan pembahasan soal yang
									fleksibel bersama tutor Bersinar.
								</li>
								<li className="benefits-ngabers-list">
									Platform belajar bersama untuk membangun
									kesiapan kamu dan tentunya mendapatkan akses
									bergabung ke dalam Bersinar Community.
								</li>
							</ol>
						</div>
					</div>

					<div className="ngabers-procedure d-flex flex-column">
						<div>
							<h1 className="title">
								Bagaimana Caranya Mengikuti <br /> Program
								Ngabers?
							</h1>
							<ol className="ngabers-procedure-lists">
								<li className="ngabers-procedure-list">
									Mengisi pendaftaran melalui tombol daftar di
									bawah.
								</li>
								<li className="ngabers-procedure-list">
									Setelah mengisi pendaftaran, Sober akan
									mendapatkan link discord dan harap memasuki
									server discord sebelum tanggal 18 April
									2022.
								</li>
								<li className="ngabers-procedure-list">
									Informasi setiap kelas akan diinfokan oleh
									tim IT Bersinar melalui Discord Bersinar
									Community di mana peserta NGABERS dapat
									melakukan diskusi bersama dengan tutor
									maupun teman-teman disana.
								</li>
								<li className="ngabers-procedure-list">
									Persiapkan diri kamu dan jangan sampai
									ketinggalan ya Sober! Karena kuotanya sangat
									terbatas.
								</li>
							</ol>
						</div>
						<div className="d-flex justify-content-center align-items-center">
							<div
								style={{
									width: "44rem",
									borderRadius: "30px",
									padding: "30px"
								}}
								className="card"
							>
								<img
									src={poster}
									style={{
										maxWidth: "640px",
										maxHeight: "320px",
										borderRadius: "20px",
										objectFit: "cover"
									}}
									alt="Program Ngaber"
								/>
								<div className="card-body p-0 pt-3 pt-sm-5">
									<h5 className="card-title ngabers-card-title mb-3">
										Ayo Daftar #Ngabers Sekarang
									</h5>
									<div className="info">
										<p style={{ color: "#574e5a" }}>
											Deadline Pendaftaran : 17 April 2022
											<br />
											Periode Pembelajaran : 18 April - 27
											Mei 2022
										</p>
									</div>
									<a
										href="https://docs.google.com/forms/d/e/1FAIpQLScfBJEyg8aWZKP9LRQCvBcne3HTqvPywAs_j8tuSd51YjcvYg/viewform"
										style={{
											backgroundColor: "#fe933e",
											fontSize: "24px",
											fontWeight: "700",
											borderRadius: "10px"
										}}
										className="btn btn-ngabers w-100 text-white"
										target="_blank"
										rel="noreferrer"
									>
										Daftar sekarang
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Footer />
		</div>
	);
};

export default OurEvent;
