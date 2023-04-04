import React, { useEffect, useState } from "react";
import style from "./SearchBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import SearchResult from "../SearchResult";
import { fetchAllDevices } from "../../../store/actions/DevicesActions";
import { deActivateSearch } from "../../../store/actions/ModalActions";
import { useParams } from "react-router-dom";

const SearchBar = (props) => {
	const allProducts = useSelector((store) => store.DeviceReducer.allDevices);

	const params = useParams();

	useEffect(() => {
		if (props.active) {
			props.deactivateSearch();
		}
	}, [params]);

	const classes = props.active
		? `${style.searchBarContainer}` + ` ${style.active}`
		: `${style.searchBarContainer}`;

	const searching = (input) => {
		if (allProducts.length > 1 && input.length > 0) {
			const searchedItems = [...allProducts].filter((product) => {
				if (product.name.includes(input.toUpperCase())) {
					return product;
				}
			});
			return searchedItems.map((product, idx) => {
				return <SearchResult product={product} key={idx} />;
			});
		}
	};

	return (
		<div className={classes}>
			<div className={style.searchBar}>
				<span className={`material-icons` + ` ${style.materialIcons}`}>
					search
				</span>
				<input
					type="text"
					placeholder="Search..."
					className={style.search}
					value={props.searchValue}
					onChange={(e) => props.setSearchValue(e.target.value)}
				/>
				<button
					className={style.close}
					onClick={() => props.deactivateSearch()}
				>
					<span
						className={`material-icons` + ` ${style.materialIcons}`}
					>
						close
					</span>
				</button>
			</div>
			{props.active === true && props.searchValue.length > 0 ? (
				<div className={style.searchResultsContainer}>
					{searching(props.searchValue)}
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default SearchBar;
