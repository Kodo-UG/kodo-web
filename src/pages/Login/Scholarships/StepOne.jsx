import React from "react";
import MyButton from "../../../components/Button";

const StepOne = ({ nextStep, prevStep, formData, setFormData }) => {
	const myList = [
		{
			id: 1,
			text: "Associate's",
		},
		{
			id: 2,
			text: "Bachelor's",
		},
		{
			id: 3,
			text: "Master's",
		},
		{
			id: 4,
			text: "Doctorate",
		},
		{
			id: 5,
			text: "Non-Degree Courses",
		},
		{
			id: 6,
			text: "Certificate / Diploma",
		},
		{
			id: 7,
			text: "Graduate Certificates",
		},
		{
			id: 8,
			text: "General",
		},
		{
			id: 8,
			text: "Bootcamps",
		},
	];
	return (
		<div class="app-container">
			<div class="app-wrapper">
				<div
					class="selections-container"
					style={{
						transform: "none",
						transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
					}}
				>
					<h2>What degree level are you looking for?</h2>
					<div class="option-list">
						{myList.map((list) => (
							<MyButton key={list.id} text={list.text} />
						))}
					</div>
				</div>
			</div>
			<button class="select-option sonic-btn" onClick={nextStep}>
				Next
			</button>
		</div>
	);
};

export default StepOne;
