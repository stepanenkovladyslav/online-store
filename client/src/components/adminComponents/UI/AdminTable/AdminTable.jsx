import React from "react";
import style from "./AdminTable.module.css";
import { useState } from "react";
import AddValueModal from "../AddValueModal/AddValueModal";
import { useLocation } from "react-router-dom";
import EditInfoModal from "../EditInfoModal/EditInfoModal";
import { useFormatting } from "../../../../hooks/useFormatting";
import { useDispatch } from "react-redux";
import TableHeaderRow from "../TableHeaderRow/TableHeaderRow";
import TableBodyRow from "../TableBodyRow/TableBodyRow";

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
	const activateEditModal = (item) => {
		activeEditModal === true
			? setActiveEditModal(false)
			: setActiveEditModal(true);
		setEditInfo(item);
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
						<TableHeaderRow error={props.error} data={data} />
						<TableBodyRow
							data={data}
							limit={props.limit}
							activateEditModal={activateEditModal}
						/>
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
