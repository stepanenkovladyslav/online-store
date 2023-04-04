const defaultModal = {
	isActive: false,
	postingError: { status: false, message: "" },
};

export default (state = defaultModal, action) => {
	switch (action.type) {
		case "ACTIVATEMODAL": {
			return { ...state, addModalIsActive: action.payload };
		}
		case "DEACTIVATEMODAL": {
			return {
				...state,
				isActive: action.payload,
			};
		}
		case "POSTINGERROR": {
			return { ...state, postingError: action.payload };
		}
		default: {
			return state;
		}
	}
};
