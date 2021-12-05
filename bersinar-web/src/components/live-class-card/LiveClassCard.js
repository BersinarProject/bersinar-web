import React from "react";
import { Card } from "react-bootstrap";

import "./LiveClassCard.css";
import cardImage1 from "../../assets/images/starwars.jpg";
import signalIcon from "../../assets/images/SignalIcon.svg";

const LiveClassCard = ({ dataCard }) => {
	return (
		<Card
			key={dataCard.id}
			className="live-class-card swiper-slide border-0 mb-5"
			id="our-class"
		>
			<Card.Img
				variant="top"
				src={cardImage1}
				className="live-class-card-image"
			/>
			<Card.Body className="w-100 p-0">
				<Card.Text className="live-class-card-course-code mb-0">
					{dataCard.courseCode}
				</Card.Text>
				<Card.Text className="live-class-card-subject-description">
					Additional Message
				</Card.Text>
				<div className="live-class-card-countdown d-flex justify-content-between align-items-center">
					<span className="live-class-card-countdown-text">
						Kelas sudah dimulai
					</span>
					<span className="live-class-card-countdown-timer">
						19.30
					</span>
				</div>
				<a
					href="https://telkomsel.zoom.us/j/2478385437?pwd=UWdhakYxWUpZdHlrV08wWGc1bG9Hdz09#success"
					className="live-class-card-button w-100 d-flex justify-content-center align-items-center btn text-white fw-bold"
					role="button"
				>
					<img
						src={signalIcon}
						alt="Signal Icon"
						className="live-class-card-button-icon"
					/>
					Join Live
				</a>
			</Card.Body>
		</Card>
	);
};

export default LiveClassCard;
