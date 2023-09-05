/* eslint-disable jsx-a11y/anchor-is-valid */
import { useMediaQuery } from "@uidotdev/usehooks";
import React from "react";
import { BsBookmark } from "react-icons/bs";

const ScholarshipDetails = () => {
	const isMd = useMediaQuery(
		"only screen and (min-width : 700px) and (max-width : 1250px)"
	);

	return (
		<div
			style={{
				width: "100%",
				justifyContent: "center",
				alignItems: "center",
				paddingLeft: "2rem",
				marginLeft: "5rem",
				background: "white",
				display: "flex",
				flexDirection: "column",
				marginTop: "2rem",
				height: "100%",
				top: "3rem"
			}}
			className="shadow-md"
		>
			<div
				style={{
					height: "8rem",
					color: "#1c2755",
					fontWeight: "bold",
					display: "flex",
					alignItems: "center",
					// justifyContent: "space-between",
					marginTop: "1rem"
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyItems: "space-between"
					}}
				>
					<div>
						<h5
							style={{
								marginTop: "0px",
								fontWeight: "bold",
								fontSize: "1.9rem",
								fontFamily: "Poppins",
								letterSpacing: "2px"
							}}
						>
							Nitro Pay For College No-Essay Scholarship
						</h5>
					</div>
					<div>
						<BsBookmark
							// onClick={onClick}
							style={{
								height: "20px",
								width: "20px",
								fontWeight: "bolder"
							}}
						/>
					</div>
				</div>
			</div>
			<div
				style={{
					padding: "1rem",
					width: "60%",
					// marginLeft: "4rem",
					justifyContent: "center"
				}}
			>
				<div className="card-body" style={{ height: "6rem" }}>
					<div className="d-flex justify-content-between align-items-center">
						<div className="d-flex flex-column align-items-center">
							<p className="mb-1">Award</p>
							<p
								style={{
									marginTop: "0px",
									fontWeight: "bold",
									color: "#125875",
									fontSize: "1.5rem",
									fontFamily: "Poppins",
									letterSpacing: "2px"
								}}
							>
								$4000000
							</p>
						</div>
						<div className="d-flex flex-column align-items-center">
							<p className="mb-1">Deadline</p>
							<p
								style={{
									marginTop: "0px",
									fontWeight: "bold",
									color: "#125875",
									lineHeight: "20px",
									fontSize: "1.5rem",
									fontFamily: "Poppins",
									letterSpacing: "2px"
								}}
							>
								9/1/2023
							</p>
						</div>
						<div
							style={{ marginTop: "-1rem" }}
							className="d-flex flex-column align-items-center"
						>
							<p className="mb-1">Effort</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="17"
								fill="none"
							>
								<path
									d="M29.961 13.783a16.45 16.45 0 0 0-1.52-4.985 16.05 16.05 0 0 0-4.38-5.482C17.505-1.992 7.604-.834 2.694 6.118a14.45 14.45 0 0 0-2.31 5.105c-.43 1.84-.499 3.749-.202 5.616-.21-3.603 1.06-7.31 3.444-9.954 4.753-5.419 13.292-5.827 18.264-.562a11.999 11.999 0 0 1 3.298 7.91v.008c-.006.325.051.649.17.952.118.302.294.578.518.81a2.371 2.371 0 0 0 3.437 0A2.483 2.483 0 0 0 30 14.24a2.531 2.531 0 0 0-.039-.458"
									fill="#125875"
								></path>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="4"
								height="14"
								fill="none"
								deg="-90"
								style={{
									position: "absolute",
									marginLeft: "2px",
									marginTop: "27px",
									transform: "rotate(-90deg)",
									height: "22px"
								}}
							>
								<path
									d="M2.416.288S.992 11.25.993 11.753c.002.394.156.772.43 1.05a1.442 1.442 0 0 0 2.068-.003 1.49 1.49 0 0 0 .427-1.053c0-.52-1.502-11.459-1.502-11.459Z"
									fill="#125875"
								></path>
							</svg>
						</div>
					</div>
				</div>
				<div
					style={{
						textAlign: "center",
						marginTop: "1rem",
						width: "100%",
						height: "6rem",
						color: "white",
						fontWeight: "bolder",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						fontSize: "16px"
					}}
				>
					<a
						href="#"
						style={{
							backgroundColor: "#EB1E5E",
							border: "none",
							color: "white",
							padding: "1rem",
							width: "100%",
							borderRadius: "5px",
							fontWeight: "bolder",
							fontSize: "16px"
						}}
						// onClick={() => handleApply(id)}
					>
						Apply
					</a>
				</div>
				<div>
					<h4
						style={{
							fontWeight: "600",
							fontSize: isMd ? "1.1" : "2rem",
							letterSpacing: "1px",
							textAlign: "left",
							color: "#1c2755"
						}}
					>
						About
					</h4>
					<div className="scrollable-container">
						<p
							style={{
								color: "#4e4b66",
								textAlign: "justify",
								letterSpacing: "1px",
								fontSize: "19px"
							}}
						>
							Paying for college can be daunting. With so many options
							available, navigating financial aid and student loan
							resources is no trivial matter, and a wrong turn can mean
							far more debt than you bargained for. Thankfully adding to
							our ongoing list of no-essay scholarships, Nitro College is
							here to help. We’ve partnered with Nitro to create this
							exclusive no-essay scholarship for anyone thinking through
							how to pay for college. Nitro is a leading financial aid
							and loan resource platform, guiding you on everything from
							the FAFSA to best practices for federal and private loans.
							By applying, you’ll automatically get registered for Nitro,
							setting you up for success in funding your education in the
							most effective way. It will be awarded to applicants who
							get the most out of the Nitro platform.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ScholarshipDetails;
