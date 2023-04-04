import axios from "axios";

export const createBrand = (name) => {
	return async (dispatch) => {
		try {
			const resp = await axios.post("http://127.0.0.1:4000/api/brand", {
				name: name,
			});
			const data = resp.data;
			return dispatch({ type: "CREATEBRAND", payload: data });
		} catch (e) {
			return dispatch({
				type: "POSTINGERROR",
				payload: { status: true, message: e.message },
			});
		}
	};
};

export const fetchAllBrands = () => {
	return async (dispatch) => {
		try {
			const resp = await axios.get("http://127.0.0.1:4000/api/brand");
			const data = resp.data;
			return dispatch({ type: "FETCHALLBRANDS", payload: data });
		} catch (e) {
			return dispatch({
				type: "BRAND LOADING ERROR",
				payload: { status: true, message: e.message },
			});
		}
	};
};

export const fetchOneBrand = (id) => {
	return async (dispatch) => {
		try {
			const resp = await axios.get(
				`http://127.0.0.1:4000/api/brand/${id}`
			);
			const data = resp.data;
			return dispatch({ type: "FETCHONEBRAND", payload: data });
		} catch (e) {
			return dispatch({
				type: "BRAND LOADING ERROR",
				payload: { status: true, message: e.message },
			});
		}
	};
};
export const changeBrandName = (name, newName) => {
	return async (dispatch) => {
		try {
			const resp = await axios.put("http://127.0.0.1:4000/api/brand", {
				name: name,
				newName: newName,
			});
			return dispatch(fetchAllBrands(2000, 1));
		} catch (e) {
			return dispatch({
				type: "POSTINGERROR",
				payload: { status: true, message: e.message },
			});
		}
	};
};
