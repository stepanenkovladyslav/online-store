import React, { useEffect } from "react";
import "../../../src/App.css";
import { Outlet, useLocation, useParams } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminNavigation from "./AdminNavigation";
import PageName from "./PageName";
import { useState } from "react";
import { useSelector } from "react-redux";

const AdminLayout = () => {
	const [activeProfile, setActiveProfile] = useState(false);

	// const disableProfileMenu = (e) => {
	// 	if (e.target.tagName !== "BUTTON" && activeProfile === true) {
	// 		setActiveProfile(false);
	// 	}
	// };

	const [activeNotifications, setActiveNotifications] = useState(false);

	const disableDropdowns = (e) => {
		if (
			(e.target.tagName !== "BUTTON" && activeNotifications === true) ||
			(e.target.tagName !== "IMG" && activeNotifications === true)
		) {
			setActiveNotifications(false);
		} else if (e.target.tagName !== "BUTTON" && activeProfile === true) {
			setActiveProfile(false);
		}
	};

	const [menuActive, setMenuActive] = useState(false);
	const params = useParams();

	const activateMenu = () => {
		menuActive ? setMenuActive(false) : setMenuActive(true);
	};

	useEffect(() => {
		setMenuActive(false);
	}, [params]);

	const activeModal = useSelector((store) => store.ModalReducer.isActive);

	useEffect(() => {
		activeModal === true
			? (document.querySelector("body").style.overflow = "hidden")
			: (document.querySelector("body").style.overflow = "auto");
	}, [activeModal]);

	return (
		<div className="wrapper" onClick={(e) => disableDropdowns(e)}>
			<AdminHeader
				activeNotifications={activeNotifications}
				notifSetter={setActiveNotifications}
				activeProfile={activeProfile}
				profileSetter={setActiveProfile}
				activateMenu={activateMenu}
			/>
			<div className="side-divider">
				<AdminNavigation menuActive={menuActive} />
				<div className="main-content-container">
					<main className="main-content">
						<PageName />
						<Outlet />
					</main>
					<footer className="disclaimer">
						<h3 className="disclaimer-title">
							Design borrowed from OpenCart
						</h3>
						<p className="disclaimer-paragraph">
							Refer to the original design on{" "}
							<a
								href="https://demo.opencart.com/admin/"
								target="_blank"
							>
								OpenCart Demo
							</a>
						</p>
					</footer>
				</div>
			</div>
		</div>
	);
};

<>Header Main Footer</>;

export default AdminLayout;
