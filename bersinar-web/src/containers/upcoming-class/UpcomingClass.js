import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import UpcomingClassCard from "../../components/upcoming-class-card/upcomingClassCard";
import "./UpcomingClass.css";

class upcomingClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataCards: []
		};
	}

	componentDidMount() {
		const apiUrl = "https://api.good4u.tech/classes?type=l";

		axios
			.get(apiUrl)
			.then((response) => {
				this.setState({
					dataCards: response.data.classes
				});
			})
			.catch((error) => {
				return error;
			});
	}

	renderItems() {
		const { dataCards } = this.state;
		return dataCards.map((dataCard) => {
			return <UpcomingClassCard key={dataCard.id} dataCard={dataCard} />;
		});
	}

	render() {
		return (
			<div className="upcoming-class">
				<div className="upcoming-class-header d-flex flex-column justify-content-center align-items-center">
					<h1 className="upcoming-class-title mb-3">
						Upcoming Classes
					</h1>
					<h2 className="upcoming-class-subTitle">
						Kelas-kelas Bersinar yang akan diadakan selanjutnya
					</h2>
				</div>
				<div className="cards-class container d-flex flex-wrap justify-content-evenly align-items-center">
					{this.renderItems()}
				</div>
				<div className="btn d-flex justify-content-center align-items-center">
					<Link
						to="/our-class"
						className="btn-more btn btn-shadow px-4"
					>
						More Class
					</Link>
				</div>
			</div>
		);
	}
}

export default upcomingClass;
