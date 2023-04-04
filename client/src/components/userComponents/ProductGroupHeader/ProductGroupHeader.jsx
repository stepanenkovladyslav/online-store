import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import style from "./ProductGroupHeader.module.css";

const ProductGroupPageHeader = (props) => {
	const params = useParams();

	useEffect(() => {
		params.group === "new"
			? props.productSorting("Newest Arrivals")
			: props.productSorting("");
	}, [params]);

	return (
		<div className={style.pageHeadingContainer}>
			<h2 className={style.pageHeading}>{props.pageName}</h2>
			<div className={style.resultInfoContainer}>
				<p className={style.numberOfResults}>
					{props.numberOfProducts} results
				</p>
				<div className={style.sort}>
					<p className={style.sortHeading}>Sort By:</p>
					{params.group === "new" ? (
						<select
							name="Whatever"
							className={style.sortInput}
							onChange={(e) =>
								props.productSorting(e.target.value)
							}
							defaultValue="1"
						>
							<option></option>
							<option value="1">Newest Arrivals</option>
							<option>Price: High to Low</option>
							<option>Price: Low to High</option>
						</select>
					) : (
						<select
							name="Whatever"
							className={style.sortInput}
							onChange={(e) =>
								props.productSorting(e.target.value)
							}
						>
							<option></option>
							<option>Newest Arrivals</option>
							<option>Price: High to Low</option>
							<option>Price: Low to High</option>
						</select>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductGroupPageHeader;
