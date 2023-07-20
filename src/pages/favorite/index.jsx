import React from "react";
import MyHeader from "../Dashboard/Header";
import Menu from "../Dashboard/Menu";
import Footer from "../Dashboard/Footer";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import { useEffect } from "react";
import { useMemo } from "react";
import LargeCard from "../../components/card/LargeCard";
import LargeCardFavourite from "../../components/card/LargeCardFavourite";

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
			// console.log(response.data.data, "heyyyyy");
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useMemo(() => {
		fetchFavorites();
	}, []);

	console.log(data, "DATAAAAAA");

	const truncateText = (text, maxWords) => {
		const wordsArray = text.split(" ");
		if (wordsArray.length > maxWords) {
			return wordsArray.slice(0, maxWords).join(" ") + "...";
		} else {
			return text;
		}
	};

	return (
		<>
			<div class="wrapper">
				<MyHeader />
				<Menu />
				<div
					style={{
						marginTop: "3.8rem",
						width: isSm ? "100%" : "" | isMd ? "80%" : "",
						marginLeft: isSm ? "" : "17.8rem" | isMd ? "" : "17",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: "#1d2755"
					}}
					class="alert alert-success"
					role="alert"
				>
					<div
						style={{ textAlign: "left", width: "40%", cursor: "pointer" }}
					>
						<i
							onClick={() => history.push("/scholars")}
							style={{
								fontWeight: "bolder",
								fontSize: "3rem"
							}}
							class="fa fa-arrow-circle-left"
							aria-hidden="true"
						></i>
					</div>

					<div style={{ width: "60%", textAlign: "left" }}>
						<h4
							style={{
								fontWeight: "bolder",
								fontSize: "3.2rem",
								fontFamily: "Poppins",
								letterSpacing: "1.6px"
							}}
							class="alert-heading"
						>
							Saved
						</h4>
					</div>
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
							title={dta.favourite.title}
							formatDate={dta.favourite.deadline}
							subText={truncateText(dta.favourite.about, 6)}
							award={dta.favourite.award}
							link={dta.favourite.link}
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
