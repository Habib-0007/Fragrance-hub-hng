import ProductsList from "../components/ProductsList";
import Showcase from "../components/Showcase";
import BelowHeader from "../components/BelowHeader";

const Home = () => {
	return (
		<section>
			<Showcase />
			<BelowHeader />
			<ProductsList />
		</section>
	);
};

export default Home;
