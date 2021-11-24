import React from "react";
import { Card } from "react-bootstrap";

import "./TestimonialCard.css";
import cardImage1 from "../../assets/images/starwars.jpg";

const card = (props) => {
	return (
		<div className="testimonials-card d-flex flex-wrap justify-content-center align-items-center">
			{props.dataTestimonialCard.map((testimonialCard) => {
				return (
					<Card key={testimonialCard.id} className="testimonial-card">
						<Card.Body className="p-0">
							<div className="testimonial-card-profile d-flex">
								<img
									src={cardImage1}
									className="testimonial-card-profile-img"
									alt="Testimonial Avatar"
								/>
								<div className="testimonial-card-profile-bio d-flex flex-column">
									<span className="testimonial-card-profile-bio-name">
										{testimonialCard.name}
									</span>
									<span className="testimonial-card-profile-bio-edu">
										{testimonialCard.edu}
									</span>
								</div>
							</div>
							<Card.Text className="testimonial-card-profile-quote">
								{testimonialCard.quote}
							</Card.Text>
						</Card.Body>
					</Card>
				);
			})}
		</div>
	);
};

export default card;
