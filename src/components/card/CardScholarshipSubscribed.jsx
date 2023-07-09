import React, { useState } from "react";
import { BsBookmark, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import CollapsibleInput from "./CollapsibleInput";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
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
}) {
	const date = new Date(deadline);
	const formattedDate = date.toLocaleDateString();
	const [data, setData] = useState(null);
	const [visible, setVisible] = useState(false);

	const handleFetch = async () => {
		const token = localStorage.getItem("token");

		const headers = {
			Authorization: `Bearer ${token}`,
		};

		let res = await axios.get(
			`https://demo.kodoscholarships.com/api/v1/scholarship/${id}`,
			{
				headers,
			}
		);

		setData(res.data.data);
		setVisible(!visible);
	};
	// console.log("DATA :" , data?.title)
	// console.log(data?.link,data?.about)

	// useEffect(()=>{
	// 	handleFetch(id)
	// },[id])
	const hanleModal = () => {
		setVisible(!visible);
	};
	return (
		<div
			onClick={() => setVisible(!visible)}
			className=" shadow-xl"
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
				marginRight: "3rem",
				marginBottom: "3rem",
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
				}}
			>
				<div
					style={{
						width: "75%",
						padding: "0.5rem",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<h4
						className="text-lg"
						style={{
							marginLeft: "0.5rem",
							opacity: 0.8,
							fontWeight: "bold",
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
						opacity: 0.5,
					}}
				>
					<BsBookmark style={{ height: "25px", width: "25px" }} />
					<BsThreeDotsVertical style={{ height: "25px", width: "25px" }} />
				</div>
			</div>

			<div className="card-body" style={{ height: "6rem" }}>
				<div className="d-flex justify-content-between align-items-center">
					<div className="d-flex flex-column align-items-center">
						<p className="mb-1">Award</p>
						<p style={{ color: "#125875" }}>{award}</p>
					</div>
					<div className="d-flex flex-column align-items-center">
						<p className="mb-1">Deadline</p>
						<p style={{ color: "#125875" }}>{formattedDate}</p>
					</div>
					<div className="d-flex flex-column align-items-center">
						<p className="mb-1">Effort</p>
						<img
							src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688650069/Screenshot_from_2023-07-06_14-10-36-removebg-preview__2_-removebg-preview_du6wl6.png"
							alt="svg"
							style={{
								objectFit: "cover",
								maxWidth: "70%",
								maxHeight: "70%",
							}}
						/>
					</div>
				</div>
			</div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "end",
					width: "100%",
					paddingRight: "1rem",
					color: "gray",
				}}
			>
				<p>
					<AiOutlineEye
						style={{
							marginRight: "0.5rem",
							width: "25px",
							height: "25px",
						}}
					/>
					viewed
				</p>
			</div>

			<Modal
				open={visible}
				footer={null}
				onCancel={hanleModal}
				maskClosable={false}
				bodyStyle={{
					borderRadius: "2rem",
					padding: "1rem",
					opacity: 0.8,
				}}
				style={{
					backdropFilter: "blur(10px)",
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
						justifyContent: "center",
					}}
				>
					<h5 style={{ margin: 0 }}>{cardTitle} Scholarship Details</h5>
				</div>
				<div style={{ padding: "1rem" }}>
					<div className="card-body" style={{ height: "6rem" }}>
						<div className="d-flex justify-content-between align-items-center">
							<div className="d-flex flex-column align-items-center">
								<p className="mb-1">Award</p>
								<p style={{ color: "#125875" }}>{award}</p>
							</div>
							<div className="d-flex flex-column align-items-center">
								<p className="mb-1">Deadline</p>
								<p style={{ color: "#125875" }}>{formattedDate}</p>
							</div>
							<div className="d-flex flex-column align-items-center">
								<p className="mb-1">Effort</p>
								<img
									src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688650069/Screenshot_from_2023-07-06_14-10-36-removebg-preview__2_-removebg-preview_du6wl6.png"
									alt="svg"
									style={{
										objectFit: "cover",
										maxWidth: "70%",
										maxHeight: "70%",
									}}
								/>
							</div>
						</div>
					</div>
					<div>
						<h4 style={{ fontWeight: "bold" }}>About</h4>
						<p style={{ color: "gray" }}>{about}</p>
					</div>
				</div>
				<div style={{ textAlign: "center", marginTop: "1rem" }}>
					<Link
						to={`${link}`}
						className="ant-btn ant-btn-primary ant-btn-lg ant-btn-block"
						style={{
							background: "#ec1d64",
							border: "none",
							color: "white",
						}}
					>
						Apply
					</Link>
				</div>
			</Modal>
		</div>
	);
}

export default CardScholarshipSubscribed;
