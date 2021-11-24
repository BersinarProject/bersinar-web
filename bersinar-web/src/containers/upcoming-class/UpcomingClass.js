import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// import UpcomingClassCard from "../../components/upcoming-class-card/UpcomingClassCard";
import LiveClassCard from "../../components/live-class-card/LiveClassCard";
import "./UpcomingClass.css";

class upcomingClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataCards: []
		};
	}

	componentDidMount() {
		const apiUrl =
			"https://mocki.io/v1/ad2ddd3e-f443-48ae-838d-6231b62c4428";

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
			return <LiveClassCard key={dataCard.id} dataCard={dataCard} />;
		});
	}

	render() {
		return (
			<div className="upcoming-class">
				<div className="upcoming-class-header d-flex flex-column justify-content-center align-items-center">
					<h1 className="upcoming-class-header-title">
						Telusuri Kelas-kelas Kami
					</h1>
					<h2 className="upcoming-class-header-subTitle">
						Kelas-kelas Bersinar yang akan diadakan selanjutnya
					</h2>
				</div>
				<div className="upcoming-class-cards container d-flex flex-wrap justify-content-center align-items-center">
					{this.renderItems()}
				</div>
				<div className="upcoming-class-footer d-flex flex-column justify-content-center align-items-center">
					<h1 className="upcoming-class-footer-title">
						Tidak menemukan kelasmu?
					</h1>
					<h2 className="upcoming-class-footer-subTitle">
						Coba cari kelasmu di katalog kami
					</h2>
					<Link
						to="/our-class"
						className="upcoming-class-footer-button d-flex justify-content-center align-items-center btn fw-bold"
					>
						Kelas lainnya
					</Link>
				</div>
			</div>
		);
	}
}

export default upcomingClass;
