import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchAllBrands } from "../../../store/actions/BrandActions";
import { deActivateModal } from "../../../store/actions/ModalActions";
import { fetchAllTypes } from "../../../store/actions/TypeActions";
import style from "./HoverMenu.module.css";

const HoverMenu = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllBrands());
		dispatch(fetchAllTypes());
	}, []);
	const allBrands = useSelector((store) => store.BrandReducer.allBrands);
	const allTypes = useSelector((store) => store.TypeReducer.allTypes);

	const apparel = {
		types: allTypes.filter((type) => type.name !== "Accessories"),
		brands: allBrands,
	};

	function changeNameForLink(name) {
		if (name !== "T-shirts/Shirts") {
			return name.toLowerCase().split(" ").join("-");
		} else {
			return name.toLowerCase().split("/")[0];
		}
	}

	function returnData() {
		if (props.category === "Shop By Series") {
			return (
				<>
					<div className={style.columnSection}>
						<NavLink to="/collection" className={style.columnTitle}>
							-
						</NavLink>
						<ul className={style.column}>
							{allBrands.map((brand, idx, arr) =>
								idx < arr.length / 2 ? (
									<li key={idx}>
										<NavLink
											to={`collection/brand/${changeNameForLink(
												brand.name
											)}`}
										>
											{brand.name}
										</NavLink>
									</li>
								) : (
									<></>
								)
							)}
						</ul>
					</div>
					<div className={style.columnSection}>
						<NavLink to="/collection" className={style.columnTitle}>
							-
						</NavLink>
						<ul className={style.column}>
							{allBrands.map((brand, idx, arr) =>
								idx > arr.length / 2 ? (
									<li key={idx}>
										<NavLink
											to={`collection/brand/${changeNameForLink(
												brand.name
											)}`}
										>
											{brand.name}
										</NavLink>
									</li>
								) : (
									<></>
								)
							)}
						</ul>
					</div>
				</>
			);
		} else if (props.category === "Apparel") {
			return (
				<>
					<div className={style.columnSection}>
						<NavLink to="/collection" className={style.columnTitle}>
							Shop All
						</NavLink>
						<ul className={style.column}>
							{apparel.types.map((type, idx) => {
								return (
									<li key={idx}>
										<NavLink
											to={`/collection/type/${changeNameForLink(
												type.name
											)}`}
										>
											{type.name}
										</NavLink>
									</li>
								);
							})}
						</ul>
					</div>
					<div className={style.columnSection}>
						<NavLink to="/collection" className={style.columnTitle}>
							Featured Collections
						</NavLink>
						<ul className={style.column}>
							{apparel.brands.map((brand, idx) => {
								return (
									<li key={idx}>
										<NavLink
											to={`/collection/brand/${changeNameForLink(
												brand.name
											)}`}
										>
											{brand.name}
										</NavLink>
									</li>
								);
							})}
						</ul>
					</div>
				</>
			);
		}
	}
	return allTypes.length > 1 && allBrands.length > 1 ? (
		<div
			className={style.hoverMenuContainer}
			onMouseLeave={(e) => props.deactivate()}
		>
			<div className={style.hoverMenu}>{returnData()}</div>
		</div>
	) : (
		<></>
	);
};

export default HoverMenu;
