import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
	activateSearch,
	deActivateSearch,
} from "../../store/actions/ModalActions";
import HoverMenu from "./HoverMenu/HoverMenu";
import SideBarMenu from "./SideBarMenu/SideBarMenu";
import UserDesktopMenu from "./UserDesktopMenu";
import UserHeaderIcons from "./UserHeaderIcons";

const UserHeader = (props) => {
	const [loggedIn, setLoggedIn] = useState(false);
	const isAuth = useSelector((store) => store.UserReducer.isAuth);
	const [hoverMenuActive, setHoverMenuActive] = useState(false);
	const [category, setCategory] = useState();
	const params = useParams();

	useEffect(() => {
		setHoverMenuActive(false);
		setSideBarActive(false);
	}, [params]);
	const activateHoverMenu = (e) => {
		setHoverMenuActive(true);
		setCategory(e.target.getAttribute("data-value"));
	};
	const touchActivateHoverMenu = (e) => {
		e.preventDefault();
		setHoverMenuActive(true);
		setCategory(e.target.getAttribute("data-value"));
	};

	const deActivateHoverMenu = () => {
		setHoverMenuActive(false);
	};
	useEffect(() => {
		isAuth ? setLoggedIn(true) : setLoggedIn(false);
	}, [isAuth]);

	const [sideBarActive, setSideBarActive] = useState(false);
	const [mobileVersion, setMobileVersion] = useState(false);

	const openSideBar = () => {
		sideBarActive ? setSideBarActive(false) : setSideBarActive(true);
	};

	useEffect(() => {
		if (window.matchMedia("(max-width: 1200px)").matches) {
			setMobileVersion(true);
		}
	}, [window]);

	return (
		<header className="header">
			<div className="header-container">
				<div className="header__rightside">
					<div className="header__titleblock">
						{mobileVersion ? (
							<button
								className="mobileIcon"
								onClick={() => openSideBar()}
							>
								<span className="material-icons">menu</span>
							</button>
						) : (
							<NavLink to="/">
								<h2 className="header__heading">atsuko</h2>
							</NavLink>
						)}
					</div>

					{sideBarActive ? (
						<div className="sideBar">
							<SideBarMenu deactivate={openSideBar} />
						</div>
					) : (
						<UserDesktopMenu
							activateHoverMenu={activateHoverMenu}
							deActivateHoverMenu={deActivateHoverMenu}
							touchActivateHoverMenu={touchActivateHoverMenu}
						/>
					)}

					{hoverMenuActive ? (
						<HoverMenu
							deactivate={deActivateHoverMenu}
							activate={activateHoverMenu}
							category={category}
						/>
					) : (
						<></>
					)}
				</div>
				<UserHeaderIcons
					activateSearch={props.activateSearch}
					activateCart={props.activateCart}
					loggedIn={loggedIn}
				/>
			</div>
		</header>
	);
};

export default UserHeader;
