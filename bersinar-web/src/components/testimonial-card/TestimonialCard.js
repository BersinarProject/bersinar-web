import React from "react";
import { Card } from "react-bootstrap";

import "./TestimonialCard.css";
import cardImage1 from "../../assets/images/starwars.jpg";

const card = (props) => (
	<div className="testimonials-card d-flex flex-wrap justify-content-evenly align-items-center">
		{props.dataTestimonialCard.map((testimonialCard) => (
			<Card
				key={testimonialCard.id}
				className="testimonial-card border-0 shadow mb-5"
				style={{ width: "520px" }}
			>
				<Card.Body style={{ padding: "0px" }}>
					<div className="d-flex align-items-center">
						<img
							src={cardImage1}
							className="testimonial-card-img me-2"
							alt="Testimonial Avatar"
						/>
						<div className="testimonial-card-bio">
							<Card.Text className="testimonial-quote">
								{testimonialCard.quote}
							</Card.Text>
							<Card.Text className="testimonial-name mb-0 fw-bold">
								{testimonialCard.name}
							</Card.Text>
							<Card.Text className="testimonial-edu">
								{testimonialCard.edu}
							</Card.Text>
						</div>
					</div>
				</Card.Body>
			</Card>
		))}
	</div>
);

export default card;
