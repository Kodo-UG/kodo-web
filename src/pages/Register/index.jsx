import React, { useEffect } from "react";

import StepperCard from "./StepperCard";

const FindScholarship = () => {
	const object = [
		{
			id: 1,
			title: "Scholarships",
			text: "We’ve helped students win more than $10 million dollars in scholarships.",
			link: "/stepper",
			Button: "Sign Up"
		},
		{
			id: 2,
			title: "Jobs",
			text: "Are you looking for a remote Job, find Life Changing Jobs Now !.Join Kodo",
			link: "https://www.kodoscholarships.com/steps/program",
			Button: "Sign Up"
		}
	];

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const action = urlParams.get("action");

		if (action) {
			changeButtons(action);
		}
	}, []);

	const changeButtons = (action) => {
		const button1 = document.getElementById("button1");
		const button2 = document.getElementById("button2");

		button1.textContent = "Sign Up";
		button1.href = "https://www.kodoscholarships.com/search-programs";
		button2.textContent = "Sign Up";
		button2.href = "https://www.kodoscholarships.com/steps/program";
	};

	return (
		<div
			style={{
				height: "80vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
			}}
		>
			<StepperCard list={object} />
		</div>
	);
};

export default FindScholarship;
