import React from "react";
import { Tabs } from "antd";
const onChange = (key) => {
	console.log(key);
};
const CustomTab = ({ total }) => (
	<Tabs
		onChange={onChange}
		style={{ color: "red" }}
		type="card"
		items={new Array(1).fill(null).map((_, i) => {
			const id = String(i + 1);
			return {
				label: `All Scholarships( ${total})`,
				key: id
				// children: `Content of Tab Pane ${id}`
			};
		})}
	/>
);
export default CustomTab;
