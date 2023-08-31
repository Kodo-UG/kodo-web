import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Button, Modal } from "antd";
import MatchedCard from "./MatchedCard";
import ShowTitle from "./ShowTitle";
import CombinedScholarshipCard from "./CombinedScholarshipCard";
import MapCardData from "./MapCardData";
import "./modal.css";
import RandomImageModal from "./RandomImage";

const images = [
	"https://res.cloudinary.com/itgenius/image/upload/v1692444047/Kodo_Pop_Up_Ad-05_tefod6.jpg",
	"https://res.cloudinary.com/itgenius/image/upload/v1692444048/Kodo_Pop_Up_Ad-03_wdbss2.jpg",
	"https://res.cloudinary.com/itgenius/image/upload/v1692444048/Kodo_Pop_Up_Ad-04_pv7p2m.jpg"
];

const Scholarship = () => {
	const isSm = useMediaQuery("only screen and (max-width : 700px)");
	const [modal2Open, setModal2Open] = useState(false);

	const closeModal = () => {
		setModal2Open(false);
		localStorage.setItem("modal2Open", "false");
	};

	const openModal = () => {
		setModal2Open(true);
		localStorage.setItem("modal2Open", "true");
	};

	useEffect(() => {
		const storedModalState = localStorage.getItem("modal2Open");
		if (storedModalState === "false") {
			closeModal();
		} else {
			openModal();
		}
	}, []);

	return (
		<div>
			<div className="content-wrapper">
				<section style={{ marginBottom: "3rem" }} className="content">
					<div
						style={{
							display: "flex ",
							flexDirection: "column",
							width: "100%",
							alignItems: "center",
							padding: "2px",
							justifyContent: "center"
						}}
					>
						<MatchedCard title="scholarships" total="302,500" />

						<ShowTitle />
						{isSm ? <CombinedScholarshipCard /> : <MapCardData />}
						<RandomImageModal
							visible={modal2Open}
							closeModal={closeModal}
							images={images}
						/>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Scholarship;
