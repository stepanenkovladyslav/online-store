const defaultBrands = {
	allBrands: [{}],
	oneBrand: {},
	loadingError: { status: false, message: "" },
};

export default (state = defaultBrands, action) => {
	switch (action.type) {
		case "FETCHALLBRANDS": {
			return { ...state, allBrands: action.payload };
		}
		case "FETCHONEBRAND": {
			return { ...state, oneBrand: action.payload };
		}
		case "CREATEBRAND": {
			return {
				...state,
				allBrands: [...state.allBrands, action.payload],
			};
		}
		case "BRAND LOADING ERROR": {
			return { ...state, loadingError: action.payload };
		}
		case "BRAND POSTING ERROR": {
			return { ...state, postingError: action.payload };
		}
		default: {
			return state;
		}
	}
};
