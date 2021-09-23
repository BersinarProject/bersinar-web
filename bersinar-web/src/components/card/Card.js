import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

import "./Card.css";
import cardImage1 from "../../assets/images/starwars.jpg";

const card = (props) => {
	return (
		<div className="container-xxl cards-class col-lg-12 d-flex flex-wrap justify-content-evenly align-items-center">
			{props.dataUpcomingClassCard.map((dataCard) => {
				return (
					<Card
						key={dataCard.id}
						className="card-class border-0 shadow mb-5"
						style={{ width: "380px" }}
					>
						<Card.Img
							variant="top"
							src={cardImage1}
							className="card-class-img"
						/>
						<Card.Body style={{ padding: "28px" }}>
							<div className="card-class-category d-flex justify-content-between">
								<Card.Text className="card-class-category-name">
									{dataCard.category}
								</Card.Text>
								<Card.Text className="card-class-category-tagline">
									{dataCard.tagLine}
								</Card.Text>
							</div>
							<Card.Title className="card-class-card-title fw-bold">
								{dataCard.title}
							</Card.Title>
							<Card.Text className="card-class-card-text">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</Card.Text>
							<div className="card-class-tutors d-flex justify-content-between align-items-center">
								<div className="card-class-tutor d-flex align-items-center">
									<img
										src={cardImage1}
										className="card-class-tutor-img"
										alt="Tutor"
									/>
									<Card.Text className="card-class-tutor-name">
										{dataCard.tutor}
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
			})}
		</div>
	);
};

export default card;
