import React, { useState } from "react";
import { BsBookmark, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { Modal } from "antd";

function CardScholarshipSubscribed({
	cardTitle,
	text,
	award,
	deadline,
	subscription,
	link,
	about,
	id,
	days
}) {
	const date = new Date(deadline);
	const formattedDate = date.toLocaleDateString();
	const [visible, setVisible] = useState(false);

	const hanleModal = () => {
		setVisible(!visible);
	};
	return (
		<div
			onClick={() => setVisible(!visible)}
			className=" shadow-3xl "
			style={{
				width: "26.3rem",
				display: "flex",
				flexDirection: "column",
				height: "13rem",
				justifyContent: "space-between",
				background: "white",
				borderRadius: "0.5rem",
				boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
				cursor: "pointer",
				marginRight: "1rem",
				marginBottom: "3rem",
				fontFamily: "Arial, sans-serif"
			}}
		>
			<div
				style={{
					width: "100%",
					color: "#125875",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					borderTopLeftRadius: "0.5rem",
					borderTopRightRadius: "0.5rem",
					padding: ".7rem"
				}}
			>
				<div
					style={{
						width: "75%",
						padding: "0.4rem",
						alignItems: "center",
						justifyContent: "center"
					}}
				>
					<h4
						className=""
						style={{
							marginLeft: "0.4rem",
							fontWeight: "bold",
							fontFamily: "Poppins",
							letterSpacing: "2px",
							fontSize: "1.5rem"
						}}
					>
						{" "}
						{cardTitle}
					</h4>
				</div>
				<div
					style={{
						width: "25%",
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-evenly",
						fontWeight: "bold",
						opacity: 0.5
					}}
				>
					<span
						style={{
							fontSize: ".2rem",
							lineBreak: "auto",
							fontFamily: "Poppins",
							letterSpacing: "2px"
						}}
					>
						{days}
					</span>
					<BsBookmark
						style={{
							height: "20px",
							width: "20px",
							fontWeight: "bolder"
						}}
					/>
					<BsThreeDotsVertical style={{ height: "20px", width: "20px" }} />
				</div>
			</div>

			<div className="card-body" style={{ height: "6rem" }}>
				<div className="d-flex justify-content-between align-items-center">
					<div className="d-flex flex-column align-items-center">
						<p className="mb-1" style={{ color: "#a0a3bd" }}>
							Award
						</p>
						<p
							style={{
								color: "#125875",
								fontWeight: "bold",
								padding: ".1rem",
								lineHeight: "1.5rem",
								fontFamily: "Poppins",
								letterSpacing: "2.4px",
								fontSize: "16px"
							}}
						>
							{award}
						</p>
					</div>
					<div className="d-flex flex-column align-items-center">
						<p
							className="mb-1"
							style={{ color: "#a0a3bd", lineHeight: "1.5rem" }}
						>
							Deadline
						</p>
						<p
							style={{
								color: "#125875",
								fontWeight: "bold",
								padding: ".1rem",
								lineHeight: "1.5rem",
								fontFamily: "Poppins",
								letterSpacing: "2px",
								fontSize: "16px"
							}}
						>
							{formattedDate}
						</p>
					</div>
					<div
						style={{ marginTop: "-1.5rem" }}
						className="d-flex flex-column align-items-center"
					>
						<p className="mb-1" style={{ color: "#a0a3bd" }}>
							Effort
						</p>
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
								marginLeft: "-2px",
								marginTop: "25px",
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
			<div></div>

			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "end",
					width: "100%",
					paddingRight: "1rem",
					color: "gray"
				}}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "center"
						// alignItems: "center"
					}}
				>
					<AiOutlineEye
						style={{
							marginRight: "0.3rem",
							width: "18px",
							height: "18px",
							color: "#a0a3bd"
						}}
					/>
					<p style={{ color: "#a0a3bd" }}>viewed</p>
				</div>
			</div>

			<Modal
				open={visible}
				footer={null}
				onCancel={hanleModal}
				maskClosable={false}
				bodyStyle={{
					borderRadius: "2rem",
					padding: "1rem",
				}}
				style={{
					backdropFilter: "blur(20px)"
				}}
				width={1000}
			>
				<div
					style={{
						height: "6rem",
						color: "black",
						fontWeight: "bold",
						display: "flex",
						alignItems: "center",
						justifyContent: "center"
					}}
				>
					<h5 style={{ margin: 0 }}>{cardTitle} Scholarship Details</h5>
				</div>
				<div style={{ padding: "1rem" }}>
					<div className="card-body" style={{ height: "6rem" }}>
						<div className="d-flex justify-content-between align-items-center">
							<div className="d-flex flex-column align-items-center">
								<p className="mb-1">Award</p>
								<p style={{ color: "#125875", fontWeight: "bold" }}>
									{award}
								</p>
							</div>
							<div className="d-flex flex-column align-items-center">
								<p className="mb-1">Deadline</p>
								<p style={{ color: "#125875", fontWeight: "bold" }}>
									{formattedDate}
								</p>
							</div>
							<div className="d-flex flex-column align-items-center">
								<p className="mb-1">Effort</p>
								<img
									src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688650069/Screenshot_from_2023-07-06_14-10-36-removebg-preview__2_-removebg-preview_du6wl6.png"
									alt="svg"
									style={{
										objectFit: "cover",
										maxWidth: "70%",
										maxHeight: "70%"
									}}
								/>
							</div>
						</div>
					</div>
					<div>
						<h4 style={{ fontWeight: "bold" }}>About</h4>
						<p style={{ color: "gray", textAlign: "justify" }}>{about}</p>
					</div>
				</div>
				<div
					style={{
						textAlign: "center",
						marginTop: "1rem",
						width: "100%",
						height: "6rem",
						color: "white",
						fontWeight: "bold",
						display: "flex",
						alignItems: "center",
						justifyContent: "center"
					}}
				>
					<a
						href={`${link}`}
						style={{
							backgroundColor: "#ec1d64",
							border: "none",
							color: "white",
							padding: "1rem",
							width: "100%",
							borderRadius: "5px"
						}}
					>
						Apply
					</a>
				</div>
			</Modal>
		</div>
	);
}

export default CardScholarshipSubscribed;
