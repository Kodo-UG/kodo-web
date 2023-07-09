import React from "react";
import { Link, useHistory } from "react-router-dom";
import CustomLink from "../customlink";
import "./index.css";

const NavHeader = () => {
	const history = useHistory();
	const token = localStorage.getItem("token");

	const routeData = [
		{
			id: 1,
			route: "/",
			children: "Home"
		},
		{
			id: 2,
			route: "/aboutus",
			children: "About us"
		},
		{
			id: 3,
			route: "/scholarships",
			children: "Scholarships"
		},
		{
			id: 4,
			route: "/testimonals",
			children: "Testimonals"
		},
		{
			id: 5,
			route: "/blog",
			children: "Blog"
		},
		{
			id: 6,
			route: "/contactus",
			children: "Contact us"
		},
		{
			id: 7,
			route: "/db",
			children: "Dashboard"
		}
	];

	return (
		<nav
			className="navbar navbar-expand-lg navbar-light bg-light glass"
			style={{
				boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
				backgroundColor: "white",
				height: "5.4rem"
			}}
		>
			<Link to="/">
				<div className="logo">
					<img
						src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688759275/logo-kodo-removebg-preview_zz6r2w.png"
						alt="logo"
						style={{
							width: "",
							height: "35px",
							marginLeft: "3rem",
							paddingLeft:"2rem"
						}}
					/>
				</div>
			</Link>

			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarTogglerDemo01"
				aria-controls="navbarTogglerDemo01"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div
				style={{}}
				className="collapse navbar-collapse "
				id="navbarTogglerDemo01"
			>
				<ul style={{ color: "#202F4A" }} className="navbar-nav ml-auto ul ">
					{routeData.map((dta) => (
						<CustomLink
							key={dta.id}
							route={dta.route}
							children={dta.children}
						/>
					))}
				</ul>

				<div className="my-2 my-lg-0 bt" style={{ marginLeft: "2rem" }}>
					<form className="form-inline">
						{token ? (
							<button
								className="btn btn-lg"
								style={{
									background: "#EC1D64",
									borderRadius: "0",
									color: "white",
									marginRight: "0.1223rem"
								}}
								onClick={(e) => {
									e.preventDefault();
									localStorage.removeItem("token");
									history.push("/login");
								}}
							>
								Logout
							</button>
						) : (
							<button
								className="btn btn-lg mr-2"
								onClick={(e) => {
									e.preventDefault();
									history.push("/login");
								}}
							>
								Login
							</button>
						)}

						<button
							className="btn btn-lg"
							style={{
								background: "#EC1D64",
								borderRadius: "0",
								color: "white"
							}}
							onClick={(e) => {
								e.preventDefault();
								history.push("/admissions");
							}}
						>
							FIND SCHOLARSHIP
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
};

export default NavHeader;
