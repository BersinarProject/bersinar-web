import { React, useState } from "react";
import { Link } from "react-router-dom";

import Card from "../../components/upcoming-class-card/upcomingClassCard";
import "./UpcomingClass.css";

const UpcomingClass = () => {
	const [getDataUpcomingClassCard] = useState([
		{
			id: 1,
			category: "Saintek",
			tagLine: "#MenyinariFisika",
			title: "Belajar Fisika Kuantum Bareng Razan",
			tutor: "Razan"
		},
		{
			id: 2,
			category: "Soshum",
			tagLine: "#MenyinariEkonomi",
			title: "Belajar Dasar Ekonomi Bareng Yasmin",
			tutor: "Yasmin"
		},
		{
			id: 3,
			category: "TPS",
			tagLine: "#MenyinariEnglish",
			title: "Tenses and Conjunction with Ahnaf",
			tutor: "Ahnaf"
		}
	]);

	return (
		<div className="upcoming-class">
			<div className="upcoming-class-header d-flex flex-column justify-content-center align-items-center">
				<h1 className="upcoming-class-title mb-3">Upcoming Classes</h1>
				<h2 className="upcoming-class-subTitle">
					Kelas-kelas Bersinar yang akan diadakan selanjutnya
				</h2>
			</div>
			<Card dataUpcomingClassCard={getDataUpcomingClassCard} />
			<div className="btn d-flex justify-content-center align-items-center">
				<Link to="/our-class" className="btn-more btn btn-shadow px-4">
					More Class
				</Link>
			</div>
		</div>
	);
};

export default UpcomingClass;
