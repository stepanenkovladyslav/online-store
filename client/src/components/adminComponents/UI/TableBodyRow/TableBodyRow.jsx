import React from "react";
import style from "./TableBodyRow.module.css";

const TableBodyRow = (props) => {
	return (
		<tbody>
			{props.data.map((item, idx) => {
				if (idx < props.limit) {
					return (
						<tr className={style.tableBodyRow} key={idx}>
							{Object.values(item).map((value, idx) => {
								return (
									<td
										className={style.cell}
										key={idx}
										onClick={() =>
											props.activateEditModal(item)
										}
									>
										{value}
									</td>
								);
							})}
						</tr>
					);
				}
			})}
		</tbody>
	);
};

export default TableBodyRow;
