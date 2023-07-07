import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutKodo() {
	return (
		<div className="container-fluid">
			<div className="row">
				<div
					className="col-lg-6"
					style={{ background: "blue", padding: 0, minWidth: "360px" }}
				>
					<div style={{ width: "100%", height: "100%" }}>
						<img
							src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688676545/graduate_amiewj.jpg"
							alt="graduant-image"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
							}}
						/>
					</div>
				</div>
				<div
					className="col-lg-6"
					style={{
						background: "#032E3F",
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
								background: "#FF7350",
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
							/>
						</div>
						<h2
							className="font-weight-bold"
							style={{ fontSize: "2.5rem", marginBottom: "0.7rem" }}
						>
							Kodo Jobs
						</h2>
						<p>
							Looking for a remote job as a developer, customer service
							rep, recruiter, designer or sales professional? Browse
							openings in those categories and more . We hand curate a
							list to showcase the best remote job opportunities in the
							most recruited job categories. Find a remote job here to
							launch your work anywhere career.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutKodo;
