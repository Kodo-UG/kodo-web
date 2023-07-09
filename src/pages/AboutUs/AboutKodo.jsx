/* eslint-disable jsx-a11y/img-redundant-alt */


import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutKodo() {
	return (
		<div className="container-fluid">
			<div className="row">
				<div
					className="col-lg-6"
					style={{
						background: "#125875",
						color: "white",
						padding: "1rem",
						height: "90vh",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						minWidth: "360px",
					}}
				>
					<div
						style={{
							width: "90%",
							height: "100%",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							textAlign: "justify",
							fontSize: "1.2rem",
							minWidth: "360px",
						}}
					>
						<div
							style={{
								background: "#ec1d64",
								height: "5rem",
								width: "5rem",
								borderRadius: "50%",
								marginBottom: "1rem",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<img
								src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688676150/fea-icon01_sfnppb.png"
								alt="group svg"
								style={{
									objectFit: "cover",
									width: "72%",
									height: "72%",
								}}
								className="im"
							/>
						</div>
						<h2
							className="font-weight-bold"
							style={{ fontSize: "2.5rem", marginBottom: "0.7rem" }}
						>
							Kodo Scholarships
						</h2>
						<p>
							We were founded by a group of individuals who are
							passionate about making a difference in the world and who
							understand the transformative power of education. Through
							our work, we hope to create a brighter future. We are
							committed to building a community of lifelong learners and
							leaders who will shape the future of their continents and
							beyond.
						</p>
					</div>
				</div>
				<div
					className="col-lg-6 d-none d-lg-block"
					style={{ background: "blue", padding: 0, minWidth: "360px" }}
				>
					<div style={{ width: "100%", height: "100%" }}>
						<img
							src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688676546/doctor_gih7eh.jpg"
							alt="doctor-image"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutKodo;
