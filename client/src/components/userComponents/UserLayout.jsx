import React from "react";
import "../../userApp.css";
import { Outlet, useParams } from "react-router-dom";
import UserHeader from "./UserHeader";
import UserFooter from "./UserFooter";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "./SearchBar/SearchBar";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import { fetchAllBrands } from "../../store/actions/BrandActions";
import { fetchAllDevices } from "../../store/actions/DevicesActions";
import { fetchAllTypes } from "../../store/actions/TypeActions";

const UserLayout = () => {
	const [activeSearch, setActiveSearch] = useState(false);
	const [activeCart, setActiveCart] = useState(false);
	const dispatch = useDispatch();
	const params = useParams();

	useEffect(() => {
		document.querySelector("body").scrollTo({ top: 0, behavior: "smooth" });
	}, [params]);

	useEffect(() => {
		setActiveCart(false);
		setActiveSearch(false);
	}, [params]);

	const [searchValue, setSearchValue] = useState("");

	const searchForValue = (input) => {
		setSearchValue(input);
	};

	const activateCart = () => {
		if (activeCart === true) {
			setActiveCart(false);
		} else {
			setActiveCart(true);
		}
	};

	const activateSearch = () => {
		if (activeSearch === true) {
			setActiveSearch(false);
			setSearchValue("");
		} else {
			setActiveSearch(true);
		}
	};
	return (
		<div className="user-wrapper">
			<UserHeader
				activateSearch={activateSearch}
				activateCart={activateCart}
			/>
			<SearchBar
				active={activeSearch}
				deactivateSearch={activateSearch}
				searchValue={searchValue}
				setSearchValue={searchForValue}
			/>
			<ShoppingCart active={activeCart} deactivateCart={activateCart} />
			<Outlet />
			<UserFooter />
		</div>
	);
};

export default UserLayout;
