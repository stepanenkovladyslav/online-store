import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./CreateAccountPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../store/actions/UserActions";

const CreateAccountPage = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const user = { email: email, password: password };

	const submitForm = (e, user) => {
		e.preventDefault();
		dispatch(registerUser(user));
	};

	const registeredUser = useSelector((store) => store.UserReducer.user);
	const navigate = useNavigate();

	useEffect(() => {
		if (registeredUser.id) {
			navigate("/portal");
		}
	}, [registeredUser]);

	return (
		<div className={style.createAccountContainer}>
			<form
				className={style.createAccountForm}
				onSubmit={(e) => submitForm(e, user)}
			>
				<h1 className={style.createAccountHeading}>REGISTER</h1>
				<p className={style.createAccountText}>
					Please fill in the information below:
				</p>
				<input
					type="text"
					placeholder="Name"
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className={style.createButton}>Register</button>
				<p className={style.alreadyAccount}>
					Already have an account?{" "}
					<NavLink to="/login">Login</NavLink>
				</p>
			</form>
		</div>
	);
};

export default CreateAccountPage;
