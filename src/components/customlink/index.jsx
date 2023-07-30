import React from "react";

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
				<a
					href={`${route}`}
					style={{
						color: "#162542",
						fontFamily: "Jost, sans-serif",
						fontWeight: "600",
						fontSize: "16px"
					}}
				>
					{children}
				</a>
			</li>
		</div>
	);
};

export default CustomLink;
