import React from "react";
import style from "./CarouselButton.module.css";

const CarouselButton = (props) => {
	function direction() {
		return props.direction === "right" ? ">" : "<";
	}
	return (
		<button
			className={style.scrollButton}
			onClick={() => props.task(props.direction)}
		>
			{direction()}
		</button>
	);
};

export default CarouselButton;
