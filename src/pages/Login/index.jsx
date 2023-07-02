import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import apiClient from "../../api/apiClient";
import axios from "axios";
import { displayErrorMessage, displaySuccessMessage } from "../../utils/Toast";
import Spinner from "../../components/spinner";

export default function Login() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [loading, setLoading] = useState(false);

	const history = useHistory();
	const handleChange = (setState) => (e) => {
		setState(e.target.value);
	};

	const handleLogin = async () => {
		setLoading(true);
		try {
			const data = await axios.post(
				"http://165.227.139.53/api/v1/auth/login",
				{ email, password }
			);
			if (data.status == "201") {
				localStorage.setItem("userData", JSON.stringify(data.data));
				displaySuccessMessage("Login successful");
				history.push("/db");
				console.log(data, "LOGIN DATA");
			} else {
				displayErrorMessage("Login Failed");
			}
		} catch (error) {
			console.log(error);
			displayErrorMessage("Invalid username or password");
		} finally {
			setLoading(false);
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
											fontSize: "24px",
										}}
									>
										Login |{" "}
									</h1>
									<Link
										to="/admissions"
										style={{
											color: "gray",
											transition:
												"background-color 0.3s ease-in-out, color 0.3s ease-in-out",
											fontFamily: "Arial, sans-serif",
											fontSize: "24px",
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
								Log in
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
								Log in to continue to Kodo
							</h1>
						</div>

						<div style={{ marginTop: "20px", marginBottom: "20px" }}>
							<div
								className="form-group"
								style={{ display: "flex", flexDirection: "column" }}
							>
								<label htmlFor="email">Email</label>
								<input
									id="email"
									name="email"
									placeholder="Email"
									onChange={handleChange(setEmail)}
									required=""
									type="text"
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
									// onChange={handleCountryChange} // Add onChange event handler
								/>
							</div>
						</div>
						<div style={{ marginBottom: "10px" }}>
							<div
								className="form-group"
								style={{ display: "flex", flexDirection: "column" }}
							>
								<label htmlFor="password">Password</label>
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
								justifyContent: "space-between",
								flexDirection: "row",
							}}
						>
							<div>
								{loading ? (
									<Spinner />
								) : (
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
										Login
									</button>
								)}
							</div>
							<div>
								<Link
									to="/forgot/password"
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
									Forgot Password
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
