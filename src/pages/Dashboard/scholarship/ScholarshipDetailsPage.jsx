import React from "react";
import MyHeader from "../Header";
import Menu from "../Menu";
import ScholarshipDetails from "./ScholarshipDetails";
import Footer from "../Footer";
// import { useMediaQuery } from "@uidotdev/usehooks";

const ScholarshipDetailsPage = () => {
	// const isMd = useMediaQuery(
	// 	"only screen and (min-width : 700px) and (max-width : 1250px)"
	// );
	return (
		<>
			<div style={{ background: "white" }} className="wrapper">
				<MyHeader />
				<Menu />
				<div
					className="w-100 "
					style={{
						// background: "red",
						display: "flex",
						alignItems: "center",
						justifyContent: "end",
						height: "auto",
					
					}}
				>
					<ScholarshipDetails />
				</div>

				<Footer />
			</div>
		</>
	);
};

export default ScholarshipDetailsPage;
