import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div>
			<div>
				<footer
					className="main-footer fixed-bottom"
					style={{ height: "50px", color: "black" }}
				>
					<strong>
						&copy; 2023{" "}
						<Link style={{ color: "#125875", padding: "3px" }} to="/">
							Kodo scholarships
						</Link>
					</strong>
					All rights reserved.
					<div className="float-right d-none d-sm-inline-block">.</div>
				</footer>
			</div>
		</div>
	);
};

export default Footer;
