import { useSelector } from "react-redux";
import {
	NavLink,
	Link,
} from "react-router-dom";

const Header = () => {
	const state = useSelector(
		state => state.handleCart
	);
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
					<div className="uti-icons">
						<img
							src="/Fragrance hub/Icons/Search icon.svg"
							alt="Search Icon"
						/>
						<Link to="/cart">
							<p>{state.length}</p>
							<img
								src="/Fragrance hub/Icons/Cart icon.svg"
								alt="Cart Icon"
							/>
						</Link>
					</div>
				</section>
			</section>
		</header>
	);
};

export default Header;
