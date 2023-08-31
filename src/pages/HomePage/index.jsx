import React, { Fragment, useState, useEffect } from "react";
import Slidder from "./Slidder";
import About from "./About";
import Features from "./Features";
import Events from "./Events";
import VideoSection from "./VideoSection";
import RandomImageModal from "../Dashboard/scholarship/RandomImage";

const images = [
	"https://res.cloudinary.com/itgenius/image/upload/v1693281465/New_Kodo_Pop_Up_Ads-01_h2fhhz.jpg",
	"https://res.cloudinary.com/itgenius/image/upload/v1693281465/New_Kodo_Pop_Up_Ads-02_q42t2p.jpg",
	"https://res.cloudinary.com/itgenius/image/upload/v1693281465/New_Kodo_Pop_Up_Ads-03_gzvizf.jpg",
	"https://res.cloudinary.com/itgenius/image/upload/v1693281465/New_Kodo_Pop_Up_Ads-06_jupph2.jpg",
	"https://res.cloudinary.com/itgenius/image/upload/v1693281464/New_Kodo_Pop_Up_Ads-05_ju8yba.jpg",
	"https://res.cloudinary.com/itgenius/image/upload/v1693281464/New_Kodo_Pop_Up_Ads-04_qeb5hm.jpg"
];

const HomePage = () => {
	const [modalOpen, setModalOpen] = useState(false);

	const closeModal = () => {
		setModalOpen(false);
		localStorage.setItem("modalOpen", "false");
	};

	const openModal = () => {
		setModalOpen(true);
		localStorage.setItem("modalOpen", "true");
	};

	useEffect(() => {
		const storedModalState = localStorage.getItem("modalOpen");
		if (storedModalState === "false") {
			closeModal();
		} else {
			openModal();
		}
	}, []);
	return (
		<Fragment>
			<Slidder />
			<About />
			<Features />
			<VideoSection />
			<Events />
			<RandomImageModal
				visible={modalOpen}
				closeModal={closeModal}
				images={images}
			/>
		</Fragment>
	);
};

export default HomePage;
