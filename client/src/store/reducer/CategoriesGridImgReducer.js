const defaultValue = {
	allImages: [],
};

export default (state = defaultValue, action) => {
	switch (action.type) {
		case "GETCATEGORIESIMG": {
			return { ...state, allImages: action.payload };
		}
		default: {
			return state;
		}
	}
};
