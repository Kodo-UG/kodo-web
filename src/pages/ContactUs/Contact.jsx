import { useMediaQuery } from "@uidotdev/usehooks";
import React from "react";

const Contact = () => {
	const isSm = useMediaQuery("only screen and (max-width : 768px)");
	const isMd = useMediaQuery(
	  "only screen and (min-width : 769px) and (max-width : 992px)"
	);
	const isLg = useMediaQuery(
	  "only screen and (min-width : 993px) and (max-width : 1200px)"
	);
	const isEl = useMediaQuery(
	  "only screen and (min-width : 1201px)"
	);
	const MyData = [
		{
			tittle: "Phone Number",
			value: "8080 - 8795 - 986524",
			icon: "https://res.cloudinary.com/itgenius/image/upload/v1695107550/contact-icon1_gdvdso.png"
		},
		{
			tittle: "Email Address",
			value: "demo123@gmail.com",
			icon: "https://res.cloudinary.com/itgenius/image/upload/v1695107550/contact-icon2_yoi7is.png"
		},
		{
			tittle: "Office Address",
			value: "6391 Elgin St. Celina, Delaware 10299",
			icon: "https://res.cloudinary.com/itgenius/image/upload/v1695107550/contact-icon3_dgt9su.png"
		},
	];
	return (
		<div
			style={{
				// height: "100vh",
				width: "100%",
				display:  "flex",
				
				justifyContent: "center",
				alignItems: "center",
				position: "relative",
				 // Create a single column of equal width
				
			}}
		>
			{/* big box */}
			<div
				style={{
					background: "#1c2755",
					height: isMd? "75vh": "85vh",
					// width: "75vw",
					width: "100%",
					borderRadius: isSm? "25px": "55px",
					display: isSm ? "grid": "flex",
					padding: isSm ? "1rem" : "",

				gridTemplateColumns: "1fr",
				}}
			>
				<div
					style={{
						width: isSm? "100%" : "50%",
						background: "",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column"
					}}
				>
					{
						MyData.map((data)=>
						<div
						style={{
							display: "flex",
							height: "5rem",
							width: isSm? "100%" :  "75%",
							margin: isSm ? "" : "3rem" || isMd? "1rem":"3rem",
							// background: "red",
							padding: "0.2rem",
						}}
					>
						{/* icon */}
						<div
							style={{
								background: "white",
								width: isMd? "4rem": "6rem",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								marginRight: "1rem",
								borderRadius: "10px",
								height: "100%",
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
								width: isSm? "80%":  "50%"|| isMd? "":"",
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
									fontSize: isSm ? "" : "1.9rem"|| isMd? "1.5rem":"",
									lineHeight: isSm ? "" :  "25px"
								}}
							>
								{data.tittle}
							</p>

							<p
								style={{
									fontWeight: "normal",
									fontSize: isSm ? "10px" :  "1.3rem"|| isMd? "":"",
									lineHeight: isSm ?  "" : "25px"
								}}
							>
								{data.value}
							</p>
						</div>
					</div>
						)
					}
					
					{/* second */}

					
				</div>
				<div
					style={{
						background: isSm? "": "#f4971d",
						height: isSm? "":  "100%",
						width: isSm ? "100%" : "50%",
						float: "right",
						borderRadius: isSm ? "": " 0px 25px 25px 0px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					<div
						style={{
							display: "flex",
							
							marginLeft: isSm? "" : "-17rem" || isMd? "-8rem": "",
							boxShadow: ""
						}}
					>
						<img
							width={`${isSm? "100%" : "670" || isMd? "370": ""}`}
							height={`${isSm? "100%" : "550"}`}
							src="https://script.viserlab.com/paymenthub/assets/images/frontend/contact_us/64185bc2bc6111679317954.png"
							alt=""
						/>
					</div>
				</div>
				{/* img */}
			</div>
		</div>
	);
};

export default Contact;
