import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import apiClient from "../../api/apiClient";
import axios from "axios";
import { displayErrorMessage, displaySuccessMessage } from "../../utils/Toast";
import CustomInput from "../../components/input";

export default function ForgotPassword() {
	const [email, setEmail] = useState();

	const history = useHistory();
	const handleChange = (setState) => (e) => {
		setState(e.target.value);
	};

	const handleLogin = async () => {
		try {
			const data = await apiClient.post("/auth/forgot/password", { email });
			if (data.status == "200") {
				displaySuccessMessage(`Password reset instructions sent ${email}`);
			} else {
				displayErrorMessage("Login Failed");
			}
		} catch (error) {
			console.log(error);
			displayErrorMessage("Invalid Email or Password");
		}
	};
	return (
		<div className="container-fluid vh-100 " style={{ width: "100vw" }}>
			<div className="row h-100">
				<div className="col-md-6 bg-white d-flex align-items-center justify-content-center">
					<div
						style={{
							display: "flex",
							marginTop: "10px",
							marginBottom: "20px",
							flexDirection: "column",
						}}
					>
						<div
							style={{
								display: "flex",
								// alignItems: "flex-start",
								marginTop: "10px",
								marginBottom: "10px",
								// justifyContent: "center",
								flexDirection: "column",
							}}
						>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									marginTop: "10px",
									marginBottom: "40px",
									justifyContent: "space-between",
									flexDirection: "row",
								}}
							>
								<div>
									<img
										src="https://res.cloudinary.com/ultronic-software-developers/image/upload/v1688102021/logo-kodo_xjcbvm.png"
										width={200}
										alt="logo"
									/>
								</div>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										marginTop: "10px",
										marginBottom: "40px",
										justifyContent: "space-between",
										flexDirection: "row",
									}}
								>
									<h1
										style={{
											color: "#ff0000",
											transition:
												"background-color 0.3s ease-in-out, color 0.3s ease-in-out",
											fontFamily: "Arial, sans-serif",
											fontSize: "16px",
										}}
									>
										Login |{" "}
									</h1>
									<Link
										to="/register"
										style={{
											color: "gray",
											transition:
												"background-color 0.3s ease-in-out, color 0.3s ease-in-out",
											fontFamily: "Arial, sans-serif",
											fontSize: "16px",
										}}
									>
										Sign up
									</Link>
								</div>
							</div>
							<h1
								style={{
									fontWeight: "bold",
									fontSize: "24px",
									transition:
										"background-color 0.3s ease-in-out, color 0.3s ease-in-out",
									fontFamily: "Arial, sans-serif",
								}}
							>
								Forgot Password
							</h1>
							<h1
								style={{
									transition:
										"background-color 0.3s ease-in-out, color 0.3s ease-in-out",
									fontFamily: "Arial, sans-serif",
									fontSize: "16px",
									lineHeight: "1.5",
									color: "gray",
								}}
							>
								Request for password reset
							</h1>
						</div>
						<CustomInput
							name="email"
							type="text"
							id="email"
							onChange={handleChange(setEmail)}
							placeholder="Email"
							label="Email Address"
						/>

						<div
							style={{
								display: "flex",
								alignItems: "flex-start",
								marginTop: "20px",
								marginBottom: "15px",
								justifyContent: "space-between",
								flexDirection: "row",
								alignContent: "center",
								width: "15rem",
								margin: "auto",
							}}
						>
							<div>
								<button
									onClick={handleLogin}
									class="select-option sonic-btn"
									style={{
										padding: "10px 20px",
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
										marginLeft: "-6.978rem",
									}}
								>
									Reset
								</button>
							</div>
							<div>
								<Link
									to="/signin"
									style={{
										padding: "10px 20px",
										border: "none",
										outline: "none",
										transition:
											"background-color 0.3s ease-in-out, color 0.3s ease-in-out",
										fontFamily: "Arial, sans-serif",
										fontSize: "16px",
										lineHeight: "1.5",
										color: "gray",
										cursor: "pointer",
									}}
								>
									Back to login
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-6 d-flex align-items-center justify-content-center ">
					<div className="image-container "></div>
				</div>
			</div>
		</div>
	);
}
