import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "./ProductCard.module.css";

const ProductCard = (props) => {
	const classes =
		props.cart === true
			? `${style.productContainer} ${style.cart}`
			: style.productContainer;
	return (
		<div className={classes}>
			<NavLink className={style.link} to={`/product/${props.product.id}`}>
				{props.cart ? (
					<>
						<img
							src={`http://127.0.0.1:4000/${props.product.device_photos[0].img}`}
							className={style.productImg}
						></img>
						<h3 className={style.productName}>
							{props.product.name}
						</h3>
						<h3 className={style.productSize}>
							{props.product.size}
						</h3>
						<h4 className={style.productPrice}>
							{props.product.price}
						</h4>
					</>
				) : (
					<>
						<img
							src={`http://127.0.0.1:4000/${props.product.img}`}
							className={style.productImg}
						></img>
						<h3 className={style.productName}>
							{props.product.name}
						</h3>
						<h4 className={style.productPrice}>
							{props.product.price}
						</h4>
					</>
				)}
			</NavLink>
		</div>
	);
};

export default ProductCard;
