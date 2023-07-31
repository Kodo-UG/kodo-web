import React from "react";
import MyHeader from "../Dashboard/Header";
import Menu from "../Dashboard/Menu";
import Footer from "../Dashboard/Footer";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import { useMemo } from "react";
import LargeCardFavourite from "../../components/card/LargeCardFavourite";
import {
	displayErrorNotification,
	displaySuccessNotification
} from "../../utils/Toast";
import { Spin } from "antd";

const Favorite = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const isSm = useMediaQuery("only screen and (max-width : 700px)");

	const isLg = useMediaQuery(
		"only screen and (min-width : 1250px) and (max-width : 1300px)"
	);

	const history = useHistory();

	const fetchFavorites = async () => {
		setLoading(true);
		try {
			let response = await axiosInstance.get("/user/favourites");
			setData(response?.data?.data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const handleDelete = async (id) => {
		try {
			const deleteRes = await axiosInstance.delete(`/user/favourites/${id}`);
			fetchFavorites();
			if (deleteRes.status == 201) {
				displaySuccessNotification(`${deleteRes.data.message}`);
			} else {
				displayErrorNotification(`${deleteRes.data.message}`);
			}
			// console.log(deleteRes);
		} catch (error) {
			console.log(error);
		} finally {
		}
	};

	useMemo(() => {
		fetchFavorites();
	}, []);

	const truncateText = (text, maxWords) => {
		const wordsArray = text?.split(" ");
		if (wordsArray?.length > maxWords) {
			return wordsArray.slice(0, maxWords).join(" ") + "...";
		} else {
			return text;
		}
	};
	const smallScreenStyle = {
		width: "100%",
		padding: "2rem",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center"
	};

	if (loading) {
		// Render a loading state while data is being fetched
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					marginTop: "18rem"
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
		<>
			<div
				class=""
				style={
					isSm
						? smallScreenStyle
						: {
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center"
						  }
				}
			>
				
				<div
					style={{
						marginTop: "6rem",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						width: "100%",
						color: "#1C2755",
						fontWeight: "bold",
						fontSize: "2rem",
						border: "2px",
						fontFamily: "poppins; serif",
						marginBottom: ".1rem",
						marginLeft: isLg ? "19rem" : ""
					}}
				>
					Favorite Scholarships
				</div>

				{data?.length === 0 ? (
					<div
						style={{
							textAlign: "center",
							marginTop: ".4rem",
							fontFamily: "Poppins",
							cursor: "pointer",
							marginLeft: isSm ? "" : "1rem"
						}}
					>
						<h4
							style={{
								fontSize: "18px",
								letterSpacing: "1.6px",
								fontWeight: "300",
								lineHeight: "27px"
							}}
						>
							Start saving scholarships now!
						</h4>
						<p
							onClick={() => history.push("/scholars")}
							style={{
								fontSize: "14px",
								letterSpacing: "1.6px",
								fontWeight: 400,
								lineHeight: "20px",
								color: "rgb(74,74,74)"
							}}
						>
							Back to matches
						</p>
					</div>
				) : (
					data?.map((dta) => (
						<LargeCardFavourite
							title={truncateText(dta.favourite?.title, 4)}
							formatDate={dta.favourite?.deadline}
							subText={truncateText(dta.favourite?.about, 8)}
							award={dta.favourite?.award}
							link={dta.favourite?.link}
							onClick={() => handleDelete(dta._id)}
							about={dta.favourite?.about}
						/>
					))
				)}
				<Footer />
			</div>
		</>
	);
};

export default Favorite;
