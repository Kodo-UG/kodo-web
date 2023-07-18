import axios from "axios";
import React, { useState, useEffect } from "react";
import CustomTab from "../../../components/tab";

import { useMediaQuery } from "@uidotdev/usehooks";
import CombinedScholarshipCard from "./CombinedScholarshipCard";
import LargeCard from "../../../components/card/LargeCard";
import MapCardData from "./MapCardData";
import { Button } from "antd";

const Scholarship = () => {
	const [data, setData] = useState([]);
	const [subscription, setSubscription] = useState(false);
	const [loading, setLoading] = useState(false);
	const [count, setCount] = useState(1);

	const isSm = useMediaQuery("only screen and (max-width : 900px)");
	const isMd = useMediaQuery(
		"only screen and (min-width : 900px) and (max-width : 1002px)"
	);
	const isLg = useMediaQuery(
		"only screen and (min-width : 993px) and (max-width : 1200px)"
	);
	const isXl = useMediaQuery("only screen and (min-width : 1201px)");

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

	let handleFetchMore = async () => {
		setLoading(true);
		setCount(count + 1);
		try {
			const token = localStorage.getItem("token");
			const headers = {
				Authorization: `Bearer ${token}`
			};

			let res = await axios.get(
				`https://demo.kodoscholarships.com/api/v1/scholarship?page=${count}`,
				{
					headers
				}
			);

			console.log(res, "loaded more dara");

			setData(res.data.data);
			setSubscription(res.data.subscription);
		} catch (error) {
			// Handle   error here
			throw error;
		} finally {
			setLoading(false);
		}
	};

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
								padding: "10px",
								marginTop: "4rem"
							}}
						>
							{data.length === 0 ? (
								"No Available scholarships for this program"
							) : (
								<CustomTab total={data.length} />
							)}
						</div>
						{isSm ? <CombinedScholarshipCard /> : <MapCardData />}
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							padding: "1rem"
						}}
					>
						{data.length > 4 ? (
							<Button
								style={{
									width: "12rem",
									backgroundColor: "#125875",
									color: "#fff",
									fontWeight: "bold"
								}}
								onClick={() => handleFetchMore()}
							>
								Load More
							</Button>
						) : (
							""
						)}
					</div>
				</section>
			</div>
		</div>
	);
};

export default Scholarship;
