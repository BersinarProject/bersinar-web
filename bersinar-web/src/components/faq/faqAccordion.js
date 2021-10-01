import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./faqAccordion.css";
import faqImg from "../../assets/images/Hero.png";

const faqAccordion = () => {
	return (
		<div className="faq-accordion container">
			<div className="column">
				<div className="col-lg-12">
					<img className="faq-image" src={faqImg} alt="Hero" />
				</div>
				<div>
					<h1 className="faq-title">Frequently Asked Questions</h1>
				</div>
				<div className="accordion-details">
					<Accordion>
						<Accordion.Item eventKey="0">
							<Accordion.Header>
								Apa itu Bersinar Project?
							</Accordion.Header>
							<Accordion.Body>
								Bersinar Project adalah sebuah platform edukasi
								yang menyediakan kelas-kelas gratis khusus
								persiapan UTBK dan ujian mandiri masuk perguruan
								tinggi.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
					<Accordion>
						<Accordion.Item eventKey="1">
							<Accordion.Header>
								Siapa saja Min yang boleh ikut kelas Bersinar?
							</Accordion.Header>
							<Accordion.Body>
								Angkatan berapapun asalkan memiliki niat dan
								semangat belajar!
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
					<Accordion>
						<Accordion.Item eventKey="2">
							<Accordion.Header>
								Bagaimana cara ikut kelas Bersinar?
							</Accordion.Header>
							<Accordion.Body>
								Kamu hanya perlu mantengin jadwal kelas
								(termasuk dengan link Zoom Cloud Meeting) yang
								disediakan oleh kami, Sob! Kamu dapat
								mengaksesnya lewat website atau media sosial
								kami, jadi jangan sampai terlewat, ya!
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
					<Accordion>
						<Accordion.Item eventKey="3">
							<Accordion.Header>
								Apa saja yang harus dipersiapkan untuk ikut
								kelas Bersinar?
							</Accordion.Header>
							<Accordion.Body>
								Pastikan kamu memiliki perangkat penunjang untuk
								join video conference (hp, laptop, tablet, dll)
								dan yang pastinya wifi/kuota!
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
					<Accordion>
						<Accordion.Item eventKey="4">
							<Accordion.Header>
								Minshine, aku telat akses kelas Bersinar nih,
								apakah aku masih bisa mengakses rekaman
								ulangnya?
							</Accordion.Header>
							<Accordion.Body>
								Jangan khawatir, Sober! Kamu masih bisa menonton
								rekaman ulangnya di Youtube Bersinar Project,
								jadi jangan lupa di-subscribe biar ga
								ketinggalan video terbaru Bersinar!
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
					<Accordion>
						<Accordion.Item eventKey="5">
							<Accordion.Header>
								Apa saja sih, Minshine, peraturan ikut kelas
								Bersinar?
							</Accordion.Header>
							<Accordion.Body>
								Kamu hanya perlu off-mic saat tidak bertanya
								agar kondisi kelas tetap kondusif, kamu juga
								boleh sambil makan dan minum loh, Sob! Asalkan
								kamu tetap memperhatikan tutornya dengan baik,
								ya!
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
			</div>
		</div>
	);
};

export default faqAccordion;
