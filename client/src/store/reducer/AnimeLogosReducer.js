const defaultState = {
	allLogos: [],
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case "FETCH ALL LOGOS": {
			return { ...state, allLogos: action.payload };
		}
		default: {
			return state;
		}
	}
};
