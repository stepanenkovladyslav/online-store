import axios from "axios";

export const createType = (name) => {
	return async (dispatch) => {
		try {
			const resp = axios.post("http://127.0.0.1:4000/api/type/", {
				name: name,
			});
			const data = (await resp).data;
			return dispatch({ type: "CREATETYPE", payload: data });
		} catch (e) {
			return dispatch({
				type: "POSTINGERROR",
				payload: { status: true, message: e.message },
			});
		}
	};
};

export const fetchAllTypes = () => {
	return async (dispatch) => {
		try {
			const resp = await axios.get("http://127.0.0.1:4000/api/type/");
			const data = resp.data;
			return dispatch({ type: "FETCHALLTYPES", payload: data });
		} catch (e) {
			return dispatch({
				type: "TYPE LOADING ERROR",
				payload: { status: true, message: e.message },
			});
		}
	};
};

export const fetchOneType = (id) => {
	return async (dispatch) => {
		try {
			const resp = await axios.get(
				`http://127.0.0.1:4000/api/type/${id}`
			);
			const data = resp.data;
			return dispatch({ type: "FETCHONETYPE", payload: data });
		} catch (e) {
			return dispatch({
				type: "TYPE LOADING ERROR",
				payload: { status: true, message: e.message },
			});
		}
	};
};

export const changeTypeName = (name, newName) => {
	return async (dispatch) => {
		try {
			const resp = axios.put(
				"http://127.0.0.1:4000/api/type/changeName",
				{
					name: name,
					newName: newName,
				}
			);
			return dispatch(fetchAllTypes(2000, 1));
		} catch (e) {
			return dispatch({
				type: "POSTINGERROR",
				payload: { status: true, message: e.message },
			});
		}
	};
};
