import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
	return (
		<div>
			<div>
				<aside
					style={{ backgroungColor: "#343A40" }}
					className="main-sidebar sidebar-dark-primary elevation-4"
				>
					{/* Brand Logo */}
					<Link to="/dashbaord" className="brand-link">
						<img
							src="/logo-kodo.png"
							alt="kodo Logo"
							className="brand-image  elevation-3"
							style={{ opacity: ".8" }}
						/>
						<span
							style={{ padding: "4px", marginRight: "9px" }}
							className="brand-text font-weight-light"
						>
							Scholarship
						</span>
					</Link>
					{/* Sidebar */}
					<div style={{ backgroungColor: "#343A40" }} className="sidebar">
						{/* Sidebar user panel (optional) */}
						<div className="user-panel mt-3 pb-3 mb-3 d-flex">
							<div className="image">
								<img
									src="dist/img/user2-160x160.jpg"
									className="img-circle elevation-2"
									alt="User Image"
								/>
							</div>
							<div className="info">
								<Link to="/" className="d-block">
									Bukenya Kizza
								</Link>
							</div>
						</div>
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
								<li className="nav-item has-treeview menu-open">
									<Link to="/dashboard" className="nav-link active">
										<i className="nav-icon fas fa-tachometer-alt" />
										<p>
											Dashboard
											{/* <i className="right fas fa-angle-left" /> */}
										</p>
									</Link>
									{/* <ul className="nav nav-treeview">
										<li className="nav-item">
											<Link
												to="./index.html"
												className="nav-link active"
											>
												<i className="far fa-circle nav-icon" />
												<p>Dashboard v1</p>
											</Link>
										</li>
									</ul> */}
								</li>
								<li className="nav-item">
									<Link to="/scholarships" className="nav-link">
										<i className="nav-icon fas fa-th" />
										<p>
											Sholarships
											<span className="right badge badge-danger">
												New
											</span>
										</p>
									</Link>
								</li>
								<li className="nav-item has-treeview">
									<Link to="/" className="nav-link">
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
