import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

import MatchedCard from "./MatchedCard";
import ShowTitle from "./ShowTitle";
import { Button, Modal } from "antd";
import "./modal.css";

const CombinedScholarshipCard = React.lazy(() =>
	import("./CombinedScholarshipCard")
);
const MapCardData = React.lazy(() => import("./MapCardData"));

const Scholarship = () => {
	const isSm = useMediaQuery("only screen and (max-width : 700px)");
	const [modal2Open, setModal2Open] = useState(false);

	useEffect(() => {
		setModal2Open(true);
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
						<MatchedCard title="scholarships" total={302500} />

						<ShowTitle />
						{isSm ? <CombinedScholarshipCard /> : <MapCardData />}
						<Modal
							centered
							open={modal2Open}
							onCancel={() => setModal2Open(false)}
							cancelText="close"
							okText=""
							wrapClassName="modalStyle"
							className=""
							style={{ padding: 0 }}
							bodyStyle={{ padding: 0 }}
							keyboard
							zIndex={1000}
							footer={null}
						>
							<img
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
									borderRadius: 10,
									padding: 2
								}}
								src="https://res.cloudinary.com/itgenius/image/upload/v1692444047/Kodo_Pop_Up_Ad-05_tefod6.jpg"
								alt=""
							/>
							<div
								style={{
									alignItems: "center",
									justifyContent: "right",
									display: "flex",
									padding:2
								}}
							>
								<Button
									type="primary"
									onClick={() => setModal2Open(false)}
									style={{ background: "red" , padding:2 }}
								>
									close
								</Button>
							</div>
						</Modal>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Scholarship;
