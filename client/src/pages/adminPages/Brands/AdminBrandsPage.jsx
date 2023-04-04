import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddValueModal from "../../../components/adminComponents/UI/AddValueModal/AddValueModal";
import AdminTable from "../../../components/adminComponents/UI/AdminTable/AdminTable";
import { useFormatting } from "../../../hooks/useFormatting";
import { fetchAllBrands } from "../../../store/actions/BrandActions";
import style from "./AdminBrandsPage.module.css";

const AdminBrands = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAllBrands());
	}, []);
	const brandData = useSelector((store) => store.BrandReducer);
	const brands = useFormatting(brandData.allBrands);

	return (
		<div className={style.tableContainer}>
			<AdminTable
				data={brands}
				heading={"All Brands"}
				error={brandData.loadingError}
				limit={Infinity}
			/>
		</div>
	);
};

export default AdminBrands;
