import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import LargeCard from "../../../components/card/LargeCard";
import LargeCardNotPaid from "../../../components/card/LargeCardNotPaid";

const MapCardData = () => {
	const [data, setData] = useState([]);
	const [subscription, setSubscription] = useState(false);
	const [loading, setLoading] = useState(false);
	const [expiry, setExpiry] = useState(false);

	const getScholarship = async () => {
		setLoading(true);
		try {
			const token = localStorage.getItem("token");
			const headers = {
				Authorization: `Bearer ${token}`
			};

			let res = await axios.get(
				"https://demo.kodoscholarships.com/api/v1/scholarship",
				{
					headers
				}
			);

			setData(res.data.data);
			setSubscription(res.data.subscription);
		} catch (error) {
			// Handle   error here
			throw error;
		} finally {
			setLoading(false);
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
		<div style={{ width: "100%" }}>
			{subscription &&
				data.map((dta) => (
					<LargeCard
						key={dta.id}
						title={dta.title}
						formatDate={dta.deadline}
						award={dta.award}
						subText={truncateText(dta.about, 7)}
						about={dta.about}
						link={dta.link}
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
