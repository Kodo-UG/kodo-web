/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import axiosInstance from "../../api/axiosInstance";
import { useEffect } from "react";

const MyHeader = () => {
	const history = useHistory();
	const token = localStorage.getItem("token");

	// const [userID, setUserID] = useState(null);
	// const fetchUser = async () => {
	// 	try {
	// 		const response = await axiosInstance.get(
	// 			"http://165.227.139.53/api/v1/user/profile/64a151d67a60cf3cb920892a"
	// 		);

	// 		console.log(response.data.data.fname, "RESPONSE IS HERE ");
	// 		// return user;
	// 	} catch (error) {
	// 		console.error("Error fetching user:", error);
	// 		throw error;
	// 	}
	// };

	// useEffect(() => {
	// 	fetchUser();
	// }, []);
	return (
		<div>
			<nav className="main-header navbar navbar-expand navbar-white navbar-light">
				{/* Left navbar links */}
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link className="nav-link" data-widget="pushmenu">
							<i className="fas fa-bars" />
						</Link>
					</li>
					<li className="nav-item d-none d-sm-inline-block">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					{/* <li className="nav-item d-none d-sm-inline-block">
						<Link href="#" className="nav-link">
							Contact
						</Link>
					</li> */}
				</ul>
				{/* SEARCH FORM */}
				<form className="form-inline ml-4">
					<div className="input-group input-group-sm">
						<input
							className="form-control form-control-navbar"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<div className="input-group-append">
							<button className="btn btn-navbar" type="submit">
								<i className="fas fa-search" />
							</button>
						</div>
					</div>
				</form>
				{/* Right navbar links */}
				<ul className="navbar-nav ml-auto">
					{/* Messages Dropdown Menu */}
					<li className="nav-item dropdown">
						<a className="nav-link" data-toggle="dropdown" href="#">
							<i className="far fa-comments" />
							<span className="badge badge-danger navbar-badge">3</span>
						</a>
						<div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
							<a href="#" className="dropdown-item">
								{/* Message Start */}
								<div className="media">
									<img
										src="dist/img/user1-128x128.jpg"
										alt="User Avatar"
										className="img-size-50 mr-3 img-circle"
									/>
									<div className="media-body">
										<h3 className="dropdown-item-title">
											user
											<span className="float-right text-sm text-danger">
												<i className="fas fa-star" />
											</span>
										</h3>
										<p className="text-sm">
											Call me whenever you can...
										</p>
										<p className="text-sm text-muted">
											<i className="far fa-clock mr-1" /> 4 Hours Ago
										</p>
									</div>
								</div>
								{/* Message End */}
							</a>
							<div className="dropdown-divider" />

							<div className="dropdown-divider" />
							<a href="#" className="dropdown-item dropdown-footer">
								See All Messages
							</a>
						</div>
					</li>
					{/* Notifications Dropdown Menu */}
					<li className="nav-item dropdown">
						<a className="nav-link" data-toggle="dropdown" href="#">
							<BsPersonCircle />
						</a>
						<div
							style={{ cursor: "pointer" }}
							className="dropdown-menu dropdown-menu-md dropdown-menu-right"
						>
							<div className="dropdown-divider" />
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
								}}
								className="dropdown-item"
							>
								<div style={{ width: "30px" }} className="">
									<img
										src="https://res.cloudinary.com/itgenius/image/upload/v1688438198/6_isfrng.png"
										className="img-circle elevation-2"
										alt="User Image"
									/>
								</div>
								<div className="info">
									<Link to="/profile">
										<div className="d-block">Bukenya</div>
									</Link>
								</div>
							</div>
							<div className="dropdown-divider" />
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									fontWeight: "bold",
									padding: "8px",
								}}
								className="dropdown-item"
							>
								<div data-widget="control-sidebar" data-slide="true">
									<AiOutlineLogout />
								</div>

								<div
									onClick={(e) => {
										e.preventDefault();
										localStorage.removeItem("token");
										history.push("/login");
									}}
								>
									logout
								</div>
							</div>
						</div>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default MyHeader;
