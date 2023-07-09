import React from "react";
import "./index.css";

const Forgot = () => {
	return (
		<div>
			<section className="contact-area pt-60 pb-120 p-relative fix">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div className="card custom-card">
								<div className="card-header d-flex align-items-center justify-content-center">
									<span className="card-title">Forgot Password</span>
								</div>
								<div className="card-body">
									<form
										method="POST"
										action="https://kodoscholarships.com/forgot-password"
									>
										<input
											type="hidden"
											name="_token"
											defaultValue="Eieq0MOIpyceXIatEtFUgwqzdzjRDq0zPwDEPQu3"
										/>{" "}
										<div
											style={{ paddingBottom: 30 }}
											className="form-group"
										>
											{/* <label for="email">Email address</label> */}
											<input
												style={{ border: "none" }}
												type="email"
												className="form-control"
												id="email"
												name="email"
												required
												autofocus
												placeholder="Enter email"
											/>
										</div>
										<button
											type="submit"
											className="btn btn-primary w-100"
										>
											Reset Password
										</button>
									</form>
								</div>
								<div className="card-footer text-center">
									<a href="https://kodoscholarships.com/login">
										Back to Login
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Forgot;
