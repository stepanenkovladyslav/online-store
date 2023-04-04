import React from "react";
import style from "./AdminTable.module.css";
import { useState, useEffect } from "react";
import AddValueModal from "../AddValueModal/AddValueModal";
import { useLocation } from "react-router-dom";
import EditInfoModal from "../EditInfoModal/EditInfoModal";
import { useFormatting } from "../../../../hooks/useFormatting";
import {
	activateModal,
	deActivateModal,
} from "../../../../store/actions/ModalActions";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchOneDevice } from "../../../../store/actions/DevicesActions";

const AdminTable = (props) => {
	const [activeAddModal, setActiveAddModal] = useState(false);
	const dispatch = useDispatch();

	function activateAddModal() {
		activeAddModal === true
			? setActiveAddModal(false)
			: setActiveAddModal(true);
	}

	const [activeEditModal, setActiveEditModal] = useState(false);
	const [editInfo, setEditInfo] = useState();
	// const isActive = useSelector((store) => store.ModalReducer.isActive);
	const activateEditModal = (item) => {
		activeEditModal === true
			? setActiveEditModal(false)
			: setActiveEditModal(true);
		setEditInfo(item);
		// ? dispatch(deActivateModal())
		// : dispatch(activateModal());
	};
	const data = useFormatting(props.data);
	const location = useLocation();

	if (props.data) {
		return (
			<div className={style.list}>
				<div className={style.listHeader}>
					<div className={style.listHeaderContent}>
						<span
							className="material-icons"
							style={{ fontSize: "20px", marginLeft: "0.5em" }}
						>
							format_list_bulleted
						</span>
						<h3 className={style.listHeading}>{props.heading}</h3>
					</div>
					{location.pathname === "/admin" ? (
						""
					) : (
						<button
							className={style.addValue}
							onClick={() => activateAddModal()}
						>
							+
						</button>
					)}
				</div>
				<div className={style.listContent}>
					<table className={style.table}>
						<thead>
							<tr className={style.tableHeaderRow}>
								{props.error.status ? (
									<td className={style.error}>
										{props.error.message}
									</td>
								) : (
									Object.keys(data[0]).map((key, idx) => {
										return (
											<td
												className={style.cell}
												key={idx}
											>
												{key}
											</td>
										);
									})
								)}
							</tr>
						</thead>
						<tbody>
							{data.map((item, idx) => {
								if (idx < props.limit) {
									return (
										<tr
											className={style.tableBodyRow}
											key={idx}
										>
											{Object.values(item).map(
												(value, idx) => {
													return (
														<td
															className={
																style.cell
															}
															key={idx}
															onClick={() =>
																activateEditModal(
																	item
																)
															}
														>
															{value}
														</td>
													);
												}
											)}
										</tr>
									);
								}
							})}
						</tbody>
					</table>
				</div>
				<AddValueModal
					active={activeAddModal}
					offswitch={activateAddModal}
					setter={setActiveAddModal}
				/>
				{activeEditModal ? (
					<EditInfoModal
						data={editInfo}
						allData={props.data}
						offswitch={activateEditModal}
						active={activeEditModal}
						location={location}
						setter={setActiveAddModal}
						brands={props.brands}
						types={props.types}
					/>
				) : (
					<></>
				)}
			</div>
		);
	} else {
		return "";
	}
};
export default AdminTable;
