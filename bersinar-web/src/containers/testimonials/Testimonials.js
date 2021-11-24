import { React, useState } from "react";

import TestimonialCard from "../../components/testimonial-card/TestimonialCard";
import "./Testimonials.css";
import starIcon from "../../assets/images/StarIcon.svg";

const Testimonials = () => {
	const [getDataTestimonialCard] = useState([
		{
			id: 1,
			quote: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta quasi voluptate atque animi doloribus autem expedita amet rerum iste."',
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
	]);

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
				<h2 className="testimonial-header-subTitle">
					Kata Sober dan Minshine Saat Belajar Bareng di Bersinar
					Project.
				</h2>
			</div>
			<div className="testimonial-cards container d-flex flex-wrap justify-content-center align-items-center">
				<TestimonialCard dataTestimonialCard={getDataTestimonialCard} />
			</div>
		</div>
	);
};

export default Testimonials;
