const defaultDevice = {
	allDevices: [{}],
	oneDevice: [{}],
	loadingError: { status: false, message: "" },
};

export default (state = defaultDevice, action) => {
	switch (action.type) {
		case "FETCHALLDEVICES": {
			return {
				...state,
				allDevices: action.payload.rows,
			};
		}
		case "FETCHONEDEVICE": {
			return { ...state, oneDevice: action.payload };
		}
		case "CREATEDEVICE": {
			return {
				...state,
				allDevices: [...state.allDevices, action.payload],
			};
		}
		case "DEVICE LOADING ERROR": {
			return { ...state, loadingError: action.payload };
		}
		case "DEVICE POSTING ERROR": {
			return { ...state, postingError: action.payload };
		}
		default: {
			return state;
		}
	}
};
