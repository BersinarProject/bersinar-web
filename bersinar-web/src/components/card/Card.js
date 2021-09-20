import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./Card.css";
import cardImage1 from "../../assets/images/starwars.jpg";

const card = (props) => {
	return (
		<div className="class-card d-flex flex-wrap justify-content-evenly align-items-center">
			{props.dataCard.map((card) => {
				return (
					<Card
						key={card.id}
						className="shadow mb-5"
						style={{ width: "350px" }}
					>
						<Card.Img variant="top" src={cardImage1} />
						<Card.Body style={{ padding: "25px" }}>
							<div className="card-category d-flex justify-content-between">
								<Card.Text className="category-name">
									{card.category}
								</Card.Text>
								<Card.Text className="category-tagline">
									{card.tagLine}
								</Card.Text>
							</div>
							<Card.Title className="card-title">
								{card.title}
							</Card.Title>
							<Card.Text className="card-text">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</Card.Text>
							<div className="card-bottom-section d-flex justify-content-between align-items-center">
								<div className="card-tutor d-flex align-items-center">
									<img
										src={cardImage1}
										className="tutor-img"
										alt="Tutor"
									/>
									<Card.Text className="tutor-name">
										{card.tutor}
									</Card.Text>
								</div>
								<Link
									to="/our-class"
									className="card-daftar text-decoration-none"
								>
									Daftar
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
