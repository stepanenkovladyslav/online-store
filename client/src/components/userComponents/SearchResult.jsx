import React from "react";
import { NavLink } from "react-router-dom";
import style from "./SearchBar/SearchBar.module.css";

const SearchResult = (props) => {
	return (
		<NavLink
			to={`product/${props.product.id}`}
			className={style.resultContainer}
		>
			<img
				className={style.productImg}
				src={`http://127.0.0.1:4000/${props.product.img}`}
			/>
			<div className={style.infoContainer}>
				<h4>{props.product.name}</h4>
				<h4 className={style.price}>{props.product.price}</h4>
			</div>
		</NavLink>
	);
};

export default SearchResult;
