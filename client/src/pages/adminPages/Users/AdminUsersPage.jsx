import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../../../store/actions/UserActions";
import AdminTable from "../../../components/adminComponents/UI/AdminTable/AdminTable";
import style from "./AdminUsersPage.module.css";
import { useFormatting } from "../../../hooks/useFormatting";

const AdminUsers = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllUsers());
	}, []);

	const userData = useSelector((store) => store.UserReducer);
	const error = useSelector((store) => store.UserReducer.error);

	const users = useFormatting(userData.allUsers);

	return (
		<div className={style.tableContainer}>
			<AdminTable
				data={users}
				heading={"All Users"}
				error={userData.loadingError}
				limit={Infinity}
			/>
		</div>
	);
};

export default AdminUsers;
