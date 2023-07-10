import React from "react";
import { Link } from "react-router-dom";

const HeaderStepper = () => {
	return (
		<div>
			<div className="container">
				<nav
					// style={{ backgroundColor: "red" }}
					className="navbar  navbar-light bg-light"
				>
					<Link className="navbar-brand" to="#">
						<img
							style={{ height: "2.4rem" }}
							src="https://res.cloudinary.com/itgenius/image/upload/v1688989573/logo-header_jm6s82.svg"
							alt=""
						/>
					</Link>
				</nav>
			</div>
		</div>
	);
};

export default HeaderStepper;
