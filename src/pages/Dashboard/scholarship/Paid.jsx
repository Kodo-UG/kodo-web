// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { Row } from "antd";
// import ScholarshipCard from "../../../components/card/Scholarshipcard";
// import CardScholarship from "../../../components/card/CardScholarship";
// import CardScholarshipSubscribed from "../../../components/card/CardScholarshipSubscribed";

// const Paid = () => {
// 	const [data, setData] = useState([]);
// 	const [subscription, setSubscription] = useState(false);
// 	const [token, setToken] = useState();

// 	const getScholarship = async () => {
// 		try {
// 			const token =
// 				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlbm8xOTIwMkBnbWFpbC5jb20iLCJ1c2VySWQiOiI2NDk2YzE4ZDc3ZGYzMTBkMWU3OWRmNWEiLCJpYXQiOjE2ODc2MDE1OTR9.W_HZn7Z8diK-D3Qjfyg_C8JTcnC2QRjALVh3Dr7Aick";
// 			const headers = {
// 				Authorization: `Bearer ${token}`,
// 			};

// 			let res = await axios.get("https://demo.kodoscholarships.com/api/v1/scholarship", {
// 				headers,
// 			});

// 			setData(res.data.data);

// 			setSubscription(res.data.subscription);

// 		} catch (error) {
// 			throw error
// 		}
// 	};

// 	useEffect(() => {
// 		getScholarship();
// 	}, []);

// 	return (
// 		<div>
// 			<div className="content-wrapper">
// 				<section className="content">
// 					<div>
// 						<div
// 							style={{
// 								fontWeight: "",
// 								fontSize: "20px",
// 								margin: "5px",
// 								padding: "10px",
// 							}}
// 						>
// 							Available scholarships
// 						</div>
// 						{/* Small boxes (Stat box) */}
// 						<div
// 							style={{
// 								display: "grid",
// 								gridTemplateColumns:
// 									"repeat(auto-fit, minmax(300px, 1fr))",
// 								gap: "2rem",
// 							}}
// 						>
// 							{/* {data?.map((dta) => (
// 								<CardScholarship
// 									key={dta.id}
// 									award={dta.award}
// 									deadline={dta.deadline}
// 									subscription={subscription}
// 								/>
// 							))} */}
// 							{data?.map((dta) => (
// 								<CardScholarshipSubscribed
// 									key={dta.id}
// 									award={dta.award}
// 									deadline={dta.deadline}
// 									subscription={subscription}
// 									cardTitle={dta.title}
// 								/>
// 							))}

// 							{/* <Row justify="center" gutter={[16, 16]}></Row> */}
// 						</div>
// 					</div>
// 				</section>
// 				{/* /.content */}
// 			</div>
// 		</div>
// 	);
// };

// export default Paid;
