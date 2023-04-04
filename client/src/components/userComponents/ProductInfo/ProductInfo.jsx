import React from "react";
import style from "./ProductInfo.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../../store/actions/ShoppingCartActions";

const ProductInfo = (props) => {
	const product = props.product[0];
	const [selectedSize, setSelectedSize] = useState("");
	const [showInfo, setShowInfo] = useState(false);
	const [showPolicy, setShowPolicy] = useState(false);
	const [showShare, setShowShare] = useState(false);
	const dispatch = useDispatch();

	const chosenProduct = { ...product, size: selectedSize };

	const showHideShare = () => {
		if (showShare) {
			setShowShare(false);
		} else {
			setShowShare(true);
			setShowInfo(false);
			setShowPolicy(false);
		}
	};

	const showHidePolicy = () => {
		if (showPolicy) {
			setShowPolicy(false);
		} else {
			setShowInfo(false);
			setShowPolicy(true);
			setShowShare(false);
		}
	};

	const showShippingPolicy = () => {
		return (
			<>
				<p>
					We accept returns on non-sale items that are in original
					packaging, unused, and unwashed within 30 days of receipt.
					Please follow our returns/exchanges process below. If items
					do not meet our requirements for return, they will be
					shipped back to you in lieu of a refund. Shipping and
					handling charges are non-refundable (exceptions may apply).
				</p>
				<p>
					<strong>Returns & Exchanges Process:</strong>If item(s) fit
					within our returns guidelines found in the FAQ. Please
					select the request returns or exchanges link at the bottom
					of the site to start the process. Please allow 7-10 business
					days for the credit to appear on your account after your
					return is processed."
				</p>
			</>
		);
	};

	const displayShare = () => {
		return (
			<>
				<a href="https://facebook.com" target="_blank">
					<svg className={style.icon} viewBox="0 0 9 17">
						<path
							fill="#747373"
							d="M5.842 17V9.246h2.653l.398-3.023h-3.05v-1.93c0-.874.246-1.47 1.526-1.47H9V.118C8.718.082 7.75 0 6.623 0 4.27 0 2.66 1.408 2.66 3.994v2.23H0v3.022h2.66V17h3.182z"
						></path>
					</svg>
				</a>
				<a href="https://twitter.com" target="_blank">
					<svg className={style.icon} viewBox="0 0 32 25">
						<path
							fill="#747373"
							d="M32 3.077c-1.1748.525-2.4433.8748-3.768 1.031 1.356-.8123 2.3932-2.0995 2.887-3.6305-1.2686.7498-2.6746 1.2997-4.168 1.5934C25.751.796 24.045.0025 22.158.0025c-3.6242 0-6.561 2.937-6.561 6.5612 0 .5124.0562 1.0123.1686 1.4935C10.3104 7.7822 5.474 5.1702 2.237 1.196c-.5624.9687-.8873 2.0997-.8873 3.2994 0 2.2746 1.156 4.2867 2.9182 5.4615-1.075-.0314-2.0872-.3313-2.9745-.8187v.0812c0 3.1806 2.262 5.8363 5.2677 6.4362-.55.15-1.131.2312-1.731.2312-.4248 0-.831-.0438-1.2372-.1188.8374 2.6057 3.262 4.5054 6.13 4.5616-2.2495 1.7622-5.074 2.812-8.1546 2.812-.531 0-1.0498-.0313-1.5684-.0938 2.912 1.8684 6.3613 2.9494 10.0668 2.9494 12.0726 0 18.6776-10.0043 18.6776-18.6776 0-.2874-.0063-.5686-.0188-.8498C30.0066 5.5514 31.119 4.3954 32 3.077z"
						></path>
					</svg>
				</a>
				<a href="https://pinterest.com" target="_blank">
					<svg className={style.icon} viewBox="0 0 32 32">
						<path
							fill="#747373"
							d="M16 0q3.25 0 6.208 1.271t5.104 3.417 3.417 5.104T32 16q0 4.333-2.146 8.021t-5.833 5.833T16 32q-2.375 0-4.542-.625 1.208-1.958 1.625-3.458l1.125-4.375q.417.792 1.542 1.396t2.375.604q2.5 0 4.479-1.438t3.063-3.937 1.083-5.625q0-3.708-2.854-6.437t-7.271-2.729q-2.708 0-4.958.917T8.042 8.689t-2.104 3.208-.729 3.479q0 2.167.812 3.792t2.438 2.292q.292.125.5.021t.292-.396q.292-1.042.333-1.292.167-.458-.208-.875-1.083-1.208-1.083-3.125 0-3.167 2.188-5.437t5.729-2.271q3.125 0 4.875 1.708t1.75 4.458q0 2.292-.625 4.229t-1.792 3.104-2.667 1.167q-1.25 0-2.042-.917t-.5-2.167q.167-.583.438-1.5t.458-1.563.354-1.396.167-1.25q0-1.042-.542-1.708t-1.583-.667q-1.292 0-2.167 1.188t-.875 2.979q0 .667.104 1.292t.229.917l.125.292q-1.708 7.417-2.083 8.708-.333 1.583-.25 3.708-4.292-1.917-6.938-5.875T0 16Q0 9.375 4.687 4.688T15.999.001z"
						></path>
					</svg>
				</a>
			</>
		);
	};
	const buttonClasses =
		selectedSize !== "" || product.type === "Accessories"
			? `${style.cartButton} ${style.active}`
			: style.cartButton;

	const showHideInfo = () => {
		if (showInfo) {
			setShowInfo(false);
		} else {
			setShowInfo(true);
			setShowPolicy(false);
			setShowShare(false);
		}
	};

	const displayInfo = () => {
		return product.info.map((meme, idx) => {
			return (
				<p className={style.productMeme} key={idx}>
					{meme.description}
				</p>
			);
		});
	};
	return (
		<div className={style.infoContainer}>
			<div className={style.infoHeader}>
				<h3 className={style.productBrand}>{product.brand}</h3>
				<div className={style.starsReview}>
					<span
						className={`material-symbols-outlined ${style.grade}`}
					>
						grade
					</span>
					<span
						className={`material-symbols-outlined ${style.grade}`}
					>
						grade
					</span>
					<span
						className={`material-symbols-outlined ${style.grade}`}
					>
						grade
					</span>
					<span
						className={`material-symbols-outlined ${style.grade}`}
					>
						grade
					</span>
					<span
						className={`material-symbols-outlined ${style.grade}`}
					>
						grade
					</span>
				</div>
			</div>
			<div className={style.namePrice}>
				<h3 className={style.productName}>{product.name}</h3>
				<h3 className={style.productPrice}>${product.price}</h3>
			</div>
			{product.type !== "Accessories" ? (
				<div className={style.selectSizeContainer}>
					<select
						className={style.selectSize}
						onChange={(e) => setSelectedSize(e.target.value)}
						defaultValue="1"
					>
						<option disabled value="1">
							Select Size
						</option>
						<option value="S">S</option>
						<option value="M">M</option>
						<option value="L">L</option>
						<option value="XL">XL</option>
					</select>
				</div>
			) : (
				<></>
			)}
			<button
				className={buttonClasses}
				onClick={() => dispatch(addProductToCart(chosenProduct))}
			>
				ADD TO CART
			</button>
			<div className={style.productDetails}>
				<button
					className={style.productDetailsButton}
					onClick={() => showHideInfo()}
				>
					Product Details
				</button>
				<hr></hr>
				{showInfo ? (
					<div className={style.productInfo}>{displayInfo()}</div>
				) : (
					<></>
				)}
			</div>
			<div className={style.productDetails}>
				<button
					className={style.productDetailsButton}
					onClick={() => showHidePolicy()}
				>
					Shipping and Returns
				</button>
				<hr></hr>
				{showPolicy ? (
					<div className={style.productPolicy}>
						{showShippingPolicy()}
					</div>
				) : (
					<></>
				)}
			</div>
			<div className={style.productDetails}>
				<button
					className={style.productDetailsButton}
					onClick={() => showHideShare()}
				>
					Share
				</button>
				<hr></hr>
				{showShare ? (
					<div className={style.showShare}>{displayShare()}</div>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default ProductInfo;
