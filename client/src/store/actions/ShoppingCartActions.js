export const addProductToCart = (product, size) => {
	return (dispatch) => {
		const currentCart = JSON.parse(localStorage.getItem("cart"));
		currentCart
			? localStorage.setItem(
					"cart",
					JSON.stringify([...currentCart, product])
			  )
			: localStorage.setItem("cart", JSON.stringify([product]));
		return dispatch({
			type: "ADDPRODUCTTOCART",
			payload: JSON.parse(localStorage.getItem("cart")),
		});
	};
};

export const deleteProductFromCart = (product) => {
	return (dispatch) => {
		const currentCart = JSON.parse(localStorage.getItem("cart"));
		const newCart = currentCart.filter((device) => device.id != product.id);
		localStorage.setItem("cart", JSON.stringify(newCart));
		return dispatch({
			type: "DELETEPRODUCTFROMCART",
			payload: JSON.parse(localStorage.getItem("cart")),
		});
	};
};
