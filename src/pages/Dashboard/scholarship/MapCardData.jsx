import React, { useEffect, useState } from "react";
import LargeCard from "../../../components/card/LargeCard";
import LargeCardNotPaid from "../../../components/card/LargeCardNotPaid";
import axiosInstance from "../../../api/axiosInstance";
import {
	displayErrorNotification,
	displaySuccessNotification
} from "../../../utils/Toast";
import { Spin } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const MapCardData = () => {
	const [data, setData] = useState([]);
	const [subscription, setSubscription] = useState(false);
	const [pageNumber, setPageNumber] = useState(1);
	const [hasMore, setHasMore] = useState(true);

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`
		}
	};

	const getScholarship = async () => {
		try {
			const res = await axios.get(
				`https://demo.kodoscholarships.com/api/v1/scholarship?page=${pageNumber}`,
				config
			);
			setData(res?.data?.data);
			setSubscription(res.data.subscription);
		} catch (error) {
			console.log(error);
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
		} catch (error) {
			console.log(error);
		}
	};

	const fetchData = async () => {
		setPageNumber(pageNumber + 1);
		try {
			const res = await axios.get(
				`https://demo.kodoscholarships.com/api/v1/scholarship?page=${pageNumber}`,
				config
			);

			if (res?.data?.data.length === 0) {
				setHasMore(false); // Update hasMore based on whether more data is available
			}
			setData(data.concat(res?.data?.data));
			setSubscription(res.data.subscription);
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
		<div style={{ width: "100%", marginBottom: "20rem" }}>
			<InfiniteScroll
				dataLength={data.length}
				next={fetchData}
				hasMore={hasMore}
				loader={
					<h4 style={{ textAlign: "center", padding: "1rem" }}>
						Loading...
					</h4>
				}
				endMessage={
					<h4 style={{ textAlign: "center", padding: "1rem" }}>
						<b>Thats all we have for you</b>
					</h4>
				}
			>
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
								type="Award"
							/>
					  ))}
			</InfiniteScroll>
		</div>
	);
};

export default MapCardData;
