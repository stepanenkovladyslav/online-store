import React from "react";
import { NavLink } from "react-router-dom";

const UserHeaderIcons = (props) => {
	return (
		<div className="icons">
			{props.loggedIn ? (
				<NavLink to="/portal" className="icons__item">
					<span className="material-icons menu-icon">
						account_circle
					</span>
				</NavLink>
			) : (
				<NavLink to="/login" className="icons__item">
					<span className="material-icons menu-icon">
						account_circle
					</span>
				</NavLink>
			)}
			<button
				href=""
				className="icons__item"
				onClick={() => props.activateSearch()}
			>
				<span className="material-icons menu-icon">search</span>
			</button>
			<button
				className="icons__item"
				onClick={() => props.activateCart()}
			>
				<span className="material-icons menu-icon">shopping_bag</span>
			</button>
		</div>
	);
};

export default UserHeaderIcons;
