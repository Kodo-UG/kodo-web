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
	const getScholarship = async () => {
		try {
			const res = await axiosInstance.get("/scholarship");

			setData(res.data.data);
			setSubscription(res.data.subscription);
		} catch (error) {
			throw error;
		}
	};

	const handleClick = async (fav) => {
		try {
			const res = await axiosInstance.post("/user/favourites", {
				id: fav
			});
			if (res.status == 201) {
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

	return (
		<div style={{ width: "100%", marginBottom: "46rem" }}>
			{subscription &&
				data.map((dta) => (
					<LargeCard
						key={dta.id}
						title={dta.title}
						formatDate={dta.deadline}
						award={dta.award}
						subText={truncateText(dta.about, 6)}
						about={dta.about}
						link={dta.link}
						onClick={() => handleClick(dta._id)}
					/>
				))}
			{!subscription &&
				data.map((dta) => (
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
