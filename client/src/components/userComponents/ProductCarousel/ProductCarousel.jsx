import React from "react";
import style from "./ProductCarousel.module.css";
import Button from "../UI/Button/Button";
import { useEffect, useRef } from "react";
import CarouselDeviceCard from "../UI/CarouselDeviceCard/CarouselDeviceCard";
import CarouselButton from "../UI/CarouselButton/CarouselButton";

const ProductCarousel = (props) => {
	const revealProducts = () => {
		return props.products.map((product, idx) => {
			return <CarouselDeviceCard product={product} key={idx} />;
		});
	};

	const scrollRef = useRef();

	const buttonScroll = (direction) => {
		if (scrollRef) {
			if (direction == "right") {
				scrollRef.current.scrollBy(
					scrollRef.current.offsetWidth + 15,
					0
				);
			} else {
				scrollRef.current.scrollBy(
					-scrollRef.current.offsetWidth - 15,
					0
				);
			}
		}
	};

	return (
		<section className={style.carousel__wrapper}>
			<div className={style.product__carousel}>
				<h3 className={style.carousel__smallheading}>
					{props.smallHeading}
				</h3>
				<h2 className={style.carousel__largeheading}>
					{props.bigHeading}
				</h2>
				<div className={style.carousel__productlist}>
					<CarouselButton direction={"left"} task={buttonScroll} />
					<div className={style.carousel} ref={scrollRef}>
						{props.products.length > 1 ? revealProducts() : <></>}
					</div>
					<CarouselButton direction={"right"} task={buttonScroll} />
				</div>
				<Button color={"blue"} text={props.buttonText} />
			</div>
		</section>
	);
};

export default ProductCarousel;
