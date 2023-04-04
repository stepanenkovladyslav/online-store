import React from "react";
import { useEffect, useState, useMemo } from "react";
import {
	addProductToCart,
	deleteProductFromCart,
} from "../../../store/actions/ShoppingCartActions";
import style from "./ShoppingCart.module.css";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../UI/ProductCard/ProductCard";
import Button from "../UI/Button/Button";

const ShoppingCart = (props) => {
	const classes =
		props.active === true
			? `${style.shoppingCartContainer} + ${style.active}`
			: `${style.shoppingCartContainer}`;

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify([]));
	}, []);

	const dispatch = useDispatch();

	const currentCart = useSelector(
		(store) => store.ShoppingCartReducer.shoppingCart
	);

	useEffect(() => {
		setCart(currentCart);
	}, [currentCart]);

	const [cart, setCart] = useState([]);

	function displayCartProducts() {
		return cart.map((product, idx) => {
			return (
				<React.Fragment key={idx}>
					<ProductCard product={product} key={idx} cart={true} />
					<div
						onClick={() => dispatch(deleteProductFromCart(product))}
					>
						<Button color="blue" text="Delete" />
					</div>
				</React.Fragment>
			);
		});
	}

	return (
		<div className={classes}>
			<div className={style.shoppingCart}>
				<div className={style.cartHeader}>
					<p className={style.cartText}>Cart</p>
					<button onClick={() => props.deactivateCart()}>
						<span
							className={
								`material-icons` + ` ${style.materialIcons}`
							}
						>
							close
						</span>
					</button>
				</div>

				{currentCart.length > 0 ? (
					<div className={style.products}>
						{displayCartProducts()}
					</div>
				) : (
					<div className={style.cartContent}>
						<p className={style.cartText}>YOUR CART IS EMPTY</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default ShoppingCart;
