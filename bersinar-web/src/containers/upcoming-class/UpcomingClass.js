import React from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

// import UpcomingClassCard from "../../components/upcoming-class-card/UpcomingClassCard";
import LiveClassCard from "../../components/live-class-card/LiveClassCard";
import gaadaKelas from "../../assets/images/landing-page/gaadaKelas.svg";
import "./UpcomingClass.css";

class upcomingClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataCards: []
		};
	}

	componentDidMount() {
		/* global Swiper */
		this.swiper = new Swiper(".upcoming-class-swiper", {
			slidesPerView: "auto",
			// loop: true,
			cssMode: true
		});

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
				<div className="container upcoming-class-header d-flex flex-column justify-content-center align-items-center">
					<h1 className="upcoming-class-header-title text-center">
						Telusuri Kelas-kelas Kami
					</h1>
					<h2 className="upcoming-class-header-subTitle col-md-8">
						Maaf, Sob! Kelas yang kamu cari tidak tersedia. Saat ini
						belum ada jadwal kelas yang akan diadakan, harap tunggu
						ya!
					</h2>
				</div>
				<div className="upcoming-class-cards container d-flex justify-content-center align-items-center">
					<img
						src={gaadaKelas}
						alt="Kelas tidak tersedia"
						className="upcoming-class-gaada-kelas"
					/>
					{/* <div className="swiper upcoming-class-swiper">
						<div className="swiper-wrapper">
							{this.renderItems()}
						</div>
					</div> */}
				</div>
				{/* <div className="upcoming-class-footer d-flex flex-column justify-content-center align-items-center">
					<h1 className="upcoming-class-footer-title text-center">
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
				</div> */}
			</div>
		);
	}
}

export default upcomingClass;
