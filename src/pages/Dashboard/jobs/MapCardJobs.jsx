import React, { useEffect, useState } from "react";
import LargeCard from "../../../components/card/LargeCard";
import LargeCardNotPaid from "../../../components/card/LargeCardNotPaid";
import axiosInstance from "../../../api/axiosInstance";
import { Spin } from "antd";

const MapCardJobs = ({path}) => {
	const [data, setData] = useState([]);
	const [subscription, setSubscription] = useState(false);
	const [loading, setLoading] = useState(false); // Add loading state here

	const fetchJobs = async () => {
		setLoading(true);
		try {
			const res = await axiosInstance.get("/job");

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

	// const handleClick = async (fav) => {
	// 	try {
	// 		const res = await axiosInstance.post("/user/favourites", {
	// 			id: fav
	// 		});
	// 		if (res.status === 201) {
	// 			displaySuccessNotification(`${res.data.message}`);
	// 		} else {
	// 			displayErrorNotification(`${res.data.message}`);
	// 		}
	// 		console.log(res.data.message, "===");
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	const truncateText = (text, maxWords) => {
		const wordsArray = text.split(" ");
		if (wordsArray.length > maxWords) {
			return wordsArray.slice(0, maxWords).join(" ") + "...";
		} else {
			return text;
		}
	};

	if (loading) {
		// Render a loading state while data is being fetched
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					marginTop: "9rem"
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
		<div style={{ width: "100%", marginBottom: "20rem" }}>
			{data.length === 0 ? (
				<div style={{ textAlign: "center" }}>No Jobs Currently</div>
			) : (
				data.map((dta) =>
					subscription ? (
						<LargeCard
							award={dta.salary}
							title={truncateText(dta.title, 4)}
							formatDate={dta.deadline}
							type="Salary"
							subText={truncateText(dta.about, 5)}
							about={dta.about}
							link={dta.link}
						/>
					) : (
						<LargeCardNotPaid
							award={dta.salary}
							formatDate={dta.deadline}
							type="Salary"
							path={path}
						/>
					)
				)
			)}
		</div>
	);
};

export default MapCardJobs;
