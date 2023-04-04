import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../store/actions/UserActions";
import style from "./UserCabinet.module.css";
import { NavLink } from "react-router-dom";

const UserCabinet = () => {
	const dispatch = useDispatch();
	return (
		<div className={style.cabinetContainer}>
			<div className={style.greetingsContainer}>
				<NavLink
					className={style.logoutButton}
					to="/"
					onClick={() => dispatch(logoutUser())}
				>
					Logout
				</NavLink>
				<h1 className={style.myAccount}>My Account</h1>
				<p className={style.welcomeText}>Wecome back!</p>
			</div>
			<div className={style.orderInfo}>
				<h3 className={style.orderHeading}>My orders</h3>
				<hr />
				<p className={style.noOrders}>
					You haven't placed any orders yet
				</p>
			</div>
		</div>
	);
};

export default UserCabinet;
