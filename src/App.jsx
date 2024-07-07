import {
	Routes,
	Route,
} from "react-router-dom";

// Components
import Header from "./components/Header";

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
					exact
					path="/products/:id"
					element={<ProductDetails />}
				/>
				<Route
					exact
					path="/cart"
					element={<Cart />}
				/>
				<Route
					exact
					path="/checkout"
					element={<Checkout />}
				/>
			</Routes>
		</section>
	);
};

export default App;
