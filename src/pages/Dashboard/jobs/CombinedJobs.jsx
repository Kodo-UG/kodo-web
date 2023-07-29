import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import axiosInstance from "../../../api/axiosInstance";
import CardScholarship from "../../../components/card/CardScholarship";
import CardScholarshipSubscribed from "../../../components/card/CardScholarshipSubscribed";

const CombinedJobs = () => {
	const [data, setData] = useState([]);
	const [subscription, setSubscription] = useState(false);
	const [loading, setLoading] = useState(false);
	const isSm = useMediaQuery("only screen and (max-width : 700px)");
	const getJobs = async () => {
		setLoading(true);
		try {
			let res = await axiosInstance.get("/job");

			setData(res.data.data);
			setSubscription(res.data.subscription);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getJobs();
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
					marginBottom: isSm ? "10rem" : "",
					width: "100%"
				}}
			>
				{data.map((dta) =>
					!subscription ? (
						<CardScholarshipSubscribed
							key={dta.id}
							award={dta.salary}
							deadline={dta.deadline}
							subscription={subscription}
							cardTitle={dta.title}
							id={dta._id}
							link={dta.link}
							about={dta.about}
							type="Salary"
						/>
					) : (
						<CardScholarship
							key={dta._id}
							award={dta.salary}
							deadline={dta.deadline}
							text="jobs"
							type="Salary"
						/>
					)
				)}

				{/* {!subscription &&
					data?.map((dta) => (
						<CardScholarship
							key={dta.id}
							award={dta.award}
							deadline={dta.deadline}
							subscription={subscription}
							text="jobs"
							type="Salary"
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
						/>
					))} */}
			</div>
		</div>
	);
};

export default CombinedJobs;
