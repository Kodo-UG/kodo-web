// import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import axios from "axios";
// import { displayErrorMessage, displaySuccessMessage } from "../../utils/Toast";
// import "./index.css";

// export default function PasswordReset() {
// 	const [password, setPassword] = useState();
// 	const token = new URLSearchParams(window.location.search).get("token");
// 	const history = useHistory();
// 	const handleChange = (setState) => (e) => {
// 		setState(e.target.value);
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const data = await axios.post(
// 				`https://demo.kodoscholarships.com/api/v1/auth/password/reset/${token}`,
// 				{ password }
// 			);
// 			if (data.status == "200") {
// 				displaySuccessMessage("Passsword changed successfully");
// 				history.push("/signin");
// 			} else {
// 				displayErrorMessage("Password Reset failed");
// 			}
// 		} catch (error) {
// 			displayErrorMessage(error.message);
// 		}
// 	};
// 	return (
// 		<section className=" fxt-template-layout1">
// 			<div className="container-fluid " style={{ display: "flex" }}>
// 				<div
// 					className="col-md-6 col-12 fxt-bg-color b"
// 					style={{ backgroundColor: "#fff" }}
// 				>
// 					<div className="fxt-content">
// 						<div className="fxt-header">
// 							<Link href="/" className="fxt-logo">
// 								<img
// 									src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688759275/logo-kodo-removebg-preview_zz6r2w.png"
// 									alt="Logo"
// 								/>
// 							</Link>
// 							<div className="fxt-page-switcher">
// 								<Link to="/signin" className="switcher-text1 active">
// 									Log In
// 								</Link>
// 								<Link to="/login" className="switcher-text1">
// 									Sign Up
// 								</Link>
// 							</div>
// 						</div>
// 						<div className="fxt-form">
// 							<h2 style={{ textAlign: "start" }}>Reset New Password</h2>
// 							<form onSubmit={handleSubmit}>
// 								<div className="form-group">
// 									<div className="fxt-transformY-50 fxt-transition-delay-1">
// 										<input
// 											id="password"
// 											name="password"
// 											placeholder="Password"
// 											onChange={handleChange(setPassword)}
// 											className="form-control"
// 										/>
// 										<i className="flaticon-envelope"></i>
// 									</div>
// 								</div>
// 								<div className="form-group">
// 									<div className="fxt-transformY-50 fxt-transition-delay-3">
// 										<div className="fxt-content-between">
// 											<button type="submit" className="fxt-btn-fill">
// 												Comfirm
// 											</button>
// 											<Link to="/signin" className="switcher-text2">
// 												Back to Login
// 											</Link>
// 										</div>
// 									</div>
// 								</div>
// 							</form>
// 						</div>
// 					</div>
// 				</div>
// 				<div
// 					className="col-md-6 col-12 fxt-none-767 fxt-bg-img "
// 					style={{
// 						backgroundImage:
// 							'url("https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688935613/bg1-l_rvlan9.jpg")',
// 						backgroundPosition: "center",
// 						backgroundSize: "cover"
// 					}}
// 				></div>
// 			</div>
// 		</section>
// 	);
// }

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { displayErrorMessage, displaySuccessMessage } from "../../utils/Toast";
import { BiEnvelope } from "react-icons/bi";
import axios from "axios";
import axiosInstance from "../../api/axiosInstance";

export default function PasswordReset() {
	const [password, setPassword] = useState();
	const token = new URLSearchParams(window.location.search).get("token");
	const history = useHistory();
	const handleChange = (setState) => (e) => {
		setState(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const data = await axiosInstance.post(
				`/auth/password/reset/${token}`,
				{
					password
				}
			);
			console.log(data);
			if (data.status == "200") {
				displaySuccessMessage("Passsword changed successfully");
				history.push("/signin");
			} else {
				displayErrorMessage("Password Reset failed");
			}
		} catch (error) {
			displayErrorMessage(error.message);
		}
	};
	return (
		<section
			className=" fxt-template-layout1"
			style={{ background: "white" }}
		>
			<div className="container-fluid " style={{ display: "flex" }}>
				<div
					className="col-md-6 col-12 "
					style={{
						background: "#fff",
						height: "100vh"
					}}
				>
					<div
						className="fxt-content"
						style={{
							background: "white",
							height: "100%",
							marginTop: "6rem"
						}}
					>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between"
							}}
							className="fxt-header"
						>
							<Link to="/" className="fxt-logo">
								<img
									src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688759275/logo-kodo-removebg-preview_zz6r2w.png"
									alt="Logo"
								/>
							</Link>
							<div
								style={{ color: "black", marginTop: "3rem" }}
								className="fxt-page-switcher"
							>
								<Link to="/signin" className="switcher-text1 active">
									Log In
								</Link>
								<Link
									style={{ paddingLeft: 2, color: "black" }}
									to="/login"
									className="switcher-text1"
								>
									| Sign Up
								</Link>
							</div>
						</div>
						<div style={{ marginTop: "6rem" }} className="fxt-form">
							<h2 style={{ textAlign: "start", fontSize: "2rem" }}>
								Reset PassWord
							</h2>
							<p>Proceed With Password Reset</p>
							<form onSubmit={handleSubmit}>
								<div
									className="form-group"
									style={{
										position: "relative",
										zIndex: "1",
										marginBottom: "15px"
									}}
								>
									<div
										className="fxt-transformY-50 fxt-transition-delay-1 "
										style={{
											WebkitTransitionDelay: "1s",
											OTransitionDelay: "1s",
											transitionDelay: "1s",
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between"
										}}
									>
										<input
											type="text"
											className="form-control"
											name="password-reset"
											value={password}
											placeholder="Enter New Password"
											required
											style={{
												borderRadius: "0",
												minHeight: "40px",
												WebkitBoxShadow: "none",
												boxShadow: "none",
												border: "0",
												borderBottom: "1px solid #e7e7e7",
												padding: "10px 30px 10px 0",
												color: "#111111",
												backgroundColor: "#ffffff"
											}}
											onChange={handleChange(setPassword)}
										/>
									</div>
								</div>

								<div className="form-group">
									<div className="fxt-transformY-50 fxt-transition-delay-3">
										<div
											style={{
												justifyContent: "space-between",
												display: "flex"
											}}
											className="fxt-content-between"
										>
											<button
												style={{
													backgroundColor: "red",
													color: "white",
													padding: 4,
													borderRadius: 5
												}}
												type="submit"
												className="fxt-btn-fill"
											>
												Confirm Reset
											</button>
											<Link to="/signin" className="switcher-text2">
												Back to Login
											</Link>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div
					className="col-md-6 col-12 fxt-none-767 fxt-bg-img "
					style={{
						backgroundImage:
							'url("https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688935613/bg1-l_rvlan9.jpg")',
						backgroundPosition: "center",
						backgroundSize: "cover"
					}}
				></div>
			</div>
		</section>
	);
}
