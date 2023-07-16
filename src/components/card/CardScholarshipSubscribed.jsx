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
				width: "24rem",
				display: "flex",
				flexDirection: "column",
				height: "12rem",
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
						className="text-md"
						style={{
							marginLeft: "0.4rem",
							fontWeight: "bold",
							fontSize: "14px",
							fontFamily: "Arial, sans-serif"
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
					<span style={{ fontSize: ".2rem", lineBreak: "auto" }}>
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
								lineHeight: "1.5rem"
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
								lineHeight: "1.5rem"
							}}
						>
							{formattedDate}
						</p>
					</div>
					<div className="d-flex flex-column align-items-center">
						<p className="mb-1" style={{ color: "#a0a3bd" }}>
							Effort
						</p>
						<img
							src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688650069/Screenshot_from_2023-07-06_14-10-36-removebg-preview__2_-removebg-preview_du6wl6.png"
							alt="svg"
							style={{
								objectFit: "cover",
								maxWidth: "80%",
								maxHeight: "80%"
							}}
						/>
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
					opacity: 0.8
				}}
				style={{
					backdropFilter: "blur(10px)"
				}}
			>
				<div
					style={{
						height: "6rem",
						background: "#125875",
						color: "white",
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
