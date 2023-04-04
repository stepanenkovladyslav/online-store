import axios from "axios";

export const fetchAllCategoryImg = () => {
	return async (dispatch) => {
		const resp = await axios.get(
			"http://127.0.0.1:4000/api/categoriesGrid/"
		);
		const data = resp.data;
		return dispatch({ type: "GETCATEGORIESIMG", payload: data });
	};
};
