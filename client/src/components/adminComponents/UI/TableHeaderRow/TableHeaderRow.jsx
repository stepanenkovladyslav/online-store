import React from "react";
import style from "./TableHeaderRow.module.css";

const TableHeaderRow = (props) => {
	return (
		<thead>
			<tr className={style.tableHeaderRow}>
				{props.error.status ? (
					<td className={style.error}>{props.error.message}</td>
				) : (
					Object.keys(props.data[0]).map((key, idx) => {
						return (
							<td className={style.cell} key={idx}>
								{key}
							</td>
						);
					})
				)}
			</tr>
		</thead>
	);
};

export default TableHeaderRow;
