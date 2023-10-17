import React from "react";
import { NavLink } from "react-router-dom";

const AdminNavigation = (props) => {
	const visibleMenuClasses = props.menuActive
		? "navigation-panel active"
		: "navigation-panel";
	return (
		<aside className={visibleMenuClasses}>
			<nav className="admin-navigation">
				<NavLink className="admin-navigation-link" to="/admin">
					<span className="material-icons">home</span>Dashboard
				</NavLink>
				<NavLink className="admin-navigation-link" to="/admin/products">
					<span className="material-icons">attach_money</span>Products
				</NavLink>
				<NavLink className="admin-navigation-link" to="/admin/users">
					<span className="material-icons">person</span>Users
				</NavLink>
				<NavLink className="admin-navigation-link" to="/admin/brands">
					<span className="material-icons">local_offer</span>Brands
				</NavLink>
				<NavLink className="admin-navigation-link" to="/admin/types">
					<span className="material-icons">list</span>Product types
				</NavLink>
			</nav>
		</aside>
	);
};

export default AdminNavigation;
