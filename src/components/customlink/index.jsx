import React from "react";
import {Link} from "react-router-dom"
const CustomLink = ({ route, children }) => {
	return (
		<div>
			<li
				style={{
					padding: "8px",
					justifyContent: "center",
					alignContent: "center"
				}}
				className=""
			>
				<Link
					to={`${route}`}
					style={{
						color: "#162542",
						fontFamily: "Jost, sans-serif",
						fontWeight: "600",
						fontSize: "16px"
					}}
				>
					{children}
				</Link>
			</li>
		</div>
	);
};

export default CustomLink;
