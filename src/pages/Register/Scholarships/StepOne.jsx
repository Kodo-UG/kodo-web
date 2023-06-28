import React, { useState } from "react";
import MyButton from "../../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { updateFormData } from "../../../toolkit/formReducer";

const StepOne = ({ nextStep, setFormData }) => {
	const formData = useSelector((state) => state.formData);
	const dispatch = useDispatch();

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
			id: 9,
			text: "Bootcamps",
		},
	];

	const [clickedButtonId, setClickedButtonId] = useState(null);

	const handleButtonClick = (id) => {
		setClickedButtonId(id);
	};

	return (
		<div className="app-container">
			<div className="app-wrapper">
				<div
					className="selections-container"
					style={{
						transform: "none",
						transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
					}}
				>
					<h2>What degree level are you looking for?</h2>
					<div className="option-list">
						{myList.map((list) => (
							<MyButton
								key={list.id}
								text={list.text}
								style={{
									padding: "10px 20px",
									border: "none",
									outline: "none",
									transition:
										"background-color 0.3s ease-in-out, color 0.3s ease-in-out",
									fontFamily: "Arial, sans-serif",
									fontSize: "16px",
									lineHeight: "1.5",
									color: clickedButtonId === list.id ? "#fff" : "#000",
									backgroundColor:
										clickedButtonId === list.id
											? "blue"
											: "transparent",
									cursor: "pointer",
								}}
								onClick={() => {
									handleButtonClick(list.id);
									nextStep();
								}}
							/>
						))}
					</div>
				</div>
			</div>
			<button
				className="select-option sonic-btn"
				onClick={nextStep}
				style={{
					padding: "10px 20px",
					border: "none",
					outline: "none",
					transition:
						"background-color 0.3s ease-in-out, color 0.3s ease-in-out",
					fontFamily: "Arial, sans-serif",
					fontSize: "16px",
					lineHeight: "1.5",
					color: "#fff",
					cursor: "pointer",
				}}
			>
				Next
			</button>
		</div>
	);
};

export default StepOne;
