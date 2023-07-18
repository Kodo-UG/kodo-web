import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const CardScholarship = ({
	cardTitle,
	text,
	award,
	deadline,
	subscription
}) => {
	const date = new Date(deadline);
	const formattedDate = date.toLocaleDateString();

	const history = useHistory();

	return (
		<Card
			className="shadow-xl"
			style={{
				width: "24rem",
				height: "13rem",
				borderRadius: "0.5rem",
				cursor: "pointer",
				marginRight: "3rem",
				marginBottom: "3rem"
			}}
			onClick={() => history.push("/payment")}
		>
			<div
				className="card-header"
				style={{ background: "#125875", color: "white" }}
			>
				<div className="d-flex align-items-center justify-content-between">
					<div className="w-25">
						<img
							src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688646453/Screenshot_from_2023-07-06_14-10-36-removebg-preview_1_dxweaz.png"
							alt=""
							style={{ maxWidth: "100%", height: "auto" }}
						/>
					</div>
					<div
						className="w-75 d-flex flex-column align-items-start justify-content-center pl-3"
						style={{
							marginTop: "1rem"
						}}
					>
						<p style={{ fontWeight: "bold", color: "#fff" }}>
							Upgrade To View Details
							<br />
							<span
								style={{
									fontWeight: "normal",
									color: "#fff",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									letterSpacing: ".4px"
								}}
							>
								Access all matched scholarships{" "}
								<IoIosArrowForward
									style={{ color: "#fff", fontWeight: "bold" }}
								/>
							</span>
						</p>
					</div>
				</div>
			</div>

			<div className="card-body" style={{ height: "6.5rem" }}>
				<div className="d-flex justify-content-between align-items-center">
					<div className="d-flex flex-column align-items-center">
						<p style={{ textAlign: "left" }} className="mb-1">
							Award
						</p>
						<p
							style={{
								marginTop: "0px",
								fontWeight: "bold",
								color: "#125875",
								fontSize: ".8rem",
								fontFamily: "Poppins",
								letterSpacing: "2px"
							}}
						>
							{award}
						</p>
					</div>
					<div className="d-flex flex-column align-items-center">
						<p className="mb-1">Deadline</p>
						<p
							style={{
								marginTop: "0px",
								fontWeight: "bold",
								color: "#125875",
								fontSize: ".8rem",
								fontFamily: "Poppins",
								letterSpacing: "2px"
							}}
						>
							{formattedDate}
						</p>
					</div>
					<div className="d-flex flex-column align-items-center">
						<p className="mb-1">Effort</p>
						<img
							src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688650069/Screenshot_from_2023-07-06_14-10-36-removebg-preview__2_-removebg-preview_du6wl6.png"
							alt="svg"
							style={{
								objectFit: "cover",
								maxWidth: "70%",
								maxHeight: "70%"
							}}
						/>
					</div>
				</div>
			</div>
		</Card>
	);
};

export default CardScholarship;
