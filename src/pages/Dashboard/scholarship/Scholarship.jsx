import React from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

import MatchedCard from "./MatchedCard";
import ShowTitle from "./ShowTitle";

const CombinedScholarshipCard = React.lazy(() =>
	import("./CombinedScholarshipCard")
);
const MapCardData = React.lazy(() => import("./MapCardData"));

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
						<MatchedCard title="scholarships" total={302500} />

						<ShowTitle />
						{isSm ? <CombinedScholarshipCard /> : <MapCardData />}
					</div>
				</section>
			</div>
		</div>
	);
};

export default Scholarship;
