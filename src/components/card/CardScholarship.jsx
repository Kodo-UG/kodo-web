import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { BsSpeedometer2 } from "react-icons/bs";

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
				width: "100%",
				// height: "13rem",
				borderRadius: "0.5rem",
				cursor: "pointer",
				marginLeft: "-1rem",
				marginBottom: "3rem"
			}}
			onClick={() => history.push("/payment")}
		>
			<div
				className="card-heade"
				style={{
					background: "#1c2755",
					color: "white",
					padding: "0.2rem",
					borderTopLeftRadius: "0.5rem",
					borderTopRightRadius: "0.5rem"
				}}
			>
				<div className="d-flex align-items-center justify-content-between">
					<div className="w-25">
						<img
							src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689778138/Screenshot_from_2023-07-19_17-44-49-removebg-preview_yrvnz2.png"
							alt=""
							style={{ maxWidth: "100%", height: "auto" }}
						/>
					</div>
					<div
						className="w-75 d-flex flex-column align-items-start justify-content-center "
						style={{
							//   marginTop: "1rem",
							//   background: "green",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between"
						}}
					>
						<p
							style={{
								fontWeight: "bold",
								color: "white",
								// background: "red",
								width: "100%",

								fontSize: "14px",
								paddingTop: "0.2rem"
							}}
						>
							Upgrade Account Required
							<br />
							<span
								style={{
									color: "white",
									fontWeight: "normal",
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between"
								}}
							>
								Access all matched <br /> scholarships{" "}
								<IoIosArrowForward
									size={25}
									style={{ color: "white" }}
								/>
							</span>
						</p>
					</div>
				</div>
			</div>

			<div className="card-body" style={{ height: "6.5rem" }}>
				<div className="d-flex justify-content-between align-items-center">
					<div className="d-flex flex-column align-items-center">
						<p className="mb-1">Award</p>
						<p
							style={{
								color: "#1c2755",
								fontWeight: "bold",
								fontSize: "18px"
							}}
						>
							{award}
						</p>
					</div>
					<div className="d-flex flex-column align-items-center">
						<p className="mb-1">Deadline</p>
						<p
							style={{
								color: "#1c2755",
								fontWeight: "bold",
								fontSize: "18px"
							}}
						>
							{formattedDate}
						</p>
					</div>
					<div className="d-flex flex-column align-items-center">
						<p className="mb-1">Effort</p>
						<BsSpeedometer2 size={30} style={{ color: "#1c2755" }} />
					</div>
				</div>
			</div>
		</Card>
	);
};

export default CardScholarship;
