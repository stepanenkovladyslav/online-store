import React from "react";
import { useLocation } from "react-router-dom";

const PageHeader = () => {
	const location = useLocation();
	let locationPage =
		location.pathname != "/admin"
			? location.pathname.split("/").slice(-1).join("")
			: "Dashboard";
	locationPage = locationPage.charAt(0).toUpperCase() + locationPage.slice(1);
	return (
		<section className="page-info">
			<h1 className="page-heading">{locationPage}</h1>
			<hr className="break-line"></hr>
		</section>
	);
};

export default PageHeader;
