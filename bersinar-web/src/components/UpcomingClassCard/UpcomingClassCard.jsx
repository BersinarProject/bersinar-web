import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

import "./UpcomingClassCard.css";
import cardImage1 from "../../assets/icons/buttons/gift-white.svg";

export default function UpcomingClassCard({ dataCard }) {
	return (
		<Card key={dataCard.id} className="upcoming-class-card border-0 mb-5">
			<Card.Img
				variant="top"
				src={cardImage1}
				className="upcoming-class-card-image"
			/>
			<Card.Body className="w-100 p-0">
				<Card.Text className="upcoming-class-card-course-code mb-0">
					{dataCard.courseCode}
				</Card.Text>
				<Card.Text className="upcoming-class-card-subject-description">
					Additional Message
				</Card.Text>
				<div className="upcoming-class-card-countdown d-flex justify-content-between align-items-center">
					<span className="upcoming-class-card-countdown-text">
						Starting in
					</span>
					<span className="upcoming-class-card-countdown-timer">
						08.59
					</span>
				</div>
				<Link
					to="/our-class"
					className="upcoming-class-card-button w-100 d-flex justify-content-center align-items-center btn text-white fw-bold"
				>
					Join Kelas
				</Link>
			</Card.Body>
		</Card>
	);
}
