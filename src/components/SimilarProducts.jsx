import React, {
	useState,
	useEffect,
} from "react";
import { Link } from "react-router-dom";

const SimilarProducts = ({ data }) => {
	const [product, setProduct] =
		useState([]);
	const [loading, setLoading] =
		useState(true);
	let componentMounted = true;
	useEffect(() => {
		setTimeout(() => {
			if (componentMounted) {
				setProduct(data.slice(0, 4));
				setLoading(false);
			}
		}, 1000);
	}, []);

	const ShowProducts = () => (
		<section className="products-box">
			<section className="products-container">
				{product.map(item => (
					<section
						className="product-wrapper"
						key={item.id}
					>
						<img
							src={`/${item.image}`}
							className=""
							load="lazy"
						/>
						<div className="product-details">
							<strong className="product-name">
								{item.title}
							</strong>
							<p className="product-price">
								£{item.price}
							</p>
							<div className="stars">
								<img src="/Fragrance hub/Icons/Rating.svg" />
								<img src="/Fragrance hub/Icons/Rating.svg" />
								<img src="/Fragrance hub/Icons/Rating.svg" />
								<img src="/Fragrance hub/Icons/Rating.svg" />
								<img src="/Fragrance hub/Icons/Rating.svg" />
							</div>
							<p className="product-reviews">
								{item.reviews} reviews
							</p>
							<Link
								to={`/products/${item.id}`}
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
					<section className="other">
						<strong>
							Other Products
						</strong>
						<ShowProducts />
					</section>
				)}
			</section>
		</section>
	);
};
export default SimilarProducts;
