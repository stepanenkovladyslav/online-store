import React from "react";
import { NavLink } from "react-router-dom";
import style from "./ErrorPage.module.css";

const ErrorPage = () => {
	return (
		<div className={style.error}>
			<div className={style.errorWrapper}>
				<h1 className={style.errorTitle}>404</h1>
				<h2 className={style.errorDiscr}>There is no such page</h2>
				<span className={style.errorText}>
					You can follow this link to get to the{" "}
					<NavLink to="/" className={style.linkHome}>
						Home Page
					</NavLink>
				</span>
			</div>
		</div>
	);
};

export default ErrorPage;
