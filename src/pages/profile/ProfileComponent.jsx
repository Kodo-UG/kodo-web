import React from "react";
import { useState } from "react";
import CustomInput from "../../components/input";
import axiosInstance from "../../api/axiosInstance";

const ProfileComponent = ({
	name,
	location,
	fullname,
	email,
	phone,
	address,
}) => {
	const [bg, setBg] = useState("#FF7350");
	const [value, setValues] = useState({
		fname: "",
		lname: "",
		city: "",
		country: "",
		phone: "",
	});

	const handleEditUserInfo = async () => {
		try {
			const res = await axiosInstance.patch("/user/profile", {
				fname: value.fname,
				lname: value.lname,
				city: value.city,
				country: value.country,
				phone: value.phone,
			});
		} catch (error) {
			throw error;
		}
	};

	return (
		<div>
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
										<h4>{name}</h4>

										<p className="text-muted font-size-sm">
											{location}
										</p>

										<button
											style={{
												backgroundColor: "#EC1D64",
												color: "white",
											}}
											className="btn "
										>
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
										{fullname}
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">Email</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										{email}
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">Phone</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										{phone}
									</div>
								</div>
								{/* <hr /> */}
								{/* <div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">Mobile</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										(320) 380-4539
									</div>
								</div> */}
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">Address</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										{address}
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-12">
										<button
											style={{
												backgroundColor: "#EC1D64",
												padding: "8px",
												width: "90px",
												marginTop: "8px",
												color: "white",
											}}
											type="button"
											class="btn "
											data-toggle="modal"
											data-target="#exampleModalCenter"
										>
											Edit
										</button>
									</div>
								</div>
							</div>
						</div>

						<div
							class="modal fade"
							id="exampleModalCenter"
							tabindex="-1"
							role="dialog"
							aria-labelledby="exampleModalCenterTitle"
							aria-hidden="true"
						>
							<div
								class="modal-dialog modal-dialog-centered"
								role="document"
							>
								<div class="modal-content">
									<div class="modal-header">
										<h5
											class="modal-title"
											id="exampleModalLongTitle"
										>
											Edit User Information
										</h5>
										<button
											type="button"
											class="close"
											data-dismiss="modal"
											aria-label="Close"
										>
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div style={{ display: "grid" }} class="modal-body">
										<CustomInput
											// style={{ width: "10rem" }}
											value={value.fname}
											name="fname"
											type="text"
											placeholder="Enter first name"
											label="First Name"
										/>

										<CustomInput
											name="lname"
											type="text"
											placeholder="Enter Last name"
											label="Last Name"
											value={value.lname}
										/>
										<CustomInput
											name="email"
											value={value.email}
											type="text"
											placeholder="Enter Email"
											label="Email"
										/>
										<CustomInput
											name="phone"
											type="text"
											placeholder="Enter Phone Number"
											label="Phone Number"
											value={value.phone}
										/>
										<CustomInput
											name="country"
											type="text"
											placeholder="Enter Country"
											label="Country"
											value={value.country}
										/>
										<CustomInput
											name="city"
											type="text"
											placeholder="Enter City"
											label="City"
											value={value.city}
										/>
									</div>
									<div class="modal-footer">
										<button
											type="button"
											class="btn btn-secondary"
											data-dismiss="modal"
										>
											Close
										</button>
										<button
											style={{
												backgroundColor: "#EC1D64",
												color: "white",
											}}
											type="button"
											class="btn "
										>
											Save changes
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileComponent;
