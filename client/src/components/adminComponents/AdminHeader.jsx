import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import logouticon from "../../img/admin/logout-icon.png";
import bellicon from "../..//img/admin/notifications-icon.png";
import profileimg from "../../img/admin/profile-img.png";
import { logoutUser } from "../../store/actions/UserActions";

const AdminHeader = (props) => {
	const dispatch = useDispatch();
	const activateNotif = () => {
		props.activeNotifications
			? props.notifSetter(false)
			: props.notifSetter(true);
	};
	const activateProfile = () => {
		props.activeProfile
			? props.profileSetter(false)
			: props.profileSetter(true);
	};

	const notifClasses = props.activeNotifications
		? "admin-notifications-window active"
		: "admin-notifications-window";
	const profileClasses = props.activeProfile
		? "admin-profile-window active"
		: "admin-profile-window";

	return (
		<header className="admin-header">
			<h2 className="admin-header-heading">Admin panel</h2>
			<button
				className="mobile-menu"
				onClick={() => props.activateMenu()}
			>
				<span className="material-icons">menu</span>
			</button>
			<div className="admin-buttons">
				<button
					className="admin-notifications-button"
					onClick={() => activateNotif()}
				>
					<img src={bellicon} alt="" />
					<div className={notifClasses}>
						There are no notifications
					</div>
				</button>

				<button
					className="admin-profile"
					onClick={() => activateProfile()}
				>
					<img src={profileimg} />
					<p>Admin name</p>
					<div className={profileClasses}>
						<ul>
							<li className="profile-list-item">
								Dummy Profile Settings
							</li>
							<li className="profile-list-item">
								Dummy Profile Settings
							</li>
							<li className="profile-list-item">
								Dummy Profile Settings
							</li>
							<li className="profile-list-item">
								Dummy Profile Settings
							</li>
						</ul>
					</div>
				</button>
				<NavLink
					to="/adminlogin"
					className="admin-logout"
					onClick={() => dispatch(logoutUser())}
				>
					<img src={logouticon}></img>
					Logout
				</NavLink>
			</div>
		</header>
	);
};

export default AdminHeader;
