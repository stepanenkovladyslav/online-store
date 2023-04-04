import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminTable from "../../../components/adminComponents/UI/AdminTable/AdminTable";
import { useFormatting } from "../../../hooks/useFormatting";
import { fetchAllBrands } from "../../../store/actions/BrandActions";
import { fetchAllDevices } from "../../../store/actions/DevicesActions";
import { fetchAllTypes } from "../../../store/actions/TypeActions";
import style from "./AdminProductsPage.module.css";

const AdminProducts = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAllDevices(2000, 1));
	}, []);
	useEffect(() => {
		dispatch(fetchAllBrands());
	}, []);
	useEffect(() => {
		dispatch(fetchAllTypes());
	}, []);
	const deviceData = useSelector((store) => store.DeviceReducer);
	const allBrands = useSelector((store) => store.BrandReducer.allBrands);
	const allTypes = useSelector((store) => store.TypeReducer.allTypes);

	return (
		<div className={style.tableContainer}>
			<AdminTable
				data={deviceData.allDevices}
				heading={"All Products"}
				error={deviceData.loadingError}
				limit={2000}
			/>
		</div>
	);
};

export default AdminProducts;
