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
				setProduct(data.slice(0, 3));
				setLoading(false);
			}
		}, 1000);
	}, []);

	const ShowProducts = () => (
		<section className="products-box">
			<section className="products-container">
<strong>Other Products</strong>
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
					<ShowProducts />
				)}
			</section>
		</section>
	);
};
export default SimilarProducts;
