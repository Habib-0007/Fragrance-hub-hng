import { Link } from "react-router-dom";

const Showcase = () => {
	return (
		<section className="showcase-box">
			<section className="showcase-container">
				<section className="showcase-left">
					<div className="text">
						New{" "}
						<img
							src="/Fragrance hub/Icons/streamline-emojis_sparkles.svg"
							alt="streamline-emojis_sparkles"
						/>{" "}
						No. 1 in perfume retail
						store{" "}
						<img
							src="/Fragrance hub/Icons/Chevron right.svg"
							alt="Chevron right"
						/>
					</div>
					<div className="text-catch">
						<span>
							Welcome to{" "}
							<em>Fragrance Hub</em>: {" "}
						</span>
						<span>
							Find your scent and Unveil
							Essence of Luxury
						</span>
					</div>
					<p className="text-cont">
						Experience our art of
						fragrances and also indulge
						in our collection of
						exquisite fragrances
					</p>
					<Link
						className="shopBtn"
						href="#products"
					>
						Shop Now
					</Link>
				</section>
				<section className="showcase-right">
					<img
						src="/Fragrance hub/Hero 1.png"
						alt="Hero 1"
					/>
					<img
						src="/Fragrance hub/hero 2.png"
						alt="Hero 2"
					/>
					<img
						src="/Fragrance hub/flower 1.png"
						alt="Flower 2"
					/>
					<img
						src="/Fragrance hub/Flower 2.png"
						alt="Flower 2"
					/>
				</section>
			</section>
		</section>
	);
};

export default Showcase;
