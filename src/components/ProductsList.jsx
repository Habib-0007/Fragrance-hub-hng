import React, {
	useState,
	useEffect,
} from "react";
import { Link } from "react-router-dom";
import Data from "../Data";

const ProductsList = () => {
	const [product, setProduct] =
		useState([]);
	const [loading, setLoading] =
		useState(true);
	let componentMounted = true;

	const data = Data();

	useEffect(() => {
		setTimeout(() => {
			if (componentMounted) {
				setProduct(data);
				setLoading(false);
			}
		}, 1000);
	}, []);

	const ShowProducts = () => (
		<section className="products-box">
			<section className="products-container">
				{product.map(data => (
					<section
						className="product-wrapper"
						key={data.id}
					>
						<img
							src={`/${data.image}`}
							className=""
							load="lazy"
						/>
						<div className="product-details">
							<strong className="product-name">
								{data.title}
							</strong>
							<p className="product-price">
								£{data.price}
							</p>
							<div className="stars">
								<img src="/Fragrance hub/Icons/Rating.svg" />
								<img src="/Fragrance hub/Icons/Rating.svg" />
								<img src="/Fragrance hub/Icons/Rating.svg" />
								<img src="/Fragrance hub/Icons/Rating.svg" />
								<img src="/Fragrance hub/Icons/Rating.svg" />
							</div>
							<p className="product-reviews">
								{data.reviews} reviews
							</p>
							<Link
								to={`/products/${data.id}`}
							>
								Buy Now
							</Link>
						</div>
					</section>
				))}
			</section>
		</section>
	);

	return (
		<section className="loading-box">
			<section className="loading-cont">
				{loading ? (
					"Loading..."
				) : (
					<section>
						<div
						
							className="cat"
						>
							<p>Categories </p>
							<p>Products </p>
						</div>
						<ShowProducts />
					</section>
				)}
			</section>
		</section>
	);
};
export default ProductsList;
