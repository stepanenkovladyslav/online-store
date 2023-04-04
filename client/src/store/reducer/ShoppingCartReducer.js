const defaultState = {
	shoppingCart: [],
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case "FETCHCART": {
			return { ...state, shoppingCart: action.payload };
		}
		case "ADDPRODUCTTOCART": {
			return { ...state, shoppingCart: action.payload };
		}
		case "DELETEPRODUCTFROMCART": {
			return { ...state, shoppingCart: action.payload };
		}
		default: {
			return state;
		}
	}
};
