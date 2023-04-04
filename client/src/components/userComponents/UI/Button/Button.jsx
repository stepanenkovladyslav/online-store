import React from "react";
import style from "./Button.module.css";
import { NavLink } from "react-router-dom";

const Button = (props) => {
	function getColor() {
		if (props.color == "blue") {
			return style.blueButton;
		}
		if (props.color == "white") {
			return style.whiteButton;
		}
	}

	const buttonClass = getColor();

	return (
		<NavLink className={buttonClass} to={props.link}>
			{props.text}
		</NavLink>
	);
};

export default Button;
