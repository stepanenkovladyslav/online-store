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
								<h1 className="header__heading">ukiyoe</h1>
							</NavLink>
						)}
					</div>

					{sideBarActive ? (
						<div className="sideBar">
							<SideBarMenu deactivate={openSideBar} />
						</div>
					) : (
						<nav className="menu">
							<div className="sidebarExit">
								<button>X</button>
							</div>
							<NavLink
								className="menu__item"
								to="/collection/type/new"
								onMouseOver={(e) => deActivateHoverMenu()}
							>
								New
							</NavLink>
							<NavLink
								to="/collection"
								className="menu__item"
								onMouseOver={(e) => deActivateHoverMenu()}
							>
								Shop All
							</NavLink>
							<NavLink
								to="/collection"
								className="menu__item"
								data-value="Shop By Series"
								onMouseOver={(e) => activateHoverMenu(e)}
								onTouchEnd={(e) => touchActivateHoverMenu(e)}
							>
								Shop By Series
							</NavLink>
							<NavLink
								onMouseOver={(e) => activateHoverMenu(e)}
								onTouchEnd={(e) => touchActivateHoverMenu(e)}
								to="/collection/type/hoodies-and-fleece"
								className="menu__item"
								data-value="Apparel"
							>
								Apparel
							</NavLink>
							<NavLink
								to="/collection/type/accessories"
								className="menu__item"
								data-value="Accessories"
								onMouseOver={(e) => deActivateHoverMenu()}
							>
								Accessories
							</NavLink>
						</nav>
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
				<div className="icons">
					{loggedIn ? (
						<NavLink to="/portal" className="icons__item">
							<span className="material-icons menu-icon">
								account_circle
							</span>
						</NavLink>
					) : (
						<NavLink to="/login" className="icons__item">
							<span className="material-icons menu-icon">
								account_circle
							</span>
						</NavLink>
					)}
					<button
						href=""
						className="icons__item"
						onClick={() => props.activateSearch()}
					>
						<span className="material-icons menu-icon">search</span>
					</button>
					<button
						className="icons__item"
						onClick={() => props.activateCart()}
					>
						<span className="material-icons menu-icon">
							shopping_bag
						</span>
					</button>
				</div>
			</div>
		</header>
	);
};

export default UserHeader;
