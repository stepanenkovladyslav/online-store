const defaultType = {
	allTypes: [{}],
	oneType: {},
	loadingError: { status: false, message: "" },
};

export default (state = defaultType, action) => {
	switch (action.type) {
		case "FETCHALLTYPES": {
			return { ...state, allTypes: action.payload };
		}
		case "FETCHONETYPE": {
			return { ...state, oneType: action.payload };
		}
		case "CREATETYPE": {
			return { ...state, allTypes: [...state.allTypes, action.payload] };
		}
		case "TYPE LOADING ERROR": {
			return {
				...state,
				loadingError: action.payload,
			};
		}
		case "POSTING TYPE ERROR": {
			return { ...state, postingError: action.payload };
		}
		default: {
			return state;
		}
	}
};
