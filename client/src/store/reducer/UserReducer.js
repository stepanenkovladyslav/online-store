const defaultUsers = {
	allUsers: [{}],
	isAuth: false,
	user: {},
	loadingError: { status: false, message: "" },
	postingError: { status: false, message: "" },
};

export default (state = defaultUsers, action) => {
	switch (action.type) {
		case "FETCHALLUSERS": {
			return { ...state, allUsers: action.payload };
		}
		case "USER LOADING ERROR": {
			return { ...state, loadingError: action.payload };
		}
		case "USER POSTING ERROR": {
			return { ...state, postingError: action.payload };
		}
		case "REGISTER":
		case "LOGIN":
		case "REFRESHTOKEN": {
			if (action.payload.isAuth) {
				return { ...state, isAuth: true, user: action.payload.user };
			}
			return { ...state, isAuth: false, user: {} };
		}
		case "LOGOUT": {
			return { ...state, ...action.payload };
		}
		default: {
			return state;
		}
	}
};
