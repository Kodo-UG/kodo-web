import React, { useEffect, useState } from "react";
import CardScholarship from "../../../components/card/CardScholarship";
import CardScholarshipSubscribed from "../../../components/card/CardScholarshipSubscribed";
import { useMediaQuery } from "@uidotdev/usehooks";
import axiosInstance from "../../../api/axiosInstance";

const CombinedScholarshipCard = () => {
	const [data, setData] = useState([]);
	const [subscription, setSubscription] = useState(false);
	const [loading, setLoading] = useState(false);
	const isSm = useMediaQuery("only screen and (max-width : 700px)");
	const getScholarship = async () => {
		setLoading(true);
		try {
			let res = await axiosInstance.get("/scholarship");

			setData(res.data.data);
			setSubscription(res.data.subscription);
		} catch (error) {
			throw error;
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getScholarship();
	}, []);

	if (loading) {
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					marginTop: "13rem"
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
		<div>
			<div
				style={{
					//
					padding: "1rem",
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					alignItems: "center",
					marginLeft: "2.5rem",
					marginBottom: isSm ? "20rem" : ""
				}}
			>
				{!subscription &&
					data?.map((dta) => (
						<CardScholarship
							key={dta.id}
							award={dta.award}
							deadline={dta.deadline}
							subscription={subscription}
							text="scholarships"
							type="Award"
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
							type="Award"
						/>
					))}
			</div>
		</div>
	);
};

export default CombinedScholarshipCard;
