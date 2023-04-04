import React, { useEffect } from "react";
import style from "./Recommendations.module.css";
import ProductCard from "../../userComponents/UI/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllDevices } from "../../../store/actions/DevicesActions";

const Recommendations = (props) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAllDevices(2000, 1));
	}, []);

	const allProducts = useSelector((store) => store.DeviceReducer.allDevices);

	const heading = props.type
		? "YOU MIGHT ALSO LIKE..."
		: props.brand
		? `MORE FROM THIS COLLECTION`
		: "";

	const recommendations = props.type
		? allProducts.filter((product) => product.typeId === props.type)
		: props.brand
		? allProducts.filter((product) => product.brandId === props.brand)
		: [];

	return (
		<div className={style.recommendationsContainer}>
			<h3 className={style.recHeading}>{heading}</h3>
			<div className={style.recommendations}>
				{recommendations.reverse().map((product, idx) => {
					if (idx < 4) {
						return <ProductCard product={product} key={idx} />;
					}
				})}
			</div>
		</div>
	);
};

export default Recommendations;
