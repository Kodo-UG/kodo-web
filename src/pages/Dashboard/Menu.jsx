import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import font-awesome CSS to load the required icons
// import "font-awesome/css/font-awesome.min.css";

const Menu = () => {
	const [activeButton, setActiveButton] = useState(null);
	const [data, setData] = useState();
	const [sidebarVisible, setSidebarVisible] = useState(true);

	const handleActive = (buttonName) => {
		setActiveButton(buttonName);
	};

	const isButtonActive = (buttonName) => {
		return activeButton === buttonName;
	};

	const token = localStorage.getItem("token");

	const fetchNotifications = async () => {
		const headers = {
			Authorization: `Bearer ${token}`
		};

		let res = await axios.get(
			"https://demo.kodoscholarships.com/api/v1/user/notifications",
			{
				headers
			}
		);

		setData(res.data.data);
	};

	useEffect(() => {
		fetchNotifications();
	}, []);

	// Function to toggle the sidebar visibility
	const toggleSidebar = () => {
		setSidebarVisible(!sidebarVisible);
	};

	return (
		<div>
			<div>
				<aside
					className={`main-sidebar sidebar-dark-primary elevation-4 ${
						!sidebarVisible ? "sidebar-closed" : ""
					}`}
					style={{ backgroundColor: "#fff" }}
				>
					{/* Brand Logo */}
					<Link to="/" className="brand-link">
						<img
							src="/logo-kodo.png"
							alt="kodo Logo"
							className="brand-image"
						/>
						<span
							style={{
								fontSize: "15px",
								color: "#125875",
								fontWeight: "bold"
							}}
							className="brand-text font-weight-light"
						>
							.{" "}
						</span>
					</Link>
					<div style={{ backgroundColor: "#1c2755" }} className="sidebar">
						<nav className="mt-4">
							<ul
								className="nav nav-pills nav-sidebar flex-column"
								data-widget="treeview"
								role="menu"
								data-accordion="false"
							>
								<li className="nav-item">
									<Link
										onClick={() => handleActive("scholarships")}
										to="/scholars"
										className={`nav-link ${
											isButtonActive("scholarships") ? "active" : ""
										}`}
									>
										<i
											className="fa fa-graduation-cap"
											aria-hidden="true"
										></i>{" "}
										<p
											style={{
												color: "#fff",
												fontWeight: "bold",
												padding: ".9rem"
											}}
										>
											Dashboard
											{data?.length > 0 ? (
												<span className="right badge badge-danger">
													New
												</span>
											) : null}
										</p>
									</Link>
								</li>

								<li className="nav-item">
									<Link
										onClick={() => handleActive("dashboard")}
										to="/scholars"
										className={`nav-link ${
											isButtonActive("dashboard") ? "active" : ""
										}`}
									>
										<i
											className="fa fa-trophy"
											aria-hidden="true"
										></i>{" "}
										<p
											style={{
												color: "#fff",
												fontWeight: "bold",
												padding: ".9rem"
											}}
										>
											Matched Scholarship
										</p>
									</Link>
								</li>

								<li className="nav-item">
									<Link
										onClick={() => handleActive("favorites")}
										to="/favorite"
										className={`nav-link ${
											isButtonActive("favorites") ? "active" : ""
										}`}
									>
										<i
											style={{ marginLeft: "3px" }}
											className="fa fa-bookmark"
											aria-hidden="true"
										></i>

										<p
											style={{
												color: "#fff",
												fontWeight: "bold",
												padding: ".9rem",
												marginLeft: "4px"
											}}
										>
											Favorites
										</p>
									</Link>
								</li>

								<li className="nav-item">
									<Link
										onClick={() => handleActive("jobs")}
										to="/jobs"
										className={`nav-link ${
											isButtonActive("jobs") ? "active" : ""
										}`}
									>
										<i
											style={{ marginLeft: "3px" }}
											className="fa fa-briefcase"
											aria-hidden="true"
										></i>

										<p
											style={{
												color: "#fff",
												fontWeight: "bold",
												padding: ".9rem",
												marginLeft: "4px"
											}}
										>
											Jobs
										</p>
									</Link>
								</li>
							</ul>
						</nav>
						{/* /.sidebar-menu */}
					</div>
					{/* /.sidebar */}
				</aside>
			</div>
		</div>
	);
};

export default Menu;
