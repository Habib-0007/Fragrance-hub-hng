import { useState } from "react";

const ShowPersonalInfo = ({
	showInfo,
	handleAddress,
}) => {
	const [fullName, setFullName] =
		useState("");
	const [email, setEmail] =
		useState("");
	const [phoneNumber, setPhoneNumber] =
		useState("");
	return (
		<section>
			{showInfo && (
				<form className="info-form">
					<div>
						<label htmlFor="fullname">
							Full name
						</label>
						<input
							type="text"
							name="fullname"
							value={fullName}
							placeholder="Enter your full name"
							onChange={e => {
								setFullName(
									e.target.value
								);
							}}
						/>
					</div>
					<div>
						<label htmlFor="email">
							Email address
						</label>
						<input
							type="text"
							name="email"
							value={email}
							placeholder="Enter your email address"
							onChange={e => {
								setEmail(
									e.target.value
								);
							}}
						/>
					</div>
					<div>
						<label htmlFor="phone_number">
							Phone number
						</label>
						<input
							type="text"
							name="phone_number"
							value={phoneNumber}
							placeholder="Enter your phone number"
							onChange={e => {
								setPhoneNumber(
									e.target.value
								);
							}}
						/>
					</div>
					<button
						type="submit"
						onClick={e => {
							e.preventDefault();
							handleAddress();
						}}
					>
						Continue
					</button>
				</form>
			)}
		</section>
	);
};

const BillingAddress = ({
	showAddress,
	handlePayment,
}) => {
	const [address, setAddress] =
		useState("");
	const [city, setCity] = useState("");
	const [postalCode, setPostalCode] =
		useState("");
	const [state, setState] =
		useState("");
	const [country, setCountry] =
		useState("");
	return (
		<section>
			{showAddress && (
				<form className="address-form">
					<div>
						<div>
							<label htmlFor="address">
								Address
							</label>
							<input
								type="text"
								name="address"
								value={address}
								placeholder="Enter your house address"
								onChange={e => {
									setAddress(
										e.target.value
									);
								}}
							/>
						</div>
					</div>
					<div className="row">
						<div>
							<label htmlFor="city">
								City
							</label>
							<input
								type="text"
								name="city"
								value={city}
								placeholder="City"
								onChange={e => {
									setCity(
										e.target.value
									);
								}}
							/>
						</div>
						<div>
							<label htmlFor="postal_code">
								Postal Code
							</label>
							<input
								type="text"
								name="postal_code"
								value={postalCode}
								placeholder="Postal code"
								onChange={e => {
									setPostalCode(
										e.target.value
									);
								}}
							/>
						</div>
					</div>
					<div className="row">
						<div>
							<label htmlFor="state">
								State
							</label>
							<input
								type="text"
								name="state"
								value={state}
								placeholder="State"
								onChange={e => {
									setState(
										e.target.value
									);
								}}
							/>
						</div>
						<div>
							<label htmlFor="country">
								Country
							</label>
							<input
								type="text"
								name="country"
								value={country}
								placeholder="Country"
								onChange={e => {
									setCountry(
										e.target.value
									);
								}}
							/>
						</div>
					</div>
					<button
						type="submit"
						onClick={e => {
							e.preventDefault();
							handlePayment();
						}}
					>
						Continue
					</button>
				</form>
			)}
		</section>
	);
};

const PaymentMethod = ({
	showPayment,
}) => {
	const [cardName, setCardName] =
		useState("");
	const [cardNumber, setCardNumber] =
		useState("");
	const [expiryDate, setExpiryDate] =
		useState("");
	const [CVV, setCVV] = useState("");
	return (
		<section>
			{showPayment && (
				<form className="payment-form">
					<div className="payment-top">
						<img
							src="/Fragrance hub/Icons/Master card.svg"
							alt="Master card"
						/>
						<img
							src="/Fragrance hub/Icons/Visa card.svg"
							alt="Visa card"
						/>
						<img
							src="/Fragrance hub/Icons/Pypal.svg"
							alt="Pypal"
						/>
					</div>
					<div>
						<div>
							<label htmlFor="card_name">
								Card name
							</label>
							<input
								type="text"
								name="card_name"
								value={cardName}
								placeholder="e.g. Habib Opeyemi Adebayo"
						onChange={e => {
								setCardName(
									e.target.value
								);
							}}	/>
						</div>
					</div>
					<div>
						<div>
							<label htmlFor="card_number">
								Card number
							</label>
							<div className="card-number">
								<img
									src="/Fragrance hub/Icons/Master card.svg"
									alt="Master card"
								/>
								<input
									type="text"
									name="card_number"
									value={cardNumber}
									placeholder="e.g. 1234 5678 **** ****"
							onChange={e => {
								setCardNumber(
									e.target.value
								);
							}}	/>
							</div>
						</div>
					</div>
					<div className="row">
						<div>
							<label htmlFor="expiry_date">
								Expiry date
							</label>
							<input
								type="text"
								name="expiry_date"
								value={expiryDate}
								placeholder="e.g. 02/24"
					onChange={e => {
								setExpiryDate(
									e.target.value
								);
							}}		/>
						</div>

						<div>
							<label htmlFor="cvv">
								CVV
							</label>
							<input
								type="text"
								name="cvv"
								value={CVV}
								placeholder="e.g. 456"
					onChange={e => {
								setCVV(
									e.target.value
								);
							}}		/>
						</div>
					</div>
					<p className="checkbox-area">
						<input
							name="checkbox"
							type="checkbox"
						/>
						<label htmlFor="checkbox">
							Billing address same as
							shipping address
						</label>
					</p>
					<button type="submit">
						Proceed to pay
					</button>
				</form>
			)}
		</section>
	);
};

const Checkout = () => {
	const [showInfo, setShowInfo] =
		useState(true);
	const [showAddress, setShowAddress] =
		useState(false);
	const [showPayment, setShowPayment] =
		useState(false);

	const handleInfo = () => {
		setShowInfo(true);
		setShowAddress(false);
		setShowPayment(false);
	};

	const handleAddress = () => {
		setShowInfo(false);
		setShowAddress(true);
		setShowPayment(false);
	};

	const handlePayment = () => {
		setShowInfo(false);
		setShowAddress(false);
		setShowPayment(true);
	};

	return (
		<section className="checkout">
			<section className="checkout-header">
				<button
					className={
						showInfo ? "show" : ""
					}
					onClick={handleInfo}
				>
					Personal Info
				</button>
				<button
					className={
						showAddress ? "show" : ""
					}
					onClick={handleAddress}
				>
					Billing Address
				</button>
				<button
					className={
						showPayment ? "show" : ""
					}
					onClick={handlePayment}
				>
					Payment Method
				</button>
			</section>
			<ShowPersonalInfo
				showInfo={showInfo}
				handleAddress={handleAddress}
			/>
			<BillingAddress
				showAddress={showAddress}
				handlePayment={handlePayment}
			/>
			<PaymentMethod
				showPayment={showPayment}
			/>
		</section>
	);
};

export default Checkout;
