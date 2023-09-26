import { useMediaQuery } from "@uidotdev/usehooks";
import React from "react";

const Contact = () => {
	const isSm = useMediaQuery("only screen and (max-width : 900px)");
	const isMd = useMediaQuery(
		"only screen and (min-width : 900px) and (max-width : 1230px)"
	);
	const isLg = useMediaQuery(
		"only screen and (min-width : 1230px) and (max-width : 1400px)"
	);
	const isEl = useMediaQuery("only screen and (min-width : 1201px)");
	const MyData = [
		{
			tittle: "Phone Number",
			value: "+46 72 848 83 13",
			icon: "https://res.cloudinary.com/itgenius/image/upload/v1695107550/contact-icon1_gdvdso.png"
		},
		{
			tittle: "Email Address",
			value: "info@kodoscholarships.com",
			icon: "https://res.cloudinary.com/itgenius/image/upload/v1695107550/contact-icon2_yoi7is.png"
		},
		{
			tittle: "Office Address",
			value: "Oppegårdsstråket 5 A,lgh 1804, 191 60 Sollentuna",
			icon: "https://res.cloudinary.com/itgenius/image/upload/v1695107550/contact-icon3_dgt9su.png"
		}
	];
	return (
		<div
			style={{
				minHeight: "90vh",
				width: "100%",
				display: "flex",
				// background: "green",
				justifyContent: "center",
				alignItems: "center",
				paddingTop: "2rem",
				paddingBottom: "2rem"

				// Create a single column of equal width
			}}
		>
			{/* big box */}
			<div
				style={{
					background: "#1c2755",
					minHeight: "75vh",
					// width: "75vw",

					width: "100%",
					borderRadius: isSm ? "25px" : "55px",
					display: isSm ? "grid" : "flex",
					padding: isSm ? "1rem" : "",

					alignItems: "center",
					justifyContent: "end",
					gap: isSm ? "2rem" : "6rem",
					gridTemplateColumns: "1fr"
				}}
			>
				<div
					style={{
						width: isSm ? "100%" : "",
						padding: "1.5rem",
						display: "grid",
						gridTemplateColumns: "1fr",
						gap: "2rem",
						marginRight: "1rem"
					}}
				>
					{MyData.map((data) => (
						<div
							style={{
								display: "flex",
								height: "5rem",
								width: "100%",
								marginBottom: isSm
									? ""
									: "3rem" || isMd
									? "1rem"
									: "3rem"
								// background: "red",
								// padding: "0.2rem",
							}}
						>
							{/* icon */}
							<div
								style={{
									background: "white",
									width: "5rem",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									marginRight: "1rem",
									borderRadius: "10px",
									height: "5rem"
								}}
							>
								<img
									src={data.icon}
									style={{
										objectFit: "contain",
										padding: "0.5rem"
									}}
									alt="icon"
								/>
							</div>
							{/* words */}

							<div
								style={{
									// background: "yellow",
									color: "white",
									// width: isSm ? "80%" : "50%" || isMd ? "" : "",
									display: "flex",
									flexDirection: "column",
									alignContent: "space-between",
									justifyContent: "space-between"
									// padding: "0.5rem"
								}}
							>
								<p
									style={{
										fontWeight: "normal",
										fontSize: isSm ? "" : "1.5rem",
										lineHeight: isSm ? "" : "25px"
									}}
								>
									{data.tittle}
								</p>

								<p
									style={{
										fontWeight: "normal",
										// fontSize: isSm ? "" : "1.rem",
										lineHeight: isSm ? "" : "25px"
									}}
								>
									{data.value}
								</p>
							</div>
						</div>
					))}

					{/* second */}
				</div>
				<div
					style={{
						background: isSm ? "" : "#f4971d",
						height: isSm ? "" : "75vh",
						width: isSm ? "100%" : "45%",
						// float: "right",
						borderRadius: isSm ? "" : " 0px 25px 25px 0px",

						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					<div
						style={{
							display: "flex",
							width: "100%",
							height: "90%",
							marginLeft: isSm ? "" : "-17rem" || isMd ? "-10vw" : "",
							borderRadius: isSm ? "" : " 0px 25px 25px 0px",
							marginTop: "2rem",
							boxShadow: ""
						}}
					>
						<img
							// width={`${isSm? "100%" : "670" || isMd? "370": ""}`}
							// height={`${isSm? "100%" : "550"}`}
							style={{
								width: "100%",
								height: "90%",
								objectFit: "cover",
								borderRadius: isSm ? "" : " 25px 25px 25px 25px"
							}}
							src="https://res.cloudinary.com/itgenius/image/upload/v1695225476/pexels-jep-gambardella-7690079_wjdbgz.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
