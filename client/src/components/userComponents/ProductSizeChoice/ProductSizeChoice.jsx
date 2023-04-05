import React from "react";
import style from "./ProductSizeChoice.module.css";

const ProductSizeChoice = (props) => {
	return (
		<>
			{props.product.type !== "Accessories" ? (
				<div className={style.selectSizeContainer}>
					<select
						className={style.selectSize}
						onChange={(e) => props.selectSize(e.target.value)}
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
		</>
	);
};

export default ProductSizeChoice;
