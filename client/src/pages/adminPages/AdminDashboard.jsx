import React from "react";
import AdminDashboardCard from "../../components/adminComponents/UI/AdminDashboardCard/AdminDashboardCard";
import { useDispatch, useSelector } from "react-redux";
import AdminTable from "../../components/adminComponents/UI/AdminTable/AdminTable";
import { useEffect } from "react";
import { fetchAllBrands } from "../../store/actions/BrandActions";
import { fetchAllDevices } from "../../store/actions/DevicesActions";
import { fetchAllTypes } from "../../store/actions/TypeActions";
import { fetchAllUsers } from "../../store/actions/UserActions";

const AdminDashboard = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAllBrands());
	}, []);

	useEffect(() => {
		dispatch(fetchAllDevices());
	}, []);

	useEffect(() => {
		dispatch(fetchAllTypes());
	}, []);

	useEffect(() => {
		dispatch(fetchAllUsers());
	}, []);

	const brandData = useSelector((store) => store.BrandReducer);
	const typeData = useSelector((store) => store.TypeReducer);
	const deviceData = useSelector((store) => store.DeviceReducer);
	const allUsers = useSelector((store) => store.UserReducer.allUsers);

	const cardsInfo = [
		{
			title: "TOTAL PRODUCTS",
			change: "",
			icon: (
				<span className="material-icons" style={{ fontSize: "60px" }}>
					shopping_cart
				</span>
			),
			cardValue: deviceData.allDevices.length,
			linkPath: "/admin/products",
		},
		{
			title: "TOTAL BRANDS",
			change: "",
			icon: (
				<span className="material-icons" style={{ fontSize: "60px" }}>
					local_offer
				</span>
			),
			cardValue: brandData.allBrands.length,
			linkPath: "/admin/brands",
		},
		{
			title: "TOTAL USERS",
			change: "",
			icon: (
				<span className="material-icons" style={{ fontSize: "60px" }}>
					person
				</span>
			),
			cardValue: allUsers.length,
			linkPath: "/admin/users",
		},
		{
			title: "ALL PRODUCT TYPES",
			change: "",
			icon: (
				<span className="material-icons" style={{ fontSize: "60px" }}>
					shopping_cart
				</span>
			),
			cardValue: typeData.allTypes.length,
			linkPath: "/admin/types",
		},
	];

	return (
		<>
			<div className="main-content-container">
				<section className="dashboard-stats">
					<section className="stats-cards">
						{cardsInfo.map((card, idx) => {
							return <AdminDashboardCard info={card} key={idx} />;
						})}
					</section>
					<section className="stats-lists">
						<AdminTable
							data={brandData.allBrands}
							heading={"All Brands"}
							error={brandData.loadingError}
							limit={20}
						/>
						<AdminTable
							data={typeData.allTypes}
							heading={"All Product Types"}
							error={typeData.loadingError}
							limit={20}
						/>
						<AdminTable
							data={deviceData.allDevices}
							heading={"All Products"}
							error={deviceData.loadingError}
							limit={20}
						/>
					</section>
				</section>
			</div>
		</>
	);
};

export default AdminDashboard;
