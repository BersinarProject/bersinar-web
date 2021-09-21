import { React, useState } from "react";

import TestimonialCard from "../../components/testimonial-card/TestimonialCard";
import "./Testimonials.css";

const Testimonials = () => {
	const [getDataTestimonialCard] = useState([
		{
			id: 1,
			quote: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta quasi voluptate atque animi doloribus autem expedita amet rerum iste."',
			name: "Ahmad Zakiyudin",
			edu: "Matematika, ITS 2020"
		},
		{
			id: 2,
			quote: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta quasi voluptate atque animi doloribus autem expedita amet rerum iste."',
			name: "Muhammad Razan Fawwaz",
			edu: "Teknik Informatika, Unsyiah 2020"
		},
		{
			id: 3,
			quote: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta quasi voluptate atque animi doloribus autem expedita amet rerum iste."',
			name: "Yasmin Hana",
			edu: "Hukum, UI 2020"
		},
		{
			id: 4,
			quote: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta quasi voluptate atque animi doloribus autem expedita amet rerum iste."',
			name: "Alya Astrid",
			edu: "Ilmu Komputer, UI 2020"
		}
	]);

	return (
		<div className="testimonials">
			<div className="testimonials-title d-flex flex-column justify-content-center align-items-center">
				<h1 className="testimonial-title mb-3">
					What do They Say About Bersinar
				</h1>
				<h2 className="testimonial-subTitle">
					Kata Sober dan Minshine Saat Belajar Bareng di Bersinar
					Project.
				</h2>
			</div>
			<TestimonialCard dataTestimonialCard={getDataTestimonialCard} />
		</div>
	);
};

export default Testimonials;
