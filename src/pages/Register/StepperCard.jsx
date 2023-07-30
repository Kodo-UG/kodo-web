import { useMediaQuery } from "@uidotdev/usehooks";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function StepperCard({ list }) {
	const isSm = useMediaQuery("only screen and (max-width : 700px)");

	return (
		<section className=" w-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-center">
						<h4
							style={{
								marginBottom: isSm ? "20px" : "60px",
								fontFamily: "Jost, sans-serif",
								fontWeight: 600,
								fontSize: "2rem",
								marginTop: isSm ? "9rem" : ""
							}}
							className="welcome-title"
						>
							Welcome Back
						</h4>
					</div>
				</div>
				<div className="row">
					{list.map((data) => (
						<div style={{ padding: "1rem" }} className="col-lg-6">
							<div
								className="card custom-card"
								style={{
									backgroundColor: "#FFFFFF",
									boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
									borderRadius: "10px",
									overflow: "hidden"
									// marginBottom: "30px"
								}}
							>
								<div
									className="card-header d-flex align-items-center justify-content-center"
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										height: "50px",
										padding: "0 20px",
										backgroundColor: "#f6f6f6"
									}}
								>
									<img
										src="https://www.kodoscholarships.com/logo.png"
										style={{
											width: "80px",
											height: "auto",
											marginRight: "10px"
										}}
										alt="Logo"
										className="logo"
									/>
									<span
										className="card-title"
										style={{
											fontSize: "16px",
											fontWeight: "bold",
											color: "#222"
										}}
									>
										{data.title}
									</span>
								</div>
								<div className="card-body" style={{ padding: "20px" }}>
									<p
										className="card-text text-center"
										style={{
											fontSize: "14px",
											color: "#555",
											marginBottom: "20px"
										}}
									>
										{data.text}
									</p>
									<Link
										to={`${data.link}`}
										className="btn ss-btn w-100"
										style={{
											height: "55px",
											backgroundColor: "#ec1d64",
											border: "2px solid #ec1d64",
											color: "#fff",
											fontWeight: "400",
											fontSize: "16px",
											lineHeight: "16px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center"
										}}
									>
										{data.Button}
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default StepperCard;
