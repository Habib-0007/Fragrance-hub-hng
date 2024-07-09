import { useState } from "react";
import {
	NavLink,
	Link,
} from "react-router-dom";

const Header = () => {
	const [show, setShow] =
		useState(true);
	return (
		<header className="top-header">
			<section className="subheading">
				<section className="heading-container">
					<NavLink
						to="/"
						className="heading"
					>
						Fragrance Hub
					</NavLink>
					<nav
						className={`${
							show ? "show" : ""
						} head-links`}
					>
						<Link href="/">Home</Link>
						<Link href="/">
							Products
						</Link>
						<Link href="/">
							Contact
						</Link>
					</nav>
					<div
						className={`${
							show ? "show" : ""
						} uti-icons`}
					>
						<img
							src="/Fragrance hub/Icons/Search icon.svg"
							alt="Search Icon"
						/>
					<Link to="/cart">	<img
							src="/Fragrance hub/Icons/Cart icon.svg"
							alt="Cart Icon"
						/>
						</Link>
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
