import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
	const [activeButton, setActiveButton] = useState(null);

	const handleActive = (buttonName) => {
		setActiveButton(buttonName);
	};

	const isButtonActive = (buttonName) => {
		return activeButton === buttonName;
	};

	return (
		<div>
			<div>
				<aside
					className="main-sidebar sidebar-dark-primary elevation-4"
					style={{ backgroundColor: "#125875" }}
				>
					{/* Brand Logo */}
					<Link to="/db" className="brand-link">
						<img
							src="/logo-kodo.png"
							alt="kodo Logo"
							className="brand-image elevation-3"
							style={{ opacity: ".8" }}
						/>
						<span
							style={{
								fontSize: "15px",
								color: "white",
								fontWeight: "bold",
							}}
							className="brand-text font-weight-light"
						>
							Scholarship
						</span>
					</Link>
					<div style={{ backgroundColor: "#125875" }} className="sidebar">
						{/* Sidebar user panel (optional) */}
						<div className="user-panel mt-3 pb-3 mb-3 d-flex"></div>
						{/* Sidebar Menu */}
						<nav className="mt-4">
							<ul
								className="nav nav-pills nav-sidebar flex-column"
								data-widget="treeview"
								role="menu"
								data-accordion="false"
							>
								{/* Add icons to the links using the .nav-icon class
                      with font-awesome or any other icon font library */}
								<li className="nav-item">
									<Link
										onClick={() => handleActive("dashboard")}
										to="/db"
										className={`nav-link ${
											isButtonActive("dashboard") ? "active" : ""
										}`}
									>
										<i
											class="fa fa-graduation-cap"
											aria-hidden="true"
										></i>{" "}
										<p>Dashboard</p>
									</Link>
								</li>
								<li className="nav-item">
									<Link
										onClick={() => handleActive("scholarships")}
										to="/scholars"
										className={`nav-link ${
											isButtonActive("scholarships") ? "active" : ""
										}`}
									>
										<i class="fa fa-trophy" aria-hidden="true"></i>{" "}
										<p>
											Scholarships
											<span className="right badge badge-danger">
												New
											</span>
										</p>
									</Link>
								</li>
								<li className="nav-item">
									<Link
										onClick={() => handleActive("applications")}
										to="/applications"
										className={`nav-link ${
											isButtonActive("applications") ? "active" : ""
										}`}
									>
										<i class="fa fa-tags" aria-hidden="true"></i>{" "}
										<p>
											My Applications
											{/* <span className="right badge badge-danger">
												New
											</span> */}
										</p>
									</Link>
								</li>
								{/* <li className="nav-item has-treeview">
									<Link
										onClick={() => handleActive("history")}
										to="/history"
										className={`nav-link ${
											isButtonActive("history") ? "active" : ""
										}`}
									>
										<i className="nav-icon fas fa-copy" />
										<p>
											History
											<i className="fas fa-angle-left right" />
											<span className="badge badge-info right">
												6
											</span>
										</p>
									</Link>
									<ul className="nav nav-treeview">
										<li className="nav-item">
											<Link
												to="pages/layout/top-nav.html"
												className="nav-link"
											>
												<i className="far fa-circle nav-icon" />
												<p>Top Navigation</p>
											</Link>
										</li>
										<li className="nav-item">
											<Link
												to="pages/layout/boxed.html"
												className="nav-link"
											>
												<i className="far fa-circle nav-icon" />
												<p>Boxed</p>
											</Link>
										</li>
									</ul>
								</li> */}
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
