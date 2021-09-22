import { React, useState } from "react";
import { Link } from "react-router-dom";

import Card from "../../components/card/Card";
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
		<div className="upcoming-class mt-5">
			<div className="upcoming-class-top-section d-flex flex-column justify-content-center align-items-center">
				<h1 className="upcoming-class-title mb-3">Upcoming Classes</h1>
				<h2 className="upcoming-class-subTitle">
					Kelas-kelas Bersinar yang akan diadakan selanjutnya
				</h2>
			</div>
			<Card dataUpcomingClassCard={getDataUpcomingClassCard} />
			<div className="btn d-flex justify-content-center align-items-center">
				<Link to="/our-class" className="btn btn-warning">
					More Class
				</Link>
			</div>
		</div>
	);
};

export default UpcomingClass;
