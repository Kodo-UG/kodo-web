import React from "react";
import { Tabs } from "antd";
const onChange = (key) => {
	console.log(key);
};
const CustomTab = ({ total }) => (
	<Tabs
		onChange={onChange}
		type="card"
		items={new Array(1).fill(null).map((_, i) => {
			const id = String(i + 1);
			return {
				label: `All Available Scholarships( ${total})`,
				key: id
				// children: `Content of Tab Pane ${id}`
			};
		})}
		tabBarStyle={{ color: "red" }}
	/>
);
export default CustomTab;
