import React from "react";

import TestimonialCard from "../../components/testimonial-card/TestimonialCard";
import "./Testimonials.css";
import starIcon from "../../assets/images/StarIcon.svg";

class Testimonials extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataTestimonialCards: [
				{
					id: 1,
					quote: '“Seneng banget bisa ketemu Bersinar, ketemu orang-orang keren yang sangat memotivasi bahwa mimpi itu bisa dijadikan kenyataan. Ada satu ucapan tutor Bersinar yang menurutku bener-bener jadi pegangan buat aku pas lagi belajar yaitu quality over quantity, bener-bener berefek untuk aku yang saat liat `Berapa soal ya yang aku kerjain?`"',
					name: "Ahmad Zakiyudin",
					edu: "ITS 2020"
				},
				{
					id: 2,
					quote: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta quasi voluptate atque animi doloribus autem expedita amet rerum iste."',
					name: "Razan Fawwaz",
					edu: "Unsyiah 2020"
				},
				{
					id: 3,
					quote: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta quasi voluptate atque animi doloribus autem expedita amet rerum iste."',
					name: "Yasmin Hana",
					edu: "UI 2020"
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
