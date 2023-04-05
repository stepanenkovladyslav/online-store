import React from "react";
import { NavLink } from "react-router-dom";

const UserDesktopMenu = (props) => {
	return (
		<nav className="menu">
			<div className="sidebarExit">
				<button>X</button>
			</div>
			<NavLink
				className="menu__item"
				to="/collection/type/new"
				onMouseOver={(e) => props.deActivateHoverMenu()}
			>
				New
			</NavLink>
			<NavLink
				to="/collection"
				className="menu__item"
				onMouseOver={(e) => props.deActivateHoverMenu()}
			>
				Shop All
			</NavLink>
			<NavLink
				to="/collection"
				className="menu__item"
				data-value="Shop By Series"
				onMouseOver={(e) => props.activateHoverMenu(e)}
				onTouchEnd={(e) => props.touchActivateHoverMenu(e)}
			>
				Shop By Series
			</NavLink>
			<NavLink
				onMouseOver={(e) => props.activateHoverMenu(e)}
				onTouchEnd={(e) => props.touchActivateHoverMenu(e)}
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
				onMouseOver={(e) => props.deActivateHoverMenu()}
			>
				Accessories
			</NavLink>
		</nav>
	);
};

export default UserDesktopMenu;
