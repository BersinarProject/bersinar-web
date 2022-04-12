import React from "react";
import { Container } from "react-bootstrap";

import "./OurEvent.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const OurEvent = () => {
	return (
		<div>
			<Navbar />
			<Container>
				<div className="">
					<div style={{ height: "500px" }} className="border">
						<p>First Section</p>
					</div>
					<div className="mt-5">
						<div style={{ height: "500px" }} className="border">
							<p>Second Section</p>
						</div>
					</div>
				</div>
			</Container>
			<Footer />
		</div>
	);
};

export default OurEvent;
