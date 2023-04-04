import axios from "axios";

// Отлавливать и обрабатывать ошибки.

export const createDevice = (name, price, brandId, typeId, info, photos) => {
	return async (dispatch) => {
		const formData = new FormData();
		formData.append(`name`, name);
		formData.append("price", price);
		formData.append("brandId", brandId);
		formData.append("typeId", typeId);
		formData.append("info", JSON.stringify(info));
		photos.forEach((pictures) => formData.append("pictures", pictures));

		try {
			const resp = await axios.post(
				"http://127.0.0.1:4000/api/device/",
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);
			return dispatch(fetchAllDevices(2000, 1));
		} catch (e) {
			return dispatch({
				type: "POSTINGERROR",
				payload: { status: true, message: e.message },
			});
		}
	};
};

export const fetchAllDevices = (limit, page, brandId = null, typeId = null) => {
	return async (dispatch) => {
		try {
			const resp = await axios.get(`http://127.0.0.1:4000/api/device`, {
				params: {
					limit: limit,
					page: page,
					brandId: brandId,
					typeId: typeId,
				},
			});
			const data = resp.data;
			return dispatch({ type: "FETCHALLDEVICES", payload: data });
		} catch (e) {
			return dispatch({
				type: "DEVICE LOADING ERROR",
				payload: { status: true, message: e.message },
			});
		}
	};
};

export const fetchOneDevice = (id) => {
	return async (dispatch) => {
		try {
			const resp = await axios.get(
				`http://127.0.0.1:4000/api/device/${id}`
			);
			const data = resp.data;
			return dispatch({ type: "FETCHONEDEVICE", payload: data });
		} catch (e) {
			return dispatch({
				type: "DEVICE LOADING ERROR",
				payload: { status: true, message: e.message },
			});
		}
	};
};

export const changeDeviceName = (name, newName) => {
	return async (dispatch) => {
		try {
			const resp = await axios.put(`http://127.0.0.1:4000/api/devic`, {
				name: name,
				newName: newName,
			});
			return dispatch(fetchAllDevices(2000, 1));
		} catch (e) {
			return dispatch({
				type: "POSTINGERROR",
				payload: { status: true, message: e.message },
			});
		}
	};
};

export const changeDevicePrice = (id, price, newPrice) => {
	return async (dispatch) => {
		try {
			const resp = await axios.put(
				`http://127.0.0.1:4000/api/device/changePrice`,
				{
					id: id,
					price: price,
					newPrice: newPrice,
				}
			);
			dispatch(fetchAllDevices(2000, 1));
		} catch (e) {
			return dispatch({
				type: "POSTINGERROR",
				payload: { status: true, message: e.message },
			});
		}
	};
};

export const changeDeviceRating = (id, newRating) => {
	return async (dispatch) => {
		try {
			const resp = await axios.put(
				`http://127.0.0.1:4000/api/device/changeRating`,
				{
					id: id,
					newRating: newRating,
				}
			);
			dispatch(fetchAllDevices(2000, 1));
		} catch (e) {
			return dispatch({
				type: "POSTINGERROR",
				payload: { status: true, message: e.message },
			});
		}
	};
};
