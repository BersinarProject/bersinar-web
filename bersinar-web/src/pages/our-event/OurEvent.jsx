import React from "react";
import { Container } from "react-bootstrap";

import "./OurEvent.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import heroNgabers from "../../assets/images/heroNgabers.svg";
import poster from "../../assets/images/programs/program2.png";

const OurEvent = () => {
	return (
		<div>
			<Navbar />
			<div className="d-flex justify-content-center mt-5 mb-5 pt-4 pb-5 mx-auto">
				<img
					src={heroNgabers}
					alt="Ngabers Hero"
					className="ngabers-hero img-fluid mx-auto"
				/>
			</div>
			<Container>
				<div className="ngabers-event mb-5 d-flex flex-column gap-5">
					<div>
						<div className="what-is-ngabers-content">
							<h1 className="what-is-ngabers mb-4">
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
							<h1 className="benefits-ngabers mb-3">
								Benefits Mengikuti Program Ngabers!
							</h1>
							<h3 className="desc-benefits-ngabers">
								1. Persiapan mengikuti UTBK dengan program
								pembelajaran dan kelas-kelas yang intensif
								secara gratis. <br />
								2. Mendapatkan catatan dan materi pembelajaran
								yang lengkap dan eksklusif. <br />
								3. Mendapatkan lingkungan belajar yang suportif
								dan teman teman baru. <br />
								4. Akses tanya jawab dan pembahasan soal yang
								fleksibel bersama tutor Bersinar. <br />
								5. Platform belajar bersama untuk membangun
								kesiapan kamu dan tentunya mendapatkan akses
								bergabung ke dalam Bersinar Community.
							</h3>
						</div>
					</div>

					<div className="d-flex flex-column gap-4">
						<div>
							<p className="title">
								Bagaimana Caranya Mengikuti <br /> Program
								Ngabers?
							</p>
							<ol
								className="paraghraph"
								style={{ fontSize: "20px" }}
							>
								<li>
									Mengisi pendaftaran melalui link &nbsp;
									<span>
										<a
											href="https://sinar.me/DaftarNgabers"
											target="_blank"
											rel="noreferrer"
										>
											sinar.me/DaftarNgabers
										</a>
									</span>
								</li>
								<li>
									Setelah mengisi pendaftaran, Sober akan
									mendapatkan link discord dan harap memasuki
									server discord sebelum tanggal 18 April
									2022.
								</li>
								<li>
									Informasi setiap kelas akan diinfokan oleh
									tim IT Bersinar melalui Discord Bersinar
									Community di mana peserta NGABERS dapat
									melakukan diskusi bersama dengan tutor
									maupun teman-teman disana.
								</li>
								<li>
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
									borderRadius: "30px"
								}}
								className="card p-3"
							>
								<img
									src={poster}
									style={{
										maxWidth: "640px",
										height: "320px"
									}}
									alt="Program Ngaber"
								/>
								<div className="card-body">
									<h5 className="card-title fw-bold fs-1">
										Ayo Daftar #Ngabers Sekarang
									</h5>
									<div className="info">
										<p style={{ color: "#574e5a" }}>
											Deadline Pendaftaran : 17 April 2022
										</p>
										<p style={{ color: "#574e5a" }}>
											Periode Pembelajaran : 18 April - 27
											Juni 2022
										</p>
									</div>
									<a
										href="https://sinar.me/DaftarNgabers"
										style={{
											backgroundColor: "#fe933e",
											fontSize: "24px"
										}}
										className="btn w-100 rounded text-white"
										target="_blank"
										rel="noreferrer"
									>
										Daftar Sekarang
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
