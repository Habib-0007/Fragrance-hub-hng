import { Link } from "react-router-dom";

const Showcase = () => {
	return (
		<section className="showcase-box">
			<section className="showcase-container">
				<section className="showcase-left">
					<p>
						Black Friday Deals up to 50%	off
					</p>
					<button className="shopBtn">
						Shop now
					</button>
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
