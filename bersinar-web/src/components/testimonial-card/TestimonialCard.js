import React from "react";
import { Card } from "react-bootstrap";

import "./TestimonialCard.css";
import cardImage1 from "../../assets/images/ArrowIcon.svg";

const card = ({ dataTestimonialCard }) => {
	return (
		<Card
			key={dataTestimonialCard.id}
			className="testimonial-card swiper-slide"
		>
			<Card.Body className="p-0">
				<div className="testimonial-card-profile d-flex">
					<img
						src={cardImage1}
						className="testimonial-card-profile-img"
						alt="Testimonial Avatar"
					/>
					<div className="testimonial-card-profile-bio d-flex flex-column">
						<span className="testimonial-card-profile-bio-name">
							{dataTestimonialCard.name}
						</span>
						<span className="testimonial-card-profile-bio-edu">
							{dataTestimonialCard.edu}
						</span>
					</div>
				</div>
				<Card.Text className="testimonial-card-profile-quote">
					{dataTestimonialCard.quote}
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default card;
