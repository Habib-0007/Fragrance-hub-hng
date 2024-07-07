import ProductsList from "../components/ProductsList";
import Showcase from "../components/Showcase";
import Designers from "../components/Designers";

const Home = () => {
	return (
		<section>
			<Showcase />
			<Designers />
			<ProductsList />
		</section>
	);
};

export default Home;
