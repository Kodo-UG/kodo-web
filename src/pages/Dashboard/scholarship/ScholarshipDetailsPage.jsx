import React from "react";
import MyHeader from "../Header";
import Menu from "../Menu";
import ScholarshipDetails from "./ScholarshipDetails";
import Footer from "../Footer";

const ScholarshipDetailsPage = () => {
	return (
		<>
			<div style={{ background: "white" }} className="wrapper">
				<MyHeader />
				<Menu />
				<div className="w-100">
					<ScholarshipDetails />
				</div>

				<Footer />
			</div>
		</>
	);
};

export default ScholarshipDetailsPage;
