import React, { Suspense, lazy, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useMediaQuery } from "@uidotdev/usehooks";
import axios from "axios";

import { Button } from "antd";
import { MdArrowForwardIos } from "react-icons/md";
import { SiFiles } from "react-icons/si";
import { useHistory } from "react-router-dom";
import { BiRefresh } from "react-icons/bi";
import MatchedCard from "./MatchedCard";

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
						<MatchedCard title="scholarships" total={302000} />

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
