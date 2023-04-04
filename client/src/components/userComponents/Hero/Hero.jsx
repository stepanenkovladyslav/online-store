import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllInstaImages } from "../../../store/actions/InstaImageActions";
import Button from "../UI/Button/Button";
import style from "./Hero.module.css";

const Hero = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllInstaImages());
	}, []);

	const images = useSelector((store) => store.InstaImageReducer.allImg);
	return images.length > 1 ? (
		<div className={style.hero}>
			<div className={style.hero__content}>
				<h3 className={style.hero__smallheading}>
					Chill with Denji and Power
				</h3>
				<h2 className={style.hero__largeheading}>Chainsaw Man</h2>
				<Button
					color={"white"}
					text={"Shop Now"}
					link={"collection/brand/chainsaw-man"}
				/>
			</div>
		</div>
	) : (
		<></>
	);
};

export default Hero;
