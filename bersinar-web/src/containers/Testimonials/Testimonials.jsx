import React from "react";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import starIcon from "../../assets/icons/star.svg";
import Pratiwi from "../../assets/images/testimonials/pratiwi.png";
import Ziyah from "../../assets/images/testimonials/ziyah.png";
import Angel from "../../assets/images/testimonials/angel.png";
import "./Testimonials.css";

class Testimonials extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataTestimonialCards: [
				{
					id: 1,
					quote: '"Ada satu ucapan tutor Bersinar yang menurutku bener-bener jadi pegangan, yaitu "Quality over quantity", bener-bener berefek untuk aku sampai sekarang"',
					name: "Ziyah",
					edu: "Psikologi Undip",
					img: Ziyah
				},
				{
					id: 2,
					quote: '"Di Bersinar aku nggak cuma sekadar diajarin, tapi juga diajak diskusi seru soal materi UTBK. Berkat Bersinar juga, skorku bahkan bisa tembus 700++ pada UTBK kemarin."',
					name: "Pratiwi",
					edu: "Ilmu Politik UGM",
					img: Pratiwi
				},
				{
					id: 3,
					quote: '"Penyampaian tutor yang mudah dicerna dan lingkungan yang produktif tapi tetap asik membantu saya memperoleh skor UTBK yang cukup memuaskan dan bisa mencapai mimpi saya lewat jalur SBMPTN kemarin”',
					name: "Angel",
					edu: "Kedokteran Undip",
					img: Angel
				}
			]
		};
	}

	componentDidMount() {
		/* global Swiper */
		this.swiper = new Swiper(".testimonials-swiper", {
			slidesPerView: "auto",
			// loop: true,
			cssMode: true
		});
	}

	renderItems() {
		const { dataTestimonialCards } = this.state;
		return dataTestimonialCards.map((dataTestimonialCard) => {
			return (
				<TestimonialCard
					key={dataTestimonialCard.id}
					dataTestimonialCard={dataTestimonialCard}
				/>
			);
		});
	}

	render() {
		return (
			<div className="testimonials container">
				<div className="testimonials-header d-flex flex-column justify-content-center align-items-center">
					<div className="testimonial-header-icons">
						<img
							src={starIcon}
							alt="Signal Icon"
							className="testimonial-header-icon"
						/>
						<img
							src={starIcon}
							alt="Signal Icon"
							className="testimonial-header-icon"
						/>
						<img
							src={starIcon}
							alt="Signal Icon"
							className="testimonial-header-icon"
						/>
						<img
							src={starIcon}
							alt="Signal Icon"
							className="testimonial-header-icon"
						/>
						<img
							src={starIcon}
							alt="Signal Icon"
							className="testimonial-header-icon"
						/>
						<img
							src={starIcon}
							alt="Signal Icon"
							className="testimonial-header-icon"
						/>
					</div>
					<h1 className="testimonial-header-title mb-3">
						Apa kata mereka?
					</h1>
					<h2 className="testimonial-header-subTitle col-md-6">
						Masih ragu untuk ikut kelas Bersinar? Yuk, baca kesan &
						pesan dari Sobat Bersinar!
					</h2>
				</div>
				<div className="testimonial-cards container d-flex justify-content-center align-items-center">
					<div className="swiper testimonials-swiper">
						<div className="swiper-wrapper">
							{this.renderItems()}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Testimonials;
