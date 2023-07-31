import React, { useState } from "react";
import MyHeader from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";
import Scholarship from "./Scholarship";
import Favorite from "../../favorite";
import Jobs from "../jobs/Jobs";

const RootScholarship = () => {
	const [showContent, setShowContent]= useState(0)

	const renderContent = () => {
		switch (showContent) {

			case 0:
				return (
					<Scholarship
						
					/>
				);
			case 1:
				return (
					<Favorite
					/>
				);
			case 2:
				return (
					<Jobs
					/>
				);
			
			default:
				
		}
	};
	console.log(showContent)
	return (
		<div className="wrappe" data-widget="pushmenu">
			<MyHeader />
			<Menu setShowContent={setShowContent}/>
			{
				renderContent()
			}

			<Footer />
		</div>
	);
};

export default RootScholarship;
