import axios from "axios";
export const fetchAllInstaImages = () => {
	return async (dispatch) => {
		const resp = await axios.get("http://127.0.0.1:4000/api/instImg");
		const data = resp.data;
		return dispatch({ type: "FETCH INSTA IMG", payload: data });
	};
};
