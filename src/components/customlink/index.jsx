import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ route, children }) => {
	// const handleClick = (e) => {
	// 	onClick(); // Call the handleReloadPage function
	// 	// e.stopPropagation(); // Prevent further propagation of the click event
	// };

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
				{/* Attach the onClick event directly to the Link element */}
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
