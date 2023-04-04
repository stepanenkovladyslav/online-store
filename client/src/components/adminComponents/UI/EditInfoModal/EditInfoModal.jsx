import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	changeDeviceName,
	fetchOneDevice,
} from "../../../../store/actions/DevicesActions";
import {
	changeUserEmail,
	changeUserRole,
} from "../../../../store/actions/UserActions";
import {
	changeDevicePrice,
	changeDeviceRating,
} from "../../../../store/actions/DevicesActions";
import style from "./EditInfoModal.module.css";
import { changeBrandName } from "../../../../store/actions/BrandActions";
import { changeTypeName } from "../../../../store/actions/TypeActions";
import { useFormatting } from "../../../../hooks/useFormatting";

const EditInfoModal = (props) => {
	const findImage = (data, allData) => {
		if (allData[0].img && props.data.createdAt) {
			return allData.find((value) => {
				return value.id == data.id;
			}).img;
		}
	};

	const dispatch = useDispatch();

	const [values, displayData] = useMemo(() => {
		const displayData = props.allData[0].img
			? { ...props.data, img: findImage(props.data, props.allData) }
			: props.data;
		const values = {};
		for (const [key, value] of Object.entries(displayData)) {
			values[key] = value;
		}
		return [values, displayData];
	}, [props.allData, props.data]);

	const [changingData, setChangingData] = useState(values);
	const makeChanges = (key, input) => {
		setChangingData({ ...changingData, [key]: input });
	};

	const [activeField, setActiveField] = useState(false);
	const activateField = (e) => {
		setActiveField(true);
	};

	const fieldClasses = activeField ? style.dataValueactive : style.dataValue;

	const editLayout = (data) => {
		return Object.entries(data).map((key, idx) => {
			if (
				key[0] === "createdAt" ||
				key[0] === "updatedAt" ||
				key[0] === "id" ||
				key[0] === "img" ||
				key[0] === "type" ||
				key[0] === "brand"
			) {
				return (
					<div key={idx} className={style.infoContainer}>
						<h4 className={style.dataHeading}>{key[0]}:</h4>
						<input
							className={fieldClasses}
							value={key[1]}
							onChange={(e) =>
								makeChanges(key[0], e.target.value)
							}
							disabled
						></input>
					</div>
				);
			} else {
				return (
					<div key={idx} className={style.infoContainer}>
						<h4 className={style.dataHeading}>{key[0]}:</h4>
						<input
							className={fieldClasses}
							value={key[1]}
							onChange={(e) =>
								makeChanges(key[0], e.target.value)
							}
						></input>
					</div>
				);
			}
		});
	};
	const error = useSelector((store) => store.ModalReducer.postingError);
	const [submitError, setSubmitError] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const submitForm = (e) => {
		e.preventDefault();
		sendData(props.location, changingData);
		setSubmitted(true);
	};

	const [firstRender, setFirstRender] = useState(true);

	useEffect(() => {
		if (!firstRender) {
			setTimeout(() => {
				if (!error.status && submitted) {
					props.offswitch({});
				} else {
					props.setter(true);
					props.offswitch({});
				}
			}, [400]);
		}
		setFirstRender(false);
	}, [error.status, submitted]);

	const sendData = (location, changingData) => {
		switch (location.pathname) {
			case "/admin/products": {
				if (props.data.name != changingData.name) {
					dispatch(
						changeDeviceName(props.data.name, changingData.name)
					);
				}
				if (props.data.price != changingData.price) {
					dispatch(
						changeDevicePrice(
							changingData.id,
							props.data.price,
							changingData.price
						)
					);
				}
				if (props.data.rating !== changingData.rating) {
					dispatch(
						changeDeviceRating(changingData.id, changingData.rating)
					);
				}
				break;
			}
			case "/admin/types": {
				dispatch(changeTypeName(props.data.name, changingData.name));
				break;
			}
			case "/admin/users": {
				if (props.data.email != changingData.email) {
					dispatch(
						changeUserEmail(props.data.email, changingData.email)
					);
				}
				if (props.data.role != changingData.role) {
					dispatch(
						changeUserRole(props.data.email, changingData.role)
					);
				}
				break;
			}
			case "/admin/brands": {
				dispatch(changeBrandName(props.data.name, changingData.name));
				break;
			}
			case "/admin": {
				return alert(
					"You cannot edit information here. Please go to the separate categorie page and edit it there."
				);
			}
		}
	};

	return (
		<>
			{props.active === true ? (
				<div className={style.modalactive}>
					<div
						className={style.backgroundDimmer}
						onClick={(e) => props.offswitch({})}
					></div>
					<div className={style.modalContainer}>
						{/* {submitError === true ? (
							<h4 className={style.error}>{error.message}</h4>
						) : ( */}
						<form
							className={style.modalForm}
							key={displayData.length}
							onSubmit={(e) => submitForm(e)}
						>
							{displayData.img ? (
								<img
									src={`http://localhost:4000/${displayData.img}`}
								></img>
							) : (
								<></>
							)}
							<div className={style.formData}>
								{editLayout(changingData)}
								<div className={style.submitContainer}>
									<button
										type="button"
										onClick={(e) => activateField(e)}
									>
										Edit
									</button>
									<button>Submit</button>
								</div>
							</div>
						</form>
						{/* )} */}
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export default EditInfoModal;
