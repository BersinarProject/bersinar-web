import React from "react";
import { Container } from "react-bootstrap";

import "./OurEvent.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import poster from "../../assets/images/programs/program2.png";

const OurEvent = () => {
	return (
		<div>
			<Navbar />
			<Container>
				<div className="mb-5 d-flex flex-column gap-5">
					<div style={{ height: "500px" }} className="border">
						<p>First Section</p>
					</div>
					<div className="d-flex flex-column gap-4">
						<div>
							<p className="title fs-1">
								Bagaimana Caranya Mengikuti Program Ngabers?
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
