import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import FaqAccordion from "../../components/FaqAccordion/FaqAccordion";
import FAQIllustration from "../../assets/images/FAQIllustration.png";
import "./Faq.css";

export default function Faq() {
	return (
		<div className="faq-page">
			<Navbar />
			<div className="faq-header container d-flex flex-column justify-content-center align-items-center">
				<img
					src={FAQIllustration}
					alt="FAQ Illustration"
					className="faq-header-image"
				/>
				<h1 className="faq-header-title">Pelajari FAQ Kami</h1>
				<h2 className="faq-header-subTitle text-center col-md-4">
					Pelajari Bersinar lebih lanjut melalui beberapa pertanyaan
					berikut
				</h2>
			</div>
			<FaqAccordion />
			<div className="faq-footer container d-flex flex-column justify-content-center align-items-center">
				<h1 className="faq-footer-title text-center">
					Masih punya pertanyaan?
				</h1>
				<h2 className="faq-footer-subTitle text-center">
					Jika Kamu tidak menemukan jawaban atas pertanyaan Kamu. Kamu
					bisa menghubungi Kami melalui kontak yang tersedia bagian
					paling bawah di halaman website ini.
				</h2>
			</div>
			<Footer />
		</div>
	);
}
