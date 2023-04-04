import axios from "axios";

export const fetchAllLogos = () => {
	return async (dispatch) => {
		const resp = await axios.get("http://127.0.0.1:4000/api/animeLogo");
		const data = resp.data;
		return dispatch({ type: "FETCH ALL LOGOS", payload: data });
	};
};
