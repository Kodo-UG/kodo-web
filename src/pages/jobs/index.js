import React from "react";
import MyHeader from "../Dashboard/Header";
import Menu from "../Dashboard/Menu";
import Footer from "../Dashboard/Footer";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";
import { Link } from "react-router-dom";

const Jobs = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const isSm = useMediaQuery("only screen and (max-width : 700px)");

	const isLg = useMediaQuery(
		"only screen and (min-width : 1250px) and (max-width : 1300px)"
	);
	const jobStatus = JSON.parse(localStorage.getItem("userData"));

	console.log(jobStatus.user.jobAppType);

	const truncateText = (text, maxWords) => {
		const wordsArray = text?.split(" ");
		if (wordsArray?.length > maxWords) {
			return wordsArray.slice(0, maxWords).join(" ") + "...";
		} else {
			return text;
		}
	};
	const smallScreenStyle = {
		width: "100%",
		padding: "2rem",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center"
	};

	if (loading) {
		// Render a loading state while data is being fetched
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					marginTop: "18rem"
				}}
			>
				<img
					style={{
						width: "7rem ",
						height: "7rem",
						justifyContent: "center",
						alignItems: "center"
					}}
					src="https://res.cloudinary.com/itgenius/image/upload/v1690434896/Kodo_Scholarship_Loader_rgev72.gif"
					alt="middle"
				/>{" "}
			</div>
		);
	}

	return (
		<>
			<div
				class="wrapper "
				style={
					isSm
						? smallScreenStyle
						: {
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center"
						  }
				}
			>
				<MyHeader />
				<Menu />
				<div
					style={{
						marginTop: "6rem",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						width: "100%",
						color: "#1C2755",
						fontWeight: "bold",
						fontSize: "2rem",
						border: "2px",
						fontFamily: "poppins; serif",
						marginBottom: "4rem",
						marginLeft: isLg ? "19rem" : ""
					}}
				>
					{jobStatus.user.jobAppType
						? "Available Jobs"
						: "Not Registered To Receive Jobs"}
				</div>
				<Link to="/JobStep1">
					<div
						style={{
							backgroundColor: "#1C2755",
							padding: "8px",
							color: "#fff",
							borderRadius: 6,
							fontWeight: "bold"
						}}
					>
						Reister To Recieve Jobs
					</div>
				</Link>

				<Footer />
			</div>

			{/* <Dashboard /> */}
		</>
	);
};

export default Jobs;
