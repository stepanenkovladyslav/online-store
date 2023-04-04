import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addProductToCart } from "../../../../store/actions/ShoppingCartActions";
import style from "./CarouselDeviceCard.module.css";

const CarouselDeviceCard = (props) => {
	const dispatch = useDispatch();
	return (
		<div className={style.productCard}>
			<NavLink to={`/product/${props.product.id}`}>
				<img
					src={`http://127.0.0.1:4000/${props.product.img}`}
					alt="product image"
					className={style.productImg}
				/>
				<h3 className={style.productName}>{props.product.name}</h3>
			</NavLink>
			<p className={style.productPrice}>${props.product.price}</p>
		</div>
	);
};

export default CarouselDeviceCard;
