import {
	useSelector,
	useDispatch,
} from "react-redux";
import { NavLink } from "react-router-dom";

const addCart = product => ({
	type: "ADD_ITEM_TO_CART",
	payload: product,
});

const removeCart = product => ({
	type: "REMOVE_ITEM_FROM_CART",
	payload: product,
});

const delCart = product => ({
	type: "DELETE_ITEM",
	payload: product,
});

const Cart = () => {
	const cart = useSelector(
		state => state.handleCart
	);
	const dispatch = useDispatch();

	const handleAdd = item => {
		dispatch(addCart(item));
	};
	const handleRemove = item => {
		dispatch(removeCart(item));
	};
	const handleDel = item => {
		dispatch(delCart(item));
	};

	const emptyCart = () => (
		<div className="">
			<div className="">
				<div className="">
					<h3 className="">
						Your Cart is Empty
					</h3>
				</div>
			</div>
		</div>
	);
	const cartItems = product => (
		<div
			key={product.id}
			className="cart-product"
		>
			<div className="">
				<div>
					<img
						src={product.image}
						alt={product.title}
						className=""
					/>
				</div>
				<h3 className="">
					{product.title}
				</h3>
			</div>
			<div className="">
				<div>
					<button onClick={() =>
							handleAdd(product)
						}>
						<img
							src="/Fragrance hub/Icons/plus icon.svg"
							alt="plus-icon"
						/>
					</button>
					<p>{product.quantity}</p>
					<button onClick={() =>
							handleAdd(product)
						}>
						<img
							src="/Fragrance hub/Icons/Minus icon.svg"
							alt="minus-icon"
						/>
					</button>
				</div>
				<p className="">
					{product.quantity} X £
					{product.price} = £
					{product.quantity *
						product.price}
				</p>
				<div className="">
					<button
						type="button"
						className=""
						onClick={() =>
							handleDel(product)
						}
					>
						<img
							src="/Fragrance hub/Icons/Delete icon.svg"
							alt="del icon"
						/>
					</button>
				</div>
			</div>
		</div>
	);
	const buttons = () => (
		<>
			<div className="">
				<NavLink
					to="/checkout"
					className=""
				>
					Proceed to Checkout
				</NavLink>
			</div>
		</>
	);

	return (
		<section className="cart-box">
			<section className="cart-container">
				{cart.length === 0 &&
					emptyCart()}
				<div className="">
					{cart.length !== 0 &&
						cart.map(cartItems)}
				</div>
				{cart.length !== 0 && buttons()}
			</section>
		</section>
	);
};

export default Cart;
