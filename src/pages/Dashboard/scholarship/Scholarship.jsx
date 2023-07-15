import axios from "axios";
import React, { useState, useEffect } from "react";
import CardScholarship from "../../../components/card/CardScholarship";
import CardScholarshipSubscribed from "../../../components/card/CardScholarshipSubscribed";
import Spinner from "../../../components/spinner";
import CustomTab from "../../../components/tab";

const Scholarship = () => {
	const [data, setData] = useState([]);
	const [subscription, setSubscription] = useState(false);
	const [loading, setLoading] = useState(false);
	const [expiry, setExpiry] = useState(false);

	const deadline = new Date();

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
			<div className="content-wrapper">
				<section className="content">
					<div
						style={{
							display: "flex ",
							flexDirection: "column",
							width: "100%",
							alignItems: "center",
							justifyContent: "center"
						}}
					>
						<div
							style={{
								fontWeight: "",
								fontSize: "20px",
								margin: "5px",
								padding: "10px"
							}}
						>
							{data.length === 0 ? (
								"No Available scholarships for this program"
							) : (
								<CustomTab total={data.length} />
							)}
						</div>
						{/* Small boxes (Stat box) */}
						{loading ? (
							<Spinner />
						) : (
							<div
								style={{
									//
									padding: "1rem",
									display: "flex",
									flexWrap: "wrap",
									justifyContent: "flex-start",
									alignItems: "flex-start"
								}}
							>
								{!subscription &&
									data?.map((dta) => (
										<CardScholarship
											key={dta.id}
											award={dta.award}
											deadline={!expiry ? "Expired" : dta.deadline}
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
						)}
					</div>
				</section>
				{/* /.content */}
			</div>
		</div>
	);
};

export default Scholarship;
