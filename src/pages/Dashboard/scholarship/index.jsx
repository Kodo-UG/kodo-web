import React, { useState } from "react";
import MyHeader from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";
import Scholarship from "./Scholarship";
import Favorite from "../../favorite";
import Jobs from "../jobs/Jobs";
import MainProfile from "../Profile";
import RSSUsage from "../../share/RSSUsage";

const RootScholarship = () => {
	const [showContent, setShowContent] = useState(0);

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
		<div className="wrappe">
			<MyHeader setShowContent={setShowContent} />
			<Menu setShowContent={setShowContent} />
			<div>{renderContent()}</div>

			<Footer />
		</div>
	);
};

export default RootScholarship;
