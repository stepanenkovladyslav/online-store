import React from "react";
import style from "./AdminLogin.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../store/actions/UserActions";
import { NavLink, useNavigate } from "react-router-dom";

const AdminLogin = () => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const user = { email: email, password: password };
	const [submitted, setSubmitted] = useState(false);

	const isAuth = useSelector((store) => store.UserReducer.isAuth);
	const error = useSelector((store) => store.UserReducer.postingError);
	const navigate = useNavigate();

	const submitForm = (e, user) => {
		e.preventDefault();
		dispatch(loginUser(user));
		setSubmitted(true);
	};

	useEffect(() => {
		if (isAuth) {
			navigate("/admin");
		}
	}, [isAuth]);

	return (
		<div>
			<header className={style.header}>
				<h1 className={style.headerTitle}>atsuko</h1>
			</header>
			<form className={style.loginForm}>
				<div className={style.formContainer}>
					<div className={style.formHeader}>
						<span className="material-icons">lock</span>
						<p>Please enter your login details.</p>
					</div>
					<div className={style.formInput}>
						<p>Email</p>
						<div className={style.inputContainer}>
							<span className="material-icons">person</span>
							<input
								type="text"
								className={style.input}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
					</div>
					<div className={`${style.formInput} ${style.password}`}>
						<p>Password</p>
						<div className={style.inputContainer}>
							<span className="material-icons">lock</span>
							<input
								type="password"
								className={style.input}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>
					<div className={style.buttonContainer}>
						<button
							className={style.formButton}
							onClick={(e) => submitForm(e, user)}
						>
							<span className="material-icons">lock_open</span>
							Login
						</button>
					</div>
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
				</div>
			</form>
		</div>
	);
};

export default AdminLogin;
