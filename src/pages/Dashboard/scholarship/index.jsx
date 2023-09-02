import React, { useState, useEffect } from "react";
import MyHeader from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";
import Scholarship from "./Scholarship";
import Favorite from "../../favorite";
import Jobs from "../jobs/Jobs";
import MainProfile from "../Profile";
import RSSUsage from "../../share/RSSUsage";
import RandomImageModal from "./RandomImage";

const images = [
	"https://res.cloudinary.com/itgenius/image/upload/v1692444047/Kodo_Pop_Up_Ad-05_tefod6.jpg",
	"https://res.cloudinary.com/itgenius/image/upload/v1692444048/Kodo_Pop_Up_Ad-03_wdbss2.jpg",
	"https://res.cloudinary.com/itgenius/image/upload/v1692444048/Kodo_Pop_Up_Ad-04_pv7p2m.jpg"
];
const RootScholarship = () => {
	const [showContent, setShowContent] = useState(0);

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

	const renderContent = () => {
		switch (showContent) {
			case 0:
				return <Scholarship />;
			case 1:
				return <Favorite />;
			case 2:
				return <Jobs />;
			case 3:
				return <MainProfile />;
			case 4:
				return <RSSUsage />;

			default:
		}
	};
	return (
		<div style={{ background: "white" }} className="wrappe">
			<MyHeader setShowContent={setShowContent} />
			<Menu setShowContent={setShowContent} />
			<div
		
			>{renderContent()}</div>
			<RandomImageModal
				visible={modal2Open}
				closeModal={closeModal}
				images={images}
				show={() => setShowContent(4)}
			/>

			<Footer />
		</div>
	);
};

export default RootScholarship;
