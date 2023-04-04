import axios from "axios";
import { useState } from "react";
import jwtDecode from "jwt-decode";

export const fetchAllUsers = () => {
	return async (dispatch) => {
		try {
			const resp = await axios.get(
				"http://127.0.0.1:4000/api/user/getAll"
			);
			const data = await resp.data;
			return dispatch({ type: "FETCHALLUSERS", payload: data });
		} catch (e) {
			return dispatch({
				type: "USER LOADING ERROR",
				payload: { status: true, message: e.message },
			});
		}
	};
};

export const createUser = (email, password, role) => {
	return async (dispatch) => {
		try {
			const resp = await axios.post(
				"http://127.0.0.1:4000/api/user/registration",
				{
					email: email,
					password: password,
					role: role,
				}
			);
			const data = resp.data;
			return dispatch(fetchAllUsers(2000, 1));
		} catch (e) {
			return dispatch({
				type: "POSTINGERROR",
				payload: { status: true, message: e.message },
			});
		}
	};
};

export const changeUserEmail = (email, newEmail) => {
	return async (dispatch) => {
		try {
			const resp = await axios.put(
				"http://127.0.0.1:4000/api/user/changeEmail",
				{
					email: email,
					newEmail: newEmail,
				}
			);
			return dispatch(fetchAllUsers(2000, 1));
		} catch (e) {
			return dispatch({
				type: "POSTINGERROR",
				payload: { status: true, message: e.message },
			});
		}
	};
};

export const changeUserRole = (email, newRole) => {
	return async (dispatch) => {
		try {
			const resp = await axios.put(
				"http://127.0.0.1:4000/api/user/changeRole",
				{
					email: email,
					newRole: newRole,
				}
			);
			return dispatch(fetchAllUsers(2000, 1));
		} catch (e) {
			return dispatch({
				type: "POSTINGERROR",
				payload: { status: true, message: e.message },
			});
		}
	};
};

export const registerUser = (user) => {
	return async (dispatch) => {
		try {
			const resp = await axios.post(
				"http://127.0.0.1:4000/api/user/registration",
				user
			);
			const { token } = resp.data;
			localStorage.setItem("token", token);
			const u = jwtDecode(token);
			return dispatch({
				type: "REGISTER",
				payload: { isAuth: true, user: u },
			});
		} catch (e) {
			return dispatch({
				type: "USER POSTING ERROR",
				payload: { status: true, message: e.message },
			});
		}
	};
};

export const loginUser = (user) => {
	return async (dispatch) => {
		try {
			const resp = await axios.post(
				"http://127.0.0.1:4000/api/user/login",
				user
			);
			const { token } = resp.data;
			localStorage.setItem("token", token);
			const u = jwtDecode(token);
			return dispatch({
				type: "LOGIN",
				payload: { isAuth: true, user: u },
			});
		} catch (e) {
			return dispatch({
				type: "USER POSTING ERROR",
				payload: { status: true, message: e.message },
			});
		}
	};
};

export const logoutUser = () => {
	localStorage.removeItem("token");
	return { type: "LOGOUT", payload: { isAuth: false, user: {} } };
};

export const refreshToken = () => {
	return async (dispatch) => {
		try {
			const t = localStorage.getItem("token");
			const resp = await axios.get(
				"http://127.0.0.1:4000/api/user/auth",
				{
					headers: { Authorization: `Bearer ${t}` },
				}
			);
			const token = resp.data.token;
			const user = jwtDecode(token);
			return dispatch({
				type: "REFRESHTOKEN",
				payload: { isAuth: true, user: user },
			});
		} catch (e) {
			return dispatch({
				type: "USER POSTING ERROR",
				payload: { status: true, message: e.message },
			});
		}
	};
};
