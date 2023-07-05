import React from "react";
import { Link, useHistory } from "react-router-dom";
import CustomLink from "../customlink";

const NavHeader = () => {
	const history = useHistory();

	const token = localStorage.getItem("token");

	const routeData = [
		{
			id: 1,
			route: "/",
			children: "Home",
		},
		{
			id: 2,
			route: "/aboutus",
			children: "About us",
		},
		{
			id: 3,
			route: "/scholarships",
			children: "Scholarships",
		},
		{
			id: 4,
			route: "/testimonals",
			children: "Testimonals",
		},
		{
			id: 5,
			route: "/blog",
			children: "Blog",
		},
		{
			id: 6,
			route: "/contactus",
			children: "Contact us",
		},
		{
			id: 7,
			route: "/db",
			children: "Dashboard",
		},
	];
	return (
		<nav class="navbar navbar-expand-lg navbar-light ">
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarTogglerDemo01"
				aria-controls="navbarTogglerDemo01"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarTogglerDemo01">
				<Link to="/">
					<div class="logo">
						<img
							src="logo-kodo.png"
							alt="logo"
							style={{ width: "", height: "50px" }}
						/>
					</div>
				</Link>

				<ul
					style={{ marginLeft: 20 }}
					class="navbar-nav mr-auto mt-2 mt-lg-0"
				>
					{routeData.map((dta) => (
						<CustomLink
							key={dta.id}
							route={dta.route}
							children={dta.children}
						/>
					))}
				</ul>
				<form
					class=" my-lg-0 "
					style={{
						display: "flex",
					}}
				>
					{token ? (
						<button
							class="select-option sonic-btn"
							style={{
								padding: "10px 20px",

								border: "none",
								outline: "none",
								background: "#FF7350",
								transition:
									"background-color 0.3s ease-in-out, color 0.3s ease-in-out",
								fontFamily: "Arial, sans-serif",
								fontSize: "16px",
								lineHeight: "1.5",
								color: "#fff",
								cursor: "pointer",
								marginBottom: "4px",
								marginRight: "1rem",
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
							class="select-option sonic-btn"
							style={{
								padding: "10px 20px",

								border: "none",
								outline: "none",
								background: "#FF7350",
								transition:
									"background-color 0.3s ease-in-out, color 0.3s ease-in-out",
								fontFamily: "Arial, sans-serif",
								fontSize: "16px",
								lineHeight: "1.5",
								color: "#fff",
								cursor: "pointer",
								marginBottom: "4px",
								marginRight: "1rem",
							}}
							onClick={(e) => {
								e.preventDefault();

								history.push("/login");
							}}
						>
							Login
						</button>
					)}
					<button
						class="select-option sonic-btn"
						style={{
							padding: "10px 20px",
							background: "#FF7350",
							border: "none",
							outline: "none",
							transition:
								"background-color 0.3s ease-in-out, color 0.3s ease-in-out",
							fontFamily: "Arial, sans-serif",
							fontSize: "16px",
							lineHeight: "1.5",
							color: "#fff",
							cursor: "pointer",
							marginBottom: "4px",
						}}
						onClick={(e) => {
							e.preventDefault();
							history.push("/admissions");
						}}
					>
						admission open
					</button>
				</form>
			</div>
		</nav>
	);
};

export default NavHeader;
