import React from "react";
import "react-reveal";
import "animate.css";
import "./footer.css";
import logo from "../../assets/images/brandLogo.png";
import logotext from "../../assets/images/logoText.png";

const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="row flex justify-content-between">
					<div className="col-md-2 d-flex flex-column">
						<h1 className="footer-title">Navigation</h1>
						<ul>
							<li className="footer-link">
								<a className="footer-link" href="/">
									Home
								</a>
							</li>
							<li className="footer-link">
								<a className="footer-link" href="/">
									About Us
								</a>
							</li>
							<li className="footer-link">
								<a className="footer-link" href="/">
									Our Class
								</a>
							</li>
							<li className="footer-link">
								<a className="footer-link" href="/">
									Donate
								</a>
							</li>
						</ul>
					</div>
					<div className="col-md-2 d-flex flex-column">
						<h1 className="footer-title">Class</h1>
						<ul>
							<li className="footer-link">
								<a className="footer-link" href="/">
									Saintek
								</a>
							</li>
							<li className="footer-link">
								<a className="footer-link" href="/">
									Soshum
								</a>
							</li>
							<li className="footer-link">
								<a className="footer-link" href="/">
									TPS
								</a>
							</li>
						</ul>
					</div>
					<div className="col-md-2 d-flex flex-column">
						<h1 className="footer-title">Follow Us</h1>
						<ul>
							<li className="footer-link">
								<a className="footer-link" href="/">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="24px"
										height="24px"
										id="icon"
									>
										{" "}
										<path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
									</svg>{" "}
									Instagram
								</a>
							</li>
							<li className="footer-link">
								<a className="footer-link" href="/">
									<svg
										fill="#000000"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 30 30"
										width="24px"
										height="24px"
									>
										{" "}
										<path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
									</svg>{" "}
									Twitter
								</a>
							</li>
							<li className="footer-link">
								<a className="footer-link" href="/">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24px"
										height="24px"
										viewBox="0 0 48 48"
										fill="#000000"
									>
										<path d="M 23.857422 8.5 C 17.504717 8.5 11.602344 8.9526234 8.234375 9.65625 A 1.50015 1.50015 0 0 0 8.2128906 9.6621094 C 5.6754768 10.230693 3.2861897 12.048234 2.7832031 14.894531 A 1.50015 1.50015 0 0 0 2.78125 14.90625 C 2.394836 17.200265 2 20.190694 2 24.5 C 2 28.801151 2.3961903 31.712324 2.8847656 34.126953 C 3.4000756 36.889296 5.7342165 38.761817 8.3105469 39.337891 A 1.50015 1.50015 0 0 0 8.3476562 39.347656 C 11.86271 40.040284 17.598467 40.5 23.951172 40.5 C 30.303877 40.5 36.042686 40.04028 39.558594 39.347656 A 1.50015 1.50015 0 0 0 39.595703 39.337891 C 42.133117 38.769306 44.522404 36.951766 45.025391 34.105469 A 1.50015 1.50015 0 0 0 45.029297 34.083984 C 45.409789 31.743169 45.902812 28.755621 46 24.439453 A 1.50015 1.50015 0 0 0 46 24.40625 C 46 20.087697 45.50571 17.078675 45.023438 14.695312 C 44.512192 11.927074 42.175378 10.049478 39.595703 9.4726562 A 1.50015 1.50015 0 0 0 39.476562 9.4511719 C 36.0464 8.9689502 30.211115 8.5 23.857422 8.5 z M 20.15625 17.001953 C 20.526656 16.994297 20.909531 17.081906 21.269531 17.285156 L 29.873047 22.146484 C 31.324047 22.966484 31.324047 25.035469 29.873047 25.855469 L 21.269531 30.716797 C 19.830531 31.528797 18.037109 30.500328 18.037109 28.861328 L 18.037109 19.138672 C 18.037109 17.909422 19.045031 17.024922 20.15625 17.001953 z" />
									</svg>{" "}
									YouTube
								</a>
							</li>
							<li className="footer-link">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									width="24"
									height="24"
									viewBox="0 0 30 30"
									fill="#000000"
								>
									{" "}
									<path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
								</svg>{" "}
								<a className="footer-link" href="/">
									LinkedIn
								</a>
							</li>
						</ul>
					</div>
					<div className="col-md-2 d-flex flex-column">
						<h1 className="footer-title">Useful Link</h1>
						<ul>
							<li className="footer-link">
								<a className="footer-link" href="/">
									Materi Bersinar
								</a>
							</li>
							<li className="footer-link">
								<a className="footer-link" href="/">
									Soal Bersinar
								</a>
							</li>
							<li className="footer-link">
								<a className="footer-link" href="/">
									Google Calendar Bersinar
								</a>
							</li>
						</ul>
					</div>
					<div className="col-md-6 py-4">
						<ul>
							<li className="">
								<img
									className="footer-logo"
									src={logo}
									alt="Bersinar Logo"
								/>
							</li>
							<li className="">
								<img
									className="footer-logotext"
									src={logotext}
									alt="Bersinar Logo"
								/>
							</li>
							<li>
								<div className="footer-text">
									Made with ❤️ while listening
									<span>
										{" "}
										<br /> Favorite Crime
									</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
