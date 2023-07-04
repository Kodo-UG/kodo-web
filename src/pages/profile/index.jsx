import React, { useState } from "react";
import { Link } from "react-router-dom";
const Profile = () => {
	const [bg, setBg] = useState("#FF7350");
	return (
		<div>
			<div
				style={{
					padding: "20px",
					justifyContent: "center",
					alignItems: "center",
					marginBottom: "200px",
				}}
				className="container"
			>
				<div
					style={{
						padding: "20px",
						justifyContent: "center",
						alignItems: "center",
					}}
					className="main-body"
				>
				
					<div className="row gutters-sm">
						<div className="col-md-4 mb-3">
							<div className="card">
								<div className="card-body">
									<div className="d-flex flex-column align-items-center text-center">
										<img
											src="https://bootdey.com/img/Content/avatar/avatar7.png"
											alt="Admin"
											className="rounded-circle"
											width={150}
										/>
										<div className="mt-3">
											<h4>Bukenya kizza</h4>

											<p className="text-muted font-size-sm">
												Kampala,Uganda
											</p>

											<button className="btn btn-outline-primary">
												Subscription Active
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-8">
							<div className="card mb-3">
								<div className="card-body">
									<div className="row">
										<div className="col-sm-3">
											<h6 className="mb-0">Full Name</h6>
										</div>
										<div className="col-sm-9 text-secondary">
											Kenneth Valdez
										</div>
									</div>
									<hr />
									<div className="row">
										<div className="col-sm-3">
											<h6 className="mb-0">Email</h6>
										</div>
										<div className="col-sm-9 text-secondary">
											fip@jukmuh.al
										</div>
									</div>
									<hr />
									<div className="row">
										<div className="col-sm-3">
											<h6 className="mb-0">Phone</h6>
										</div>
										<div className="col-sm-9 text-secondary">
											(239) 816-9029
										</div>
									</div>
									<hr />
									<div className="row">
										<div className="col-sm-3">
											<h6 className="mb-0">Mobile</h6>
										</div>
										<div className="col-sm-9 text-secondary">
											(320) 380-4539
										</div>
									</div>
									<hr />
									<div className="row">
										<div className="col-sm-3">
											<h6 className="mb-0">Address</h6>
										</div>
										<div className="col-sm-9 text-secondary">
											Bay Area, San Francisco, CA
										</div>
									</div>
									<hr />
									<div className="row">
										<div className="col-sm-12">
											<button
												onMouseOver={() => setBg("red")}
												onMouseLeave={() => setBg("#FF7350")}
												style={{
													padding: "10px",
													width: "90px",
													color: "white",
													fontWeight: "bold",
													backgroundColor: `${bg}`,
												}}
												target="__blank"
												to="#"
											>
												Edit
											</button>
										</div>
									</div>
								</div>
							</div>
							{/* <div className="row gutters-sm">
								<div className="col-sm-6 mb-3">
									<div className="card h-100">
										<div className="card-body">
											<h6 className="d-flex align-items-center mb-3">
												<i className="material-icons text-info mr-2">
													assignment
												</i>
												Project Status
											</h6>
											<small>Web Design</small>
											<div
												className="progress mb-3"
												style={{ height: 5 }}
											>
												<div
													className="progress-bar bg-primary"
													role="progressbar"
													style={{ width: "80%" }}
													aria-valuenow={80}
													aria-valuemin={0}
													aria-valuemax={100}
												/>
											</div>
											<small>Website Markup</small>
											<div
												className="progress mb-3"
												style={{ height: 5 }}
											>
												<div
													className="progress-bar bg-primary"
													role="progressbar"
													style={{ width: "72%" }}
													aria-valuenow={72}
													aria-valuemin={0}
													aria-valuemax={100}
												/>
											</div>
											<small>One Page</small>
											<div
												className="progress mb-3"
												style={{ height: 5 }}
											>
												<div
													className="progress-bar bg-primary"
													role="progressbar"
													style={{ width: "89%" }}
													aria-valuenow={89}
													aria-valuemin={0}
													aria-valuemax={100}
												/>
											</div>
											<small>Mobile Template</small>
											<div
												className="progress mb-3"
												style={{ height: 5 }}
											>
												<div
													className="progress-bar bg-primary"
													role="progressbar"
													style={{ width: "55%" }}
													aria-valuenow={55}
													aria-valuemin={0}
													aria-valuemax={100}
												/>
											</div>
											<small>Backend API</small>
											<div
												className="progress mb-3"
												style={{ height: 5 }}
											>
												<div
													className="progress-bar bg-primary"
													role="progressbar"
													style={{ width: "66%" }}
													aria-valuenow={66}
													aria-valuemin={0}
													aria-valuemax={100}
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-6 mb-3">
									<div className="card h-100">
										<div className="card-body">
											<h6 className="d-flex align-items-center mb-3">
												<i className="material-icons text-info mr-2">
													assignment
												</i>
												Project Status
											</h6>
											<small>Web Design</small>
											<div
												className="progress mb-3"
												style={{ height: 5 }}
											>
												<div
													className="progress-bar bg-primary"
													role="progressbar"
													style={{ width: "80%" }}
													aria-valuenow={80}
													aria-valuemin={0}
													aria-valuemax={100}
												/>
											</div>
											<small>Website Markup</small>
											<div
												className="progress mb-3"
												style={{ height: 5 }}
											>
												<div
													className="progress-bar bg-primary"
													role="progressbar"
													style={{ width: "72%" }}
													aria-valuenow={72}
													aria-valuemin={0}
													aria-valuemax={100}
												/>
											</div>
											<small>One Page</small>
											<div
												className="progress mb-3"
												style={{ height: 5 }}
											>
												<div
													className="progress-bar bg-primary"
													role="progressbar"
													style={{ width: "89%" }}
													aria-valuenow={89}
													aria-valuemin={0}
													aria-valuemax={100}
												/>
											</div>
											<small>Mobile Template</small>
											<div
												className="progress mb-3"
												style={{ height: 5 }}
											>
												<div
													className="progress-bar bg-primary"
													role="progressbar"
													style={{ width: "55%" }}
													aria-valuenow={55}
													aria-valuemin={0}
													aria-valuemax={100}
												/>
											</div>
											<small>Backend API</small>
											<div
												className="progress mb-3"
												style={{ height: 5 }}
											>
												<div
													className="progress-bar bg-primary"
													role="progressbar"
													style={{ width: "66%" }}
													aria-valuenow={66}
													aria-valuemin={0}
													aria-valuemax={100}
												/>
											</div>
										</div>
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Profile;
