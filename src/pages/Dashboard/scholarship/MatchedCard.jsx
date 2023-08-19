import { useMediaQuery } from "@uidotdev/usehooks";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { SiFiles } from "react-icons/si";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";

const MatchedCard = ({ title, total }) => {
	const history = useHistory();
	const ifnx = JSON.parse(localStorage.getItem("userData"));

	const isSm = useMediaQuery("only screen and (max-width : 700px)");
	const isMd = useMediaQuery(
		"only screen and (min-width : 700px) and (max-width : 1250px)"
	);

	const [jobCount, setJobCount] = useState(`${total}`);

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`
		}
	};

	useEffect(() => {
		const updateJobCount = () => {
			setJobCount((prevCount) => prevCount + 1);
		};

		const intervalId = setInterval(updateJobCount, 3600000); // 1 hour = 3600000 milliseconds

		return () => clearInterval(intervalId);
	}, []);

	const { data, isLoading, isError, refetch } = useQuery(
		"/scholarship",
		getScholarship
	);

	async function getScholarship() {
		try {
			const res = await axios.get(
				"https://demo.kodoscholarships.com/api/v1/scholarship",
				config
			);
			return res?.data;
		} catch (error) {
			throw new Error(error.message || "Failed to fetch scholarships");
		}
	}
	return (
		<>
			<div
				// onClick={() => history.push("/profile")}
				style={{
					width: isSm ? "100%" : isMd ? "50%" : "35%",
					background: "white",
					display: "flex",
					marginTop: "4rem",
					boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
					justifyContent: "center",
					alignItems: "center",
					cursor: "pointer",
					borderRadius: "4px"
				}}
			>
				<div
					style={{
						width: isSm ? "" : "100%"
					}}
				>
					<SiFiles
						size={60}
						style={{
							color: "#1c2755",
							padding: isSm ? "1rem" : "0.5rem"
						}}
					/>
				</div>
				<div
					style={{
						width: "100rem",
						padding: "0.5rem",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center"
					}}
				>
					<p
						style={{
							fontFamily: "Poppins",
							fontSize: isSm ? "16px" : "24px",
							color: "#1c2755",
							fontWeight: "bold",
							marginTop: isSm ? "1rem" : "",
							marginBottom: isSm ? "-0.1rem" : ""
						}}
					>
						${jobCount.toLocaleString()} In Matches
					</p>
					<p
						style={{
							fontFamily: "Poppins",
							fontSize: isSm ? "14px" : "16px",
							display: "flex",
							alignItems: "center",
							lineHeight: "1px",
							fontWeight: 500,
							textAlign: "justify",
							color: "#000",
							justifyContent: "space-between"
						}}
					>
						Update your profile to match to more
						<MdArrowForwardIos />
					</p>
					<p
						style={{
							fontFamily: "Poppins",
							fontSize: isSm ? "14px" : "16px",
							fontWeight: 500,
							color: "#000",
							marginTop: isSm ? "-1rem" : ""
						}}
					>
						{title}
					</p>
				</div>
			</div>
		</>
	);
};

export default MatchedCard;
