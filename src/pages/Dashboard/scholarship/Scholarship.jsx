import React, {  } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import MatchedCard from "./MatchedCard";
import ShowTitle from "./ShowTitle";
import CombinedScholarshipCard from "./CombinedScholarshipCard";
import MapCardData from "./MapCardData";
import "./modal.css";



const Scholarship = () => {
	const isSm = useMediaQuery("only screen and (max-width : 700px)");
	

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
						
					</div>
				</section>
			</div>
		</div>
	);
};

export default Scholarship;
