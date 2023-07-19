import React from "react";
import MyHeader from "../Dashboard/Header";
import Menu from "../Dashboard/Menu";
import Footer from "../Dashboard/Footer";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useHistory } from "react-router-dom";

const Favorite = () => {
	const isSm = useMediaQuery("only screen and (max-width : 1000px)");
	const history = useHistory();

	return (
		<>
			<div class="wrapper">
				<MyHeader />
				<Menu />
				<div
					style={{
						marginTop: "3.8rem",
						width: isSm ? "100%" : "86%",
						marginLeft: isSm ? "" : "17.8rem",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "9rem",
						backgroundColor: "#125875"
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
				<Footer />
			</div>

			{/* <Dashboard /> */}
		</>
	);
};

export default Favorite;
