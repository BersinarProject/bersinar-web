import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

import "./upcomingClassCard.css";
import cardImage1 from "../../assets/images/starwars.jpg";

const upcomingClasscard = ({ dataCard }) => {
	return (
		<Card
			key={dataCard.id}
			className="card-class border-0 shadow mb-5"
			style={{ width: "350px" }}
		>
			<Card.Img
				variant="top"
				src={cardImage1}
				className="card-class-image"
			/>
			<Card.Body style={{ padding: "28px" }}>
				<div className="card-class-category d-flex justify-content-between">
					<Card.Text className="card-class-category-name">
						{dataCard.courseName}
					</Card.Text>
					<Card.Text className="card-class-category-tagline">
						{dataCard.courseCode}
					</Card.Text>
				</div>
				<Card.Title className="card-class-title fs-6 lh-base fw-bold">
					{dataCard.subjectName}
				</Card.Title>
				<Card.Text className="card-class-text">
					{dataCard.subjectDescription}
				</Card.Text>
				<div className="card-class-tutors d-flex justify-content-between align-items-center">
					<div className="card-class-tutor d-flex align-items-center">
						{/* <img
							src={cardImage1}
							className="card-class-tutor-image"
							alt="Tutor"
						/> */}
						<Card.Text className="card-class-tutor-name">
							{dataCard.tutorName}
						</Card.Text>
					</div>
					<Link
						to="/our-class"
						className="card-class-daftar text-decoration-none"
					>
						Join Kelas
					</Link>
				</div>
			</Card.Body>
		</Card>
	);
};

export default upcomingClasscard;
