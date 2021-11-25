import React from "react";

import "./Faq.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import FaqAccordion from "../../components/faq-accordion/faqAccordion";
import starwars from "../../assets/images/starwars.jpg";

const Faq = () => {
	return (
		<div className="faq-page">
			<Navbar />
			<div className="faq-header container d-flex">
				<div className="faq-header-left-section d-flex flex-column">
					<h1 className="faq-header-left-section-title">
						Pelajari FAQ Kami
					</h1>
					<h2 className="faq-header-left-section-subTitle">
						Pelajari Bersinar lebih lanjut melalui beberapa
						pertanyaan berikut
					</h2>
				</div>
				<div className="faq-header-right-section">
					<img
						src={starwars}
						alt="FAQ Illustration"
						className="faq-header-right-section-image"
					/>
				</div>
			</div>
			<FaqAccordion />
			<div className="faq-footer container d-flex flex-column justify-content-center align-items-center">
				<h1 className="faq-footer-title text-center">
					Masih punya pertanyaan?
				</h1>
				<h2 className="faq-footer-subTitle text-center">
					Jika Kamu tidak menemukan jawaban atas pertanyaan Kamu. Kamu
					bisa menghubungi Kami melalui kontak yang tersedia bagian
					paling bawah di halaman website ini
				</h2>
			</div>
			<Footer />
		</div>
	);
};

export default Faq;
