import React from "react";
import style from "./AddValueModal.module.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createType } from "../../../../store/actions/TypeActions";
import { createBrand } from "../../../../store/actions/BrandActions";
import { createDevice } from "../../../../store/actions/DevicesActions";
import { createUser } from "../../../../store/actions/UserActions";
import { modalWork } from "../../../../store/actions/ModalActions";

const AddValueModal = (props) => {
	const location = useLocation();
	let locationPage =
		location.pathname != "/admin"
			? location.pathname.split("/").slice(-1).join("")
			: "";
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [role, setRole] = useState("");
	const [price, setPrice] = useState();
	const [brandId, setBrandId] = useState("");
	const [typeId, setTypeId] = useState("");
	const [info, setInfo] = useState([]);
	const [productChar, setProductChar] = useState("");
	const [charValue, setCharValue] = useState("");
	const [img, setImg] = useState([]);
	const dispatch = useDispatch();

	const error = useSelector((store) => store.ModalReducer.postingError);
	const [submitError, setSubmitError] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const submitForm = (e) => {
		e.preventDefault();
		setSubmitted(true); //to actiate useEffect on every submit
	};

	const recursiveInput = (n = 0) => {
		if (img.length > n) {
			return (
				<>
					<input
						className={style.imgInput}
						type="file"
						onChange={(e) => setImg([...img, e.target.files[0]])}
					></input>
					{recursiveInput(n + 1)}
				</>
			);
		}
	};

	const [firstRender, setFirstRender] = useState(true);

	useEffect(() => {
		if (!firstRender) {
			setTimeout(() => {
				if (!error.status && submitted) {
					props.offswitch({});
				} else {
					setSubmitError(error.status);
					props.setter(true);
				}
			}, [400]);
		}
		setName("");
		setEmail("");
		setPassword("");
		setRole("");
		setPrice("");
		setBrandId("");
		setTypeId("");
		setInfo([]);
		setProductChar("");
		setCharValue("");
		setImg([]);
		setFirstRender(false);
	}, [error.status, submitted]);

	const addInfo = (e, value) => {
		e.preventDefault();
		const productChar = value;
		setInfo([...info, productChar]);
		setCharValue("");
		setProductChar("");
	};
	const deleteInfo = (e, value) => {
		e.preventDefault();
		const productChar = value;
		setInfo(
			info.filter((characteristic) => {
				if (characteristic != productChar) {
					return characteristic;
				}
			})
		);
	};

	function createModal(locationPage) {
		switch (locationPage) {
			case "types": {
				return (
					<form
						className={style.modalForm}
						onSubmit={(e) => submitForm(e)}
					>
						<h2>Add Product Type</h2>
						<input
							className={style.nameInput}
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="Type name"
							required
						></input>
						<button
							className={style.submit}
							onClick={() => dispatch(createType(name))}
						>
							Submit
						</button>
					</form>
				);
			}

			case "brands": {
				return (
					<form
						className={style.modalForm}
						onSubmit={(e) => submitForm(e, error)}
					>
						<h2>Add Brand</h2>
						<input
							className={style.nameInput}
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="Type name"
							required
						></input>
						<button
							className={style.submit}
							onClick={() => dispatch(createBrand(name))}
						>
							Submit
						</button>
					</form>
				);
			}
			case "users": {
				return (
					<form
						className={style.modalForm}
						onSubmit={(e) => submitForm(e)}
					>
						<h2>Add User</h2>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Type email"
							required
						></input>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Type password"
							required
						></input>
						<input
							type="text"
							value={role}
							onChange={(e) => setRole(e.target.value)}
							placeholder="Type role"
							required
						></input>
						<button
							className={style.submit}
							onClick={() =>
								dispatch(createUser(email, password, role))
							}
						>
							Submit
						</button>
					</form>
				);
			}
			case "products": {
				return (
					<form
						className={`${style.modalForm} ${style.product}`}
						onSubmit={(e) => submitForm(e)}
					>
						<h2>Add Product</h2>
						<input
							className={style.nameInput}
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="Name"
							required
						></input>
						<input
							className={style.priceInput}
							type="text"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							placeholder="Price"
							required
						></input>
						<input
							className={style.brandIdInput}
							type="text"
							value={brandId}
							onChange={(e) => setBrandId(e.target.value)}
							placeholder="Brand ID"
							required
						></input>
						<input
							className={style.typeIdInput}
							type="text"
							value={typeId}
							onChange={(e) => setTypeId(e.target.value)}
							placeholder="Type ID"
							required
						></input>
						<div className={style.addInfo}>
							<input
								type="text"
								placeholder="Value"
								value={charValue}
								onChange={(e) => setCharValue(e.target.value)}
							/>
							<button onClick={(e) => addInfo(e, charValue)}>
								Add
							</button>
						</div>
						<div className={style.characteristics}>
							{info.map((obj, idx) => (
								<div className={style.productChar} key={idx}>
									<p>{obj}</p>
									<button onClick={(e) => deleteInfo(e, obj)}>
										Delete
									</button>
								</div>
							))}
						</div>
						<div className={style.productImg}>
							<input
								className={style.imgInput}
								type="file"
								onChange={(e) =>
									setImg([...img, e.target.files[0]])
								}
								required
							></input>
							{recursiveInput()}
						</div>
						<div className={style.submitContainer}>
							<button
								className={style.submit}
								onClick={() =>
									dispatch(
										createDevice(
											name,
											+price,
											brandId,
											typeId,
											info,
											img
										)
									)
								}
							>
								Submit
							</button>
						</div>
					</form>
				);
			}
		}
	}

	return (
		<div className={props.active ? style.modalactive : style.modal}>
			<div
				className={style.backgroundDimmer}
				onClick={(e) => props.offswitch()}
			></div>
			<div className={style.modalContainer}>
				{submitError === true ? (
					<h4 className={style.error}>{error.message}</h4>
				) : (
					createModal(locationPage)
				)}
			</div>
		</div>
	);
};

export default AddValueModal;
