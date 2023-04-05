import React, { useEffect } from "react";
import style from "./CategoriesGrid.module.css";
import Button from "../UI/Button/Button";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategoryImg } from "../../../store/actions/CategoriesGridImgActions";

const CategoriesGrid = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllCategoryImg());
	}, []);

	const images = useSelector(
		(store) => store.CategoriesGridImgReducer.allImages
	);

	function displayImages() {
		return images.map((img, idx) => {
			return (
				<div
					className={style.grid__item}
					key={idx}
					style={{
						background: `linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(http://127.0.0.1:4000/${img.img})`,
						backgroundSize: "cover",
					}}
				>
					<h3 className={style.grid__heading}>{img.headingText}</h3>
					<Button
						color={"white"}
						text={"Shop All"}
						link={img.imgLink}
					/>
				</div>
			);
		});
	}

	return (
		<section className={style.categories__wrapper}>
			<section className={style.categories__grid}>
				{displayImages()}
			</section>
		</section>
	);
};
export default CategoriesGrid;
