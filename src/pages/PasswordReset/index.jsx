import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import apiClient from "../../api/apiClient";
import axios from "axios";
import { displayErrorMessage, displaySuccessMessage } from "../../utils/Toast";

export default function PasswordReset() {
	const [password, setPassword] = useState();
	const token = new URLSearchParams(window.location.search).get("token");
	console.log(token);
	const history = useHistory();
	const handleChange = (setState) => (e) => {
		setState(e.target.value);
	};

	const handleLogin = async () => {
		try {
			const data = await axios.post(
				`http://165.227.139.53/api/v1/auth/password/reset/${token}`,
				{ password }
			);
			if (data.status == "200") {
				displaySuccessMessage("Passsword changed successfully");
				history.push("/signin");
			} else {
				displayErrorMessage("Password Reset failed");
			}
		} catch (error) {
			console.log(error);
			displayErrorMessage(error.message);
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
									<img src="logo-kodo.png" width={200} alt="logo" />
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
								Reset New Password
							</h1>
						</div>

						<div style={{ marginBottom: "10px" }}>
							<div
								className="form-group"
								style={{ display: "flex", flexDirection: "column" }}
							>
								<label
									htmlFor="password"
									style={{ marginBottom: "10px" }}
								>
									New Password
								</label>
								<input
									id="password"
									name="password"
									placeholder="Password"
									required=""
									type="password"
									style={{
										borderRadius: "10px",
										width: "500px",
										padding: "10px",
										border: "1px solid #ccc",
										outline: "none",
										transition: "box-shadow 0.3s ease-in-out",
										boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
										fontFamily: "Arial, sans-serif",
										fontSize: "16px",
										lineHeight: "1.5",
										color: "#333",
									}}
									onChange={handleChange(setPassword)}
								/>
							</div>
						</div>
						<div
							style={{
								display: "flex",
								alignItems: "flex-start",
								marginTop: "20px",
								marginBottom: "15px",
								justifyContent: "space-evenly",
								flexDirection: "row",
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
									}}
								>
									Confirm
								</button>
							</div>
							<div>
								<h1
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
									Sign up
								</h1>
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
