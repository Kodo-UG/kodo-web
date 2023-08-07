import React, { Suspense, lazy } from "react";
import { useQuery } from "react-query";
import { useMediaQuery } from "@uidotdev/usehooks";
import axios from "axios";

import { Button } from "antd";
import { MdArrowForwardIos } from "react-icons/md";
import { SiFiles } from "react-icons/si";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { BiRefresh } from "react-icons/bi";
import axiosInstance from "../../../api/axiosInstance";
import { useEffect } from "react";
import { useState } from "react";

const CombinedScholarshipCard = React.lazy(() =>
	import("./CombinedScholarshipCard")
);
const MapCardData = React.lazy(() => import("./MapCardData"));

const Scholarship = () => {
	const history = useHistory();
	const ifnx = JSON.parse(localStorage.getItem("userData"));

	const isSm = useMediaQuery("only screen and (max-width : 700px)");
	const isMd = useMediaQuery(
		"only screen and (min-width : 700px) and (max-width : 1250px)"
	);

	const [jobCount, setJobCount] = useState(20800);

	const config = {
		headers: {
		  "Content-Type": "application/json",
		  Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
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
			const res = await axios.get("https://demo.kodoscholarships.com/api/v1/scholarship",config);
			return res?.data;
		} catch (error) {
			throw new Error(error.message || "Failed to fetch scholarships");
		}
	}
	return (
		<div>
			<div className="content-wrapper">
				<section style={{ marginBottom: "3rem" }} className="content">
					<div
						style={{
							display: "flex ",
							flexDirection: "column",
							width: "100%",
							alignItems: "center",
							padding: "2px",
							justifyContent: "center"
						}}
					>
						<div
							onClick={() => history.push("/profile")}
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
									{jobCount.toLocaleString()} In Matches
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
									scholarships.
								</p>
							</div>
						</div>

						<div
							style={{
								fontWeight: 300,
								fontSize: "30px",
								margin: "5px",
								padding: "10px",
								fontFamily: "Poppins",
								lineHeight: "45px"
							}}
						>
							{isError ? (
								<div
									style={{
										letterSpacing: "2px",
										color: "rgb(74,74,74)"
									}}
								>
									Error: Failed to fetch scholarships
								</div>
							) : isLoading ? (
								<div
									style={{
										letterSpacing: "2px",
										color: "rgb(74,74,74)"
									}}
								>
									Loading...
								</div>
							) : (
								<div
									style={{
										letterSpacing: "2px",
										color: "#1c2755",
										fontSize: isSm ? "1.6rem" : ""
									}}
								>
									{!ifnx.user.appType ||
									ifnx.user.appType !== "scholarship"
										? " "
										: "Latest Scholarships"}
									<br />
									{!ifnx.user.appType ||
									ifnx.user.appType !== "scholarship" ? (
										<span
											style={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												cursor: "pointer",
												color: "#fff",
												backgroundColor: "#1c2755",
												fontSize: "1.5rem",
												padding: "0 9px"
											}}
											onClick={() => history.push("/stepper")}
										>
											Register for scholarships
										</span>
									) : (
										<span
											style={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												cursor: "pointer",
												color: "#fff",
												backgroundColor: "#1c2755",
												fontSize: "1.5rem"
											}}
											onClick={() => refetch()}
										>
											Refresh <BiRefresh />
										</span>
									)}
								</div>
							)}
						</div>
						{isSm ? <CombinedScholarshipCard /> : <MapCardData />}
					</div>
				</section>
			</div>
		</div>
	);
};

export default Scholarship;
