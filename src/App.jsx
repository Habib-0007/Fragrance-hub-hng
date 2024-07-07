import {
	Routes,
	Route,
} from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

const App = () => {
	return (
		<section className="font-opensans">
			<Header />
			<Routes>
				<Route
					exact
					path="/"
					element={<Home />}
				/>
				<Route
			
					path="/products/:id"
					element={<ProductDetails />}
				/>
				<Route
					
					path="/cart"
					element={<Cart />}
				/>
				<Route
					
					path="/checkout"
					element={<Checkout />}
				/>
			</Routes>
			<Footer />
		</section>
	);
};

export default App;
