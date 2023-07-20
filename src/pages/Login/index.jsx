import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { displayErrorMessage, displaySuccessMessage } from "../../utils/Toast";
import "./custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiEnvelope } from "react-icons/bi";
import { CiLock } from "react-icons/ci";
export default function Login() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [loading, setLoading] = useState(false);

	const history = useHistory();

	const handleChange = (setState) => (e) => {
		setState(e.target.value);
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const data = await axios.post(
				"https://demo.kodoscholarships.com/api/v1/auth/login",
				{ email, password }
			);
			if (data.status == "201") {
				localStorage.setItem("userData", JSON.stringify(data.data));
				displaySuccessMessage("Login successful");
				localStorage.setItem("token", data.data.token);
				history.push("/scholars");
				localStorage.setItem("status", data.data.user.status);
			} else {
				displayErrorMessage("Login Failed");
			}
		} catch (error) {
			displayErrorMessage("Invalid username or password", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section
			className="fxt-template-layout1 "
			style={{ backgroundColor: "#fff", width: "100%" }}
		>
			<div
				className="container-fluid "
				style={{ display: "flex", backgroundColor: "#fff" }}
			>
				<div
					className="col-md-6 col-12 "
					style={{
						backgroundColor: "#fff",
						width: "100%",
						height: "100vh"
					}}
				>
					<div
						style={{ backgroundColor: "#fff", height: "100%" }}
						className="fxt-content"
					>
						<div className="fxt-header">
							<Link href="/" className="fxt-logo">
								<img src="logo-kodo.png" alt="Logo" />
							</Link>
							<div className="fxt-page-switcher">
								<p className="switcher-text1 active">Log In</p>
								<Link to="/admissions" className="switcher-text1">
									Sign Up
								</Link>
							</div>
						</div>
						<div className="fxt-form">
							<h2 style={{ textAlign: "start" }}>Log In</h2>
							<p>Log in to continue to Kodo</p>
							<form onSubmit={handleLogin}>
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
											type="email"
											className="form-control"
											name="email"
											value={email}
											placeholder="Email Address"
											required="required"
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
											onChange={handleChange(setEmail)}
										/>

										<i>
											{" "}
											<BiEnvelope
												style={{
													fontSize: "17px",
													color: "#a1a1a1"
												}}
											/>
										</i>
									</div>
								</div>
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
											type="password"
											className="form-control"
											name="password"
											value={password}
											placeholder="password"
											required="required"
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

										<i>
											{" "}
											<CiLock
												style={{
													fontSize: "17px",
													color: "#a1a1a1"
												}}
											/>
										</i>
									</div>
								</div>
								
								<div className="form-group">
									<div className="fxt-transformY-50 fxt-transition-delay-3">
										<div className="fxt-content-between">
											<button className="fxt-btn-fill" type="submit">
												Log in
											</button>
											<Link
												to="/forgot/password"
												className="switcher-text2"
											>
												Forgot Password
											</Link>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div
					className="col-md-6 col-12 fxt-none-767 fxt-bg-img"
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
