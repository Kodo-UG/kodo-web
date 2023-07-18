import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CardScholarship from "../../../components/card/CardScholarship";
import CardScholarshipSubscribed from "../../../components/card/CardScholarshipSubscribed";

const CombinedScholarshipCard = () => {
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

	useEffect(() => {
		getScholarship();
	}, []);
	return (
		<div>
			<div 
				style={{
					//
					padding: "1rem",
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					alignItems: "center",
					marginLeft: "2.5rem"
				}}
			>
				{!subscription &&
					data?.map((dta) => (
						<CardScholarship
							key={dta.id}
							award={dta.award}
							deadline={dta.deadline}
							subscription={subscription}
						/>
					))}
				{subscription &&
					data?.map((dta) => (
						<CardScholarshipSubscribed
							key={dta.id}
							award={dta.award}
							deadline={dta.deadline}
							subscription={subscription}
							cardTitle={dta.title}
							id={dta._id}
							link={dta.link}
							about={dta.about}
							// days={}
						/>
					))}

				{/* <Row justify="center" gutter={[16, 16]}></Row> */}
			</div>
		</div>
	);
};

export default CombinedScholarshipCard;
