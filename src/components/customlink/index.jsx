import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ route, children }) => {
	return (
		<div>
			<li
				style={{
					padding: "8px ",
					justifyContent: "center ",
					alignContent: "center",
				}}
				class=""
			>
				<Link to={`${route}`} style={{ color: "black" }}>
					{children}
				</Link>
			</li>
		</div>
	);
};

export default CustomLink;
