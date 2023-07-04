/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Row } from "antd";
import ScholarshipCard from "../../../components/card/Scholarshipcard";

const Scholarship = () => {
	const [data, setData] = useState([]);
	const [subscription, setSubscription] = useState(false);
	const getScholarship = async () => {
		try {
			const token =
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlbm8xOTIwMkBnbWFpbC5jb20iLCJ1c2VySWQiOiI2NDk2YzE4ZDc3ZGYzMTBkMWU3OWRmNWEiLCJpYXQiOjE2ODc2MDE1OTR9.W_HZn7Z8diK-D3Qjfyg_C8JTcnC2QRjALVh3Dr7Aick";
			const headers = {
				Authorization: `Bearer ${token}`,
			};

			let res = await axios.get("http://165.227.139.53/api/v1/scholarship", {
				headers,
			});

			setData(res.data.data);
			// console.log(res.data.data);
			setSubscription(res.data.subscription);
			// console.log(res.data.subscription);
		} catch (error) {
			// Handle the error here
		}
	};

	useEffect(() => {
		getScholarship();
	}, []);

	return (
		<div>
			<div className="content-wrapper">
				<section className="content">
					<div>
						<div style={{ padding: "20px" }}>Available scholarships</div>
						{/* Small boxes (Stat box) */}
						<div
							style={{
								display: "grid",
								gridColumn: " 3",
							}}
						>
							{data?.map((dta) => (
								<ScholarshipCard
									key={dta.id}
									cardTitle={dta.title}
									award={dta.award}
									deadline={dta.deadline}
									text={dta.about}
									subscription={subscription}
								/>
							))}

							{/* <Row justify="center" gutter={[16, 16]}></Row> */}
						</div>
					</div>
				</section>
				{/* /.content */}
			</div>
		</div>
	);
};

export default Scholarship;
