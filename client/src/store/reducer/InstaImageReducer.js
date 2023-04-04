const defaultImgState = {
	allImg: [],
};

export default (state = defaultImgState, action) => {
	switch (action.type) {
		case "FETCH INSTA IMG": {
			return { ...state, allImg: action.payload };
		}
		default: {
			return state;
		}
	}
};
