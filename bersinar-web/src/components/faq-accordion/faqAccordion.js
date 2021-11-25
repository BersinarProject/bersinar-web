import React from "react";

import "./faqAccordion.css";

const faqAccordion = () => {
	return (
		<div className="faq-accordion container d-flex justify-content-center align-items-center">
			<div className="accordion container" id="accordionPanelsStayOpen">
				<div className="accordion-item">
					<h2
						className="accordion-header"
						id="panelsStayOpenheadingOne"
					>
						<button
							className="accordion-button d-flex justify-content-between align-items-center"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseOne"
							aria-expanded="true"
							aria-controls="panelsStayOpen-collapseOne"
						>
							Apa itu Bersinar Project?
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseOne"
						className="accordion-collapse collapse show"
						aria-labelledby="panelsStayOpen-headingOne"
					>
						<div className="accordion-body">
							<div className="accordion-body-text container p-0">
								&quot;Bersinar Project adalah sebuah platform
								edukasi yang menyediakan kelas-kelas gratis
								khusus persiapan UTBK dan ujian mandiri masuk
								perguruan tinggi.&quot;
							</div>
						</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2
						className="accordion-header"
						id="panelsStayOpen-headingTwo"
					>
						<button
							className="accordion-button d-flex justify-content-between align-items-center"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseTwo"
							aria-expanded="true"
							aria-controls="panelsStayOpen-collapseTwo"
						>
							Siapa saja Min yang boleh ikut kelas Bersinar?
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseTwo"
						className="accordion-collapse collapse show"
						aria-labelledby="panelsStayOpen-headingTwo"
					>
						<div className="accordion-body">
							<div className="accordion-body-text container p-0">
								&quot;Angkatan berapapun asalkan memiliki niat
								dan semangat belajar!&quot;
							</div>
						</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2
						className="accordion-header"
						id="panelsStayOpenheadingThree"
					>
						<button
							className="accordion-button d-flex justify-content-between align-items-center"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseThree"
							aria-expanded="true"
							aria-controls="panelsStayOpen-collapseThree"
						>
							Bagaimana cara ikut kelas Bersinar?
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseThree"
						className="accordion-collapse collapse show"
						aria-labelledby="panelsStayOpen-headingThree"
					>
						<div className="accordion-body">
							<div className="accordion-body-text container p-0">
								&quot;Kamu hanya perlu mantengin jadwal kelas
								(termasuk dengan link Zoom Cloud Meeting) yang
								disediakan oleh kami, Sob! Kamu dapat
								mengaksesnya lewat website atau media sosial
								kami, jadi jangan sampai terlewat, ya!&quot;
							</div>
						</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2
						className="accordion-header"
						id="panelsStayOpenheadingFour"
					>
						<button
							className="accordion-button d-flex justify-content-between align-items-center"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseFour"
							aria-expanded="true"
							aria-controls="panelsStayOpen-collapseFour"
						>
							Apa saja yang harus dipersiapkan untuk ikut kelas
							Bersinar?
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseFour"
						className="accordion-collapse collapse show"
						aria-labelledby="panelsStayOpen-headingFour"
					>
						<div className="accordion-body">
							<div className="accordion-body-text container p-0">
								&quot;Pastikan kamu memiliki perangkat penunjang
								untuk join video conference (hp, laptop, tablet,
								dll) dan yang pastinya wifi/kuota!&quot;
							</div>
						</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2
						className="accordion-header"
						id="panelsStayOpenheadingFive"
					>
						<button
							className="accordion-button d-flex justify-content-between align-items-center"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseFive"
							aria-expanded="true"
							aria-controls="panelsStayOpen-collapseFive"
						>
							Minshine, aku telat akses kelas Bersinar nih, apakah
							aku masih bisa mengakses rekaman ulangnya?
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseFive"
						className="accordion-collapse collapse show"
						aria-labelledby="panelsStayOpen-headingFive"
					>
						<div className="accordion-body">
							<div className="accordion-body-text container p-0">
								&quot;Jangan khawatir, Sober! Kamu masih bisa
								menonton rekaman ulangnya di Youtube Bersinar
								Project, jadi jangan lupa di-subscribe biar ga
								ketinggalan video terbaru Bersinar!&quot;
							</div>
						</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2
						className="accordion-header"
						id="panelsStayOpenheadingSix"
					>
						<button
							className="accordion-button d-flex justify-content-between align-items-center"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#panelsStayOpen-collapseSix"
							aria-expanded="true"
							aria-controls="panelsStayOpen-collapseSix"
						>
							Apa saja sih, Minshine, peraturan ikut kelas
							Bersinar?
						</button>
					</h2>
					<div
						id="panelsStayOpen-collapseSix"
						className="accordion-collapse collapse show"
						aria-labelledby="panelsStayOpen-headingSix"
					>
						<div className="accordion-body accordion-body-last">
							<div className="accordion-body-text container p-0">
								&quot;Kamu hanya perlu off-mic saat tidak
								bertanya agar kondisi kelas tetap kondusif, kamu
								juga boleh sambil makan dan minum loh, Sob!
								Asalkan kamu tetap memperhatikan tutornya dengan
								baik, ya!&quot;
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default faqAccordion;
