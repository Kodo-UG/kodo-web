import React, { useEffect, useState } from "react";
import LargeCard from "../../../components/card/LargeCard";
import LargeCardNotPaid from "../../../components/card/LargeCardNotPaid";
import axiosInstance from "../../../api/axiosInstance";
import {
	displayErrorNotification,
	displaySuccessNotification
} from "../../../utils/Toast";

const MapCardData = () => {
	const [data, setData] = useState([]);
	const [subscription, setSubscription] = useState(false);
	const [loading, setLoading] = useState(false); // Add loading state here

	const getScholarship = async () => {
		setLoading(true);
		try {
			const res = await axiosInstance.get("/scholarship");
			setData(res.data.data);
			setSubscription(res.data.subscription);
			// setLoading(false); // Set loading to false once the data is fetched
		} catch (error) {
			throw error;
		} finally {
			setLoading(false);
		}
	};

	const handleClick = async (fav) => {
		try {
			const res = await axiosInstance.post("/user/favourites", {
				id: fav
			});
			if (res.status === 201) {
				displaySuccessNotification(`${res.data.message}`);
			} else {
				displayErrorNotification(`${res.data.message}`);
			}
			console.log(res.data.message, "===");
		} catch (error) {
			console.log(error);
		}
	};

	const truncateText = (text, maxWords) => {
		const wordsArray = text.split(" ");
		if (wordsArray.length > maxWords) {
			return wordsArray.slice(0, maxWords).join(" ") + "...";
		} else {
			return text;
		}
	};

	useEffect(() => {
		getScholarship();
	}, []);

	if (loading) {
		// Render a loading state while data is being fetched
		return (
			<div
				style={{
					textAlign: "center",
					fontWeight: "bold",
					fontSize: "2rem",
					justifyContent: "center"
				}}
			>
				Loading scholarships...
			</div>
		);
	}

	return (
		<div style={{ width: "100%", marginBottom: "20rem" }}>
			{subscription
				? data.map((dta) => (
						<LargeCard
							key={dta._id}
							title={dta.title}
							formatDate={dta.deadline}
							award={dta.award}
							subText={truncateText(dta.about, 6)}
							about={dta.about}
							id={dta._id}
							link={dta.link}
							onClick={() => handleClick(dta._id)}
						/>
				  ))
				: data.map((dta) => (
						<LargeCardNotPaid
							key={dta.id}
							title={dta.title}
							formatDate={dta.deadline}
							award={dta.award}
							subText={truncateText(dta.about, 7)}
							about={dta.about}
							link={dta.link}
						/>
				  ))}
		</div>
	);
};

export default MapCardData;
