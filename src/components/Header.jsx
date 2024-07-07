import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="top-header">
			<section className="subheading">
				<section className="heading-container">
					<h1 className="heading">
						Fragrance Hub
					</h1>
					<nav className="head-links">
						<Link href="/">Home</Link>
						<Link href="/">
							Products
						</Link>
						<Link href="/">
							Contact
						</Link>
					</nav>
					<div className="uti-icons">
						<img
							src="/Fragrance hub/Icons/Search icon.svg"
							alt="Search Icon"
						/>
						<img
							src="/Fragrance hub/Icons/Cart icon.svg"
							alt="Cart Icon"
						/>
					</div>
					<button className="menubar">
						&#9776;
					</button>
				</section>
			</section>
		</header>
	);
};

export default Header;
