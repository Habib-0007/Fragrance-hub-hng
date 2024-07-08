import React, {
	useState,
	useEffect,
} from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Data from "../Data";

import SimilarProducts from "../components/SimilarProducts";

export const addCart = product => ({
	type: "ADD_ITEM_TO_CART",
	payload: product,
});

const ProductDetails = () => {
	const { id } = useParams();
	const [
		otherProducts,
		setOtherProducts,
	] = useState([]);
	const [product, setProduct] =
		useState([]);
	const [loading, setLoading] =
		useState(true);

	const dispatch = useDispatch();
	const addProduct = product => {
		dispatch(addCart(product));
	};

	const data = Data();

	useEffect(() => {
		setTimeout(() => {
			setProduct(
				data.find(
					currentProduct =>
						currentProduct.id == id
				)
			);
			setOtherProducts(
				data.filter(
					currentProduct =>
						currentProduct.id != id
				)
			);
			setLoading(false);
		}, 1000);
	}, []);

	const Loading = () => (
		<div>
			<div>Loading...</div>
		</div>
	);

	const ShowProduct = () => (
		<section className="displayed-product">
			<div className="dis-image">
				<img
					src={`/${product.image}`}
					alt={product.title}
				/>
			</div>
			<div className="dis-details">
				<h1>{product.title}</h1>
				<strong>
					£{product.price}
				</strong>
				<p className="stars">
					<img
						src="/Fragrance hub/Icons/Rating.svg"
						alt="Rating"
					/>
					<img
						src="/Fragrance hub/Icons/Rating.svg"
						alt="Rating"
					/>
					<img
						src="/Fragrance hub/Icons/Rating.svg"
						alt="Rating"
					/>
					<img
						src="/Fragrance hub/Icons/Rating.svg"
						alt="Rating"
					/>
					<img
						src="/Fragrance hub/Icons/Rating.svg"
						alt="Rating"
					/>
				</p>
				<h4>
					{product.reviews} reviews
				</h4>
				<p>{product.description}</p>
				<button
					type="button"
					className="addToCartBtn"
					onClick={() =>
						addProduct(product)
					}
				>
					Add to Cart
				</button>
			</div>
		</section>
	);

	return (
		<section className="products-details-box">
			<section className="products-details-container">
				{loading ? (
					"Loading..."
				) : (
					<section>
						<ShowProduct />
						<SimilarProducts
							data={otherProducts}
						/>
					</section>
				)}
			</section>
		</section>
	);
};

export default ProductDetails;
