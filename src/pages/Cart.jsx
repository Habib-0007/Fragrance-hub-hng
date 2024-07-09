import {
	useSelector,
	useDispatch,
} from "react-redux";
import { NavLink } from "react-router-dom";
import {
	useState,
	useEffect,
} from "react";

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

	const [amount, setAmount] =
		useState(0);

	useEffect(() => {
		setAmount(
			cart.reduce(
				(acc, item) =>
					acc +
					item.price * item.quantity,
				0
			)
		);
	}, [cart]);

	const emptyCart = () => (
		<div className="empty-cart">
			<h3>Your Cart is Empty</h3>
		</div>
	);
	const cartItems = product => (
		<div
			key={product.id}
			className="cart-product"
		>
			<div className="cart-product-top">
				<div>
					<img
						src={product.image}
						alt={product.title}
					/>
				</div>
				<h3>{product.title}</h3>
				<div>100ml</div>
			</div>
			<div className="cart-product-bottom">
				<div className="state-buttons">
					<button
						onClick={() =>
							handleDel(product)
						}
					>
						<img
							src="/Fragrance hub/Icons/Minus icon.svg"
							alt="minus icon"
						/>
					</button>
					<p>{product.quantity}</p>
					<button
						onClick={() =>
							handleAdd(product)
						}
					>
						<img
							src="/Fragrance hub/Icons/plus icon.svg"
							alt="plus icon"
						/>
					</button>
				</div>
				<p className="cart-quantity">
					{product.quantity} X £
					{product.price} = £
					{product.quantity *
						product.price}
				</p>
				<div className="delBtn">
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
			<div className="checkout-url">
				<NavLink to="/checkout">
					Proceed to Checkout
				</NavLink>
			</div>
		</>
	);

	return (
		<section className="cart-box">
			<section className="cart-container">
				<h1 className="cart-title">
					Shopping Cart
				</h1>
				{cart.length === 0 &&
					emptyCart()}
				<div className="cart-body-wrapper">
					{cart.length !== 0 &&
						cart.map(cartItems)}
						<div className="amounts">
				<div>
					<p>Subtotal</p>
					<strong>£{amount}</strong>
				</div>
				<div>
					<p>Shipping</p>
					<strong>£20</strong>
				</div>
				<div>
					<p>TOTAL</p>
					<strong>
						£{amount + 20}
					</strong>
				</div>
				</div>
			
				</div>
				{cart.length !== 0 && buttons()}
			</section>
		</section>
	);
};

export default Cart;
