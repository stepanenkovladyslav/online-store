import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../../../store/actions/UserActions";
import style from "./LoginPage.module.css";

const LoginPage = () => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const user = { email: email, password: password };
	const [submitted, setSubmitted] = useState(false);

	const isAuth = useSelector((store) => store.UserReducer.isAuth);
	const navigate = useNavigate();
	const submitForm = (e) => {
		e.preventDefault();
		setEmail("");
		setPassword("");
		setSubmitted(true);
	};

	useEffect(() => {
		if (isAuth) {
			navigate("/portal");
		}
	}, [isAuth]);

	const error = useSelector((store) => store.UserReducer.postingError);

	return (
		<div className={style.loginContainer}>
			<form className={style.loginForm} onSubmit={(e) => submitForm(e)}>
				<div className={style.formContainer}>
					<img
						className={style.formImg}
						src="https://cdn.shopify.com/s/files/1/0070/1700/5113/files/nuki_footer.png"
						alt="animal image"
					></img>
					<h1 className={style.loginHeading}>LOGIN</h1>
					<p className={style.loginText}>
						Please enter your e-mail and password:
					</p>
					<input
						type="email"
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						className={style.loginButton}
						onClick={() => dispatch(loginUser(user))}
					>
						Login
					</button>
					{error.status == true && submitted == true ? (
						<div className={style.error}>
							<p>
								Your login or password is wrong. Please try
								again!
							</p>
						</div>
					) : (
						<></>
					)}
					<p className={style.noAccount}>
						Don't have an account?{" "}
						<NavLink
							to="/create-account"
							className={style.createAccountLink}
						>
							Create one
						</NavLink>
					</p>
				</div>
			</form>
		</div>
	);
};

export default LoginPage;
