import React, { useEffect, useState } from "react";
import style from "./SideBarMenu.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBrands } from "../../../store/actions/BrandActions";
import { fetchAllTypes } from "../../../store/actions/TypeActions";

const SidebarMenu = (props) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAllBrands());
		dispatch(fetchAllTypes());
	}, []);

	const allBrands = useSelector((store) => store.BrandReducer.allBrands);
	const allTypes = useSelector((store) => store.TypeReducer.allTypes);

	function displayData(value) {
		if (value === "Shop By Series") {
			return allBrands.map((brand, idx) => {
				return (
					<NavLink
						className={style.pageLink}
						key={idx}
						to={`/collection/brand/${turnToLink(brand.name)}`}
					>
						{brand.name}
					</NavLink>
				);
			});
		} else {
			return allTypes.map((type, idx) => {
				return (
					<NavLink
						className={style.pageLink}
						key={idx}
						to={`/collection/type/${turnToLink(type.name)}`}
					>
						{type.name}
					</NavLink>
				);
			});
		}
	}
	const [fieldActive, setFieldActive] = useState(false);
	const [fieldValue, setFieldValue] = useState("");

	function turnToLink(typeBrand) {
		if (typeBrand != "T-shirts/Shirts") {
			return typeBrand.toLowerCase().split(" ").join("-");
		} else {
			return typeBrand.toLowerCase().split("/")[0];
		}
	}

	const activateField = (e) => {
		if (fieldActive) {
			setFieldActive(false);
			setFieldValue("");
		} else {
			setFieldActive(true);
			setFieldValue(e);
		}
	};
	return (
		<div>
			<nav className={style.menu}>
				<div className={style.sidebarExit}>
					<button onClick={() => props.deactivate()}>X</button>
				</div>
				<div className={style.itemContainer}>
					<NavLink
						className={style.menuItem}
						to="/collection/type/new"
					>
						New
					</NavLink>
				</div>
				<div className={style.itemContainer}>
					<NavLink to="/collection" className={style.menuItem}>
						Shop All
					</NavLink>
				</div>
				<div className={`${style.itemContainer} + ${style.shopSeries}`}>
					<button
						className={`${style.menuItem} + ${style.shopSeries}`}
						onClick={(e) => activateField(e.target.textContent)}
					>
						Shop By Series
					</button>
					<button>
						{fieldActive === true &&
						fieldValue === "Shop By Series" ? (
							<span className="material-symbols-outlined">
								remove
							</span>
						) : (
							<span className="material-symbols-outlined">
								add
							</span>
						)}
					</button>
				</div>
				{fieldActive === true && fieldValue === "Shop By Series" ? (
					displayData(fieldValue)
				) : (
					<></>
				)}
				<div className={style.itemContainer}>
					<button
						className={style.menuItem}
						data-value="Apparel"
						onClick={(e) => activateField(e.target.textContent)}
					>
						Apparel
					</button>
					<button
						onClick={(e) => activateField(e.target.textContent)}
					>
						{fieldActive === true && fieldValue === "Apparel" ? (
							<span className="material-symbols-outlined">
								remove
							</span>
						) : (
							<span className="material-symbols-outlined">
								add
							</span>
						)}
					</button>
				</div>
				{fieldActive === true && fieldValue === "Apparel" ? (
					displayData(fieldValue)
				) : (
					<></>
				)}
				<div className={style.itemContainer}>
					<NavLink
						to="/collection/type/accessories"
						className={style.menuItem}
						data-value="Accessories"
					>
						Accessories
					</NavLink>
				</div>
			</nav>
		</div>
	);
};

export default SidebarMenu;
