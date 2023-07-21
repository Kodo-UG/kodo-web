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

const Favorite = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const isSm = useMediaQuery("only screen and (max-width : 700px)");
	const isMd = useMediaQuery(
		"only screen and (min-width : 700px) and (max-width : 1250px)"
	);
	const isLg = useMediaQuery(
		"only screen and (min-width : 1250px) and (max-width : 1300px)"
	);
	const isXl = useMediaQuery("only screen and (min-width : 1201px)");
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
		// background: "yellow",
		width: "100%",
		padding: "2rem",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center"
	};

	return (
		<>
			<div
				class="wrapper "
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
				<MyHeader />
				<Menu />
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
						marginBottom: "4rem",
						marginLeft: isLg ? "18rem" : ""
					}}
				>
					Favorite Scholarships
				</div>

				{data?.length === 0 ? (
					<div
						style={{
							textAlign: "center",
							marginTop: "4rem",
							fontFamily: "Poppins",
							cursor: "pointer",
							marginLeft: isSm ? "" : "6rem"
						}}
					>
						<h4
							style={{
								fontSize: "18px",
								letterSpacing: "1.6px",
								fontWeight: "400",
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
							title={dta.favourite?.title}
							formatDate={dta.favourite?.deadline}
							subText={truncateText(dta.favourite?.about, 6)}
							award={dta.favourite?.award}
							link={dta.favourite?.link}
							onClick={() => handleDelete(dta._id)}
						/>
					))
				)}
				<Footer />
			</div>

			{/* <Dashboard /> */}
		</>
	);
};

export default Favorite;
