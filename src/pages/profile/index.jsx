// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axiosInstance from "../../api/axiosInstance";
// import ProfileComponent from "./ProfileComponent";

// const Profile = () => {
// 	const [data, setData] = useState([]);
// 	const [id, setId] = useState(null);

// 	useEffect(() => {
// 		const fetchUserData = async () => {
// 			try {
// 				const userDataPromise = localStorage.getItem("userData");
// 				const userData = await userDataPromise;
// 				const parsedUserData = JSON.parse(userData);
// 				const userId = parsedUserData.user._id;
// 				setId(userId);
// 			} catch (error) {
// 				throw error

// 			}
// 		};

// 		fetchUserData();
// 	}, []);

// 	const fetchUser = async (id) => {
// 		try {
// 			const response = await axiosInstance.get(`/user/profile/${id}`);
// 			setData(response.data.data);
// 		} catch (error) {
// 			throw error;
// 		}
// 	};

// 	useEffect(() => {
// 		if (id) {
// 			fetchUser(id);
// 		}
// 	}, [id]);

// 	return (
// 		<div>
// 			<div
// 				style={{
// 					padding: "20px",
// 					justifyContent: "center",
// 					alignItems: "center",
// 					marginBottom: "200px",
// 				}}
// 				className="container"
// 			>
// 				<ProfileComponent
// 					key={data._id}
// 					name={data.fname + "  " + data.lname}
// 					email={data.email}
// 					phone={data.phone}
// 					country={ data.country}
// 					city={data.city}
// 					fname={data.fname }
// 					lname={ data.lname}
// 				/>
// 			</div>
// 		</div>

// 	);
// };

// export default Profile;

import React, { useCallback } from "react";
import "./index2.css";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";
import { useEffect } from "react";
import axiosInstance from "../../api/axiosInstance";
import { useMemo } from "react";
import { Link } from "react-router-dom";

function Profile() {
	const isSm = useMediaQuery("only screen and (max-width : 700px)");

	const [data, setData] = useState([]);
	const [id, setId] = useState(null);
	const [scholarship, setScholarship] = useState([]);
	const [subscription, setSubscription] = useState(false);
	const [loading, setLoading] = useState(false);
	const [count, setCount] = useState(1);

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const userDataPromise = localStorage.getItem("userData");
				const userData = await userDataPromise;
				const parsedUserData = JSON.parse(userData);
				const userId = parsedUserData.user._id;
				setId(userId);
			} catch (error) {
				throw error;
			}
		};

		fetchUserData();
	}, []);

	const fetchUser = async (id) => {
		try {
			const response = await axiosInstance.get(`/user/profile/${id}`);
			setData(response.data.data);
		} catch (error) {
			throw error;
		}
	};

	const getScholarship = async () => {
		setLoading(true);
		try {
			let res = await axiosInstance.get(
				"https://demo.kodoscholarships.com/api/v1/scholarship"
			);

			setScholarship(res.data.data);
			setSubscription(res.data.subscription);
		} catch (error) {
			// Handle   error here
			throw error;
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getScholarship();
	}, []);

	useMemo(() => {
		if (id) {
			fetchUser(id);
		}
	}, [id]);

	return (
		<div className="app-content main-content mt-0">
			<div className="side-app">
				{/* CONTAINER */}
				<div
					style={{
						width: "80%",
						marginTop: "5rem",
						marginLeft: isSm ? "" : "14rem"
					}}
					className="main-container container-fluid"
				>
					{/* PAGE-HEADER */}

					{/* PAGE-HEADER END */}

					{/* ROW-1 OPEN */}
					<div className="row" id="user-profile">
						<div className="col-lg-12">
							<div className="card">
								<div className="card-body">
									<div className="row align-items-center">
										<div className="col-lg-12 col-md-12 col-xl-6">
											<div className="d-flex flex-wrap align-items-center">
												<div className="profile-img-main rounded">
													<img
														src="https://www.kodoscholarships.com/assets/images/faces/6.jpg"
														alt="img"
														className="m-0 p-1 rounded hrem-6"
													/>
												</div>
												<div className="ms-4">
													<h4>{data.fname + data.lname}</h4>
													<p className="text-muted mb-2">
														{data.email}
													</p>
												</div>
											</div>
										</div>
										<div className="col-lg-12 col-md-12 col-xl-6">
											<div className="d-md-flex flex-wrap justify-content-lg-end">
												<div className="media m-3">
													<div
														style={{
															padding: "1rem",
															borderRadius: "10px"
														}}
														className="media-icon bg-primary me-3 mt-1"
													>
														<i className="fa fa-compass fs-20 text-white"></i>
													</div>
													<div className="media-body">
														<span className="text-muted">
															Matched
														</span>
														<div style={{
																	fontSize: "2rem",
																	marginRight: "2px",
																}} className="fw-semibold fs-25">
															{scholarship.length}
														</div>
													</div>
												</div>
												<div className="media m-3">
													<div
														style={{
															padding: "1rem",
															borderRadius: "10px"
														}}
														className="media-icon bg-info me-3 mt-1"
													>
														<i className="fa fa-paper-plane fs-20 text-white"></i>
													</div>
													<div className="media-body">
														<span className="text-muted">
															Applied
														</span>
														<div style={{
																	fontSize: "2rem",
																	marginRight: "2px",
																}} className="fw-semibold fs-25">
															0
														</div>
													</div>
												</div>
												<div className="media m-3">
													<div
														style={{
															padding: "1rem",
															borderRadius: "10px"
														}}
														className="media-icon bg-warning me-3 mt-1"
													>
														<i className="fa fa-bookmark fs-20 text-white"></i>
													</div>
													<div className="media-body">
														<span className="text-muted">
															Favorites
														</span>
														<div style={{
																	fontSize: "2rem",
																	marginRight: "2px",
																}} className="fw-semibold fs-25">
															0
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="border-top">
									<div className="wideget-user-tab">
										<div className="tab-menu-heading">
											<div
												style={{ display: "flex" }}
												className="tabs-menu1"
											>
												<ul
													style={{
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: "1rem"
													}}
													className="nav"
												>
													<li style={{ marginRight: "1rem" }}>
														{" "}
														{/* Added margin between the links */}
														<a
															href="#profileMain"
															className="active show"
															data-bs-toggle="tab"
														>
															Profile
														</a>
													</li>
													<li>
														<a
															href="#accountSettings"
															data-bs-toggle="tab"
														>
															Account Settings
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="tab-content">
								<div className="tab-pane active show" id="profileMain">
									<div className="card">
										<div className="card-body p-0">
											<div className="table-responsive p-5">
												<h3 className="card-title">
													Personal Info
												</h3>
												<table className="table row table-borderless">
													<tbody className="col-lg-12 col-xl-6 p-0">
														<tr>
															<td>
																<strong>First Name :</strong>{" "}
																{data.fname}
															</td>
														</tr>
														<tr>
															<td>
																<strong>Location :</strong>{" "}
																{(data.city, data.country)}
															</td>
														</tr>
														<tr>
															<td>
																<strong>Subject :</strong>{" "}
																{data.subject}
															</td>
														</tr>
													</tbody>
													<tbody className="col-lg-12 col-xl-6 p-0 border-top-0">
														<tr>
															<td>
																<strong>Last Name :</strong>{" "}
																{data.lname}
															</td>
														</tr>
														<tr>
															<td>
																<strong>Email :</strong>{" "}
																{data.email}
															</td>
														</tr>
														<tr>
															<td>
																<strong>Phone :</strong>{" "}
																{data.phone}
															</td>
														</tr>
													</tbody>
												</table>
											</div>
											<div className="border-top"></div>
											<div
												style={{
													display: "flex",
													flexDirection: "column"
												}}
												className="p-5"
											>
												<h3 className="card-title">Statistics</h3>
												<div className="">
													<ul className="nav p-0 border-bottom-0 mb-0">
														<li
															style={{
																padding: "1rem",
																height: "5rem",
																width: "8rem",
																display: "flex",
																justifyContent: "center",
																alignItems: "center",
																borderRadius: "5px",
																backgroundColor: "#fbfbfc"
															}}
															className="border p-3 br-5 bg-light-lightest wpx-100 hpx-70 text-center my-1"
														>
															<span
																style={{
																	fontSize: "2rem",
																	marginRight: "2px"
																}}
																className="border-0 mb-0 pb-0 fs-21"
															>
																{scholarship.length}
															</span>
															Matched
														</li>
														<li
															style={{
																padding: "1rem",
																height: "5rem",
																width: "8rem",
																display: "flex",
																justifyContent: "center",
																alignItems: "center",
																borderRadius: "5px",
																backgroundColor: "#fbfbfc"
															}}
															className="border p-2 br-5 bg-light-lightest wpx-100 hpx-70 text-center mx-2 my-1"
														>
															<span
																style={{
																	fontSize: "2rem",
																	marginRight: "2px"
																}}
																className="border-0 mb-0 pb-0 fs-21"
															>
																0
															</span>
															Applied
														</li>
														<li
															style={{
																padding: "1rem",
																height: "5rem",
																width: "8rem",
																display: "flex",
																justifyContent: "center",
																alignItems: "center",
																borderRadius: "5px",
																backgroundColor: "#fbfbfc"
															}}
															className="border p-2 br-5 bg-light-lightest wpx-100 hpx-70 text-center my-1"
														>
															<span
																style={{
																	fontSize: "2rem",
																	marginRight: "2px"
																}}
																className="border-0 mb-0 pb-0 fs-21"
															>
																0
															</span>
															Favorites
														</li>
													</ul>
												</div>
											</div>
											<div className="border-top"></div>
										</div>
									</div>
								</div>

								<div className="tab-pane" id="accountSettings">
									<div className="card">
										<div className="card-body">
											<form
												method=""
												action=""
												className="form-horizontal"
											>
												<div className="mb-4 main-content-label">
													Account
												</div>
												<div className="form-group ">
													<div className="row row-sm">
														<div className="col-md-3">
															<label
																htmlFor="userName"
																className="form-label"
															>
																First Name
															</label>
														</div>
														<div className="col-md-9">
															<input
																type="text"
																className="form-control"
																id="userName"
																placeholder="First Name"
																value={data.fname}
															/>
														</div>
													</div>
												</div>
												<div className="form-group ">
													<div className="row row-sm">
														<div className="col-md-3">
															<label
																htmlFor="userName"
																className="form-label"
															>
																Last Name
															</label>
														</div>
														<div className="col-md-9">
															<input
																type="text"
																className="form-control"
																id="userName"
																placeholder="Last Name"
																value={data.lname}
															/>
														</div>
													</div>
												</div>
												<div className="form-group ">
													<div className="row row-sm">
														<div className="col-md-12">
															<Link
																style={{
																	backgroundColor: "#EC1D64",
																	color: "#fff"
																}}
																className="btn  my-1 float-end"
																to="#"
															>
																Update
															</Link>
														</div>
													</div>
												</div>
											</form>
											<form
												method="POST"
												action="https://www.kodoscholarships.com/change-password"
												className="form-horizontal"
											>
												<input
													type="hidden"
													name="_token"
													value="bR8Vjf5q43xYNweyrJVA2xlhf9B9qI3yPKAXBPHu"
												/>
												<div className="mb-4 main-content-label">
													Change Password
												</div>
												<div className="form-group ">
													<div className="row row-sm">
														<div className="col-md-3">
															<label
																htmlFor="current_password"
																className="form-label"
															>
																Current Password
															</label>
														</div>
														<div className="col-md-9">
															<input
																type="password"
																className="form-control"
																id="current_password"
																name="current_password"
																placeholder="Current Password"
																required
															/>
														</div>
													</div>
												</div>
												<div className="form-group ">
													<div className="row row-sm">
														<div className="col-md-3">
															<label
																htmlFor="password"
																className="form-label"
															>
																New Password
															</label>
														</div>
														<div className="col-md-9">
															<input
																type="password"
																className="form-control"
																id="password"
																name="password"
																placeholder="New Password"
																required
															/>
														</div>
													</div>
												</div>

												<div className="form-group float-end">
													<div className="row row-sm">
														<div className="col-md-12">
															<button
																type="submit"
																className="btn  my-1"
																style={{
																	backgroundColor: "#EC1D64",
																	color: "#fff"
																}}
															>
																Change Password
															</button>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* COL-END */}
					</div>
					{/* ROW-1 CLOSED */}
				</div>
			</div>
		</div>
	);
}

export default Profile;
