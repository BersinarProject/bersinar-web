import UpcomingClass from "../containers/upcoming-class/UpcomingClass";
import Navbar from "../components/navbar/Navbar";
import Hero from "../containers/hero/Hero";
import Counter from "../components/counter/Counter";
import Introduce from "../containers/introduce/Introduce";


const LandingPage = () => {
	return (
		<div>
			<Navbar/>
			<Hero/>
			<Counter/>
			<Introduce/>
			<UpcomingClass/>
		</div>
	);
};

export default LandingPage;
