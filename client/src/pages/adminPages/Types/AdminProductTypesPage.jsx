import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminTable from "../../../components/adminComponents/UI/AdminTable/AdminTable";
import { useFormatting } from "../../../hooks/useFormatting";
import { fetchAllTypes } from "../../../store/actions/TypeActions";
import style from "./AdminProductTypesPage.module.css";

const AdminProductTypes = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAllTypes());
	}, []);
	const typeData = useSelector((store) => store.TypeReducer);
	const types = useFormatting(typeData.allTypes);
	return (
		<div className={style.tableContainer}>
			<AdminTable
				data={types}
				heading={"All Product Types"}
				error={typeData.loadingError}
				limit={Infinity}
			/>
		</div>
	);
};

export default AdminProductTypes;
