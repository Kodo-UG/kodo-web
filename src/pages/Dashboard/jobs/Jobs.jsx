import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import axiosInstance from "../../../api/axiosInstance";
import { MdArrowForwardIos } from "react-icons/md";
import { useHistory } from "react-router-dom";
import CombinedJobs from "./CombinedJobs";
import MapCardJobs from "./MapCardJobs";
import { BsFillBriefcaseFill } from "react-icons/bs";

const Jobs = () => {
	const [data, setData] = useState([]);
	const [subscription, setSubscription] = useState(false);
	const [loading, setLoading] = useState(false);
	const [newPath, setNewPath] = useState("");

	const history = useHistory();

	const isSm = useMediaQuery("only screen and (max-width : 700px)");
	const isMd = useMediaQuery(
		"only screen and (min-width : 700px) and (max-width : 1250px)"
	);

	const fetchJobs = async () => {
		setLoading(true);
		try {
			const res = await axiosInstance.get("/job");
			console.log(res, "+++++++");
			setData(res.data.data);
			setSubscription(res.data.subscription);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchJobs();
	}, []);

	useEffect(() => {
		const currentPath = window.location.pathname;
		setNewPath(currentPath);
	}, []);

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
								width: isSm ? "100%" : "" | isMd ? "50%" : "35%",
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
								<BsFillBriefcaseFill
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
									15,500 Jobs In Matches
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
								</p>{" "}
								<p
									style={{
										fontFamily: "Poppins",
										fontSize: isSm ? "14px" : "16px",
										fontWeight: 500,
										color: "#000",
										marginTop: isSm ? "-1rem" : ""
									}}
								>
									Jobs
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
							{data.length < 0 ? (
								<div
									style={{
										letterSpacing: "2px",
										color: "rgb(74,74,74)"
									}}
								>
									No Available Jobs
								</div>
							) : (
								<div
									style={{
										letterSpacing: "2px",
										color: "#1c2755",
										fontSize: isSm ? "1.6rem" : ""
									}}
								>
									Latest Jobs
								</div>
							)}
						</div>

						{isSm ? (
							<CombinedJobs path={newPath} />
						) : (
							<MapCardJobs path={newPath} />
						)}
					</div>
				</section>
			</div>
		</div>
	);
};

export default Jobs;
