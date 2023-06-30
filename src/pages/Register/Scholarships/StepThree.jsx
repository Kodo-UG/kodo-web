import React, { useState } from "react";

const StepThree = ({ nextStep, prevStep, formData, setFormData }) => {
	const myList = [
		{
			id: 1,
			text: "Accounting",
		},
		{
			id: 2,
			text: "Advertising",
		},
		{
			id: 3,
			text: "Business Administration",
		},
		{
			id: 4,
			text: "Business Law",
		},
		{
			id: 5,
			text: "Contract Management",
		},
		{
			id: 6,
			text: "Digital Marketing",
		},
		{
			id: 7,
			text: "E-Business",
		},
		{
			id: 8,
			text: "Economics",
		},
		{
			id: 9,
			text: "Entertainment Management",
		},
		{
			id: 10,
			text: "Entrepreneurship",
		},
		{
			id: 11,
			text: "Finance",
		},
		{
			id: 12,
			text: "Forensic Accounting",
		},
		{
			id: 13,
			text: "Hospitality Management",
		},
		{
			id: 14,
			text: "Human Resources",
		},
		{
			id: 15,
			text: "International Business",
		},
		{
			id: 16,
			text: "Logistics",
		},
		{
			id: 17,
			text: "Management",
		},
		{
			id: 19,
			text: "Management Information Systems",
		},
		{
			id: 20,
			text: "Marketing",
		},
		{
			id: 21,
			text: "Negotiation &amp; Conflict Management",
		},
		{
			id: 22,
			text: "Non-Profit Management",
		},
		{
			id: 23,
			text: "Organizational Leadership",
		},
		{
			id: 24,
			text: "Project Management",
		},
		{
			id: 25,
			text: "Public Relations",
		},
		{
			id: 26,
			text: "Real Estate",
		},
		{
			id: 27,
			text: "Retail &amp; Sales Management",
		},
		{
			id: 28,
			text: "Risk Management",
		},
		{
			id: 29,
			text: "Small Business",
		},
		{
			id: 30,
			text: "Sports Management",
		},
		{
			id: 31,
			text: "Supply Chain &amp; Logistics",
		},
		{
			id: 32,
			text: "Sustainability",
		},
	];

	const [selectedOption, setSelectedOption] = useState(""); // State to store the selected option
	const [dropdownOpen, setDropdownOpen] = useState(false); // State to track the dropdown open/close state

	// Function to handle option selection
	const handleOptionSelect = (option) => {
		setSelectedOption(option);
		setDropdownOpen(false);
	};

	return (
		<div className="app-container">
			<div className="app-wrapper">
				<div className="selections-container">
					<h2>What subject do you want to study?</h2>
					<div className="dropdown-container">
						<button
							className="dropdown"
							onClick={() => setDropdownOpen(!dropdownOpen)}
						>
							<div className="dropdown-top">
								<div className="select-title">
									{selectedOption || "Select a subject"}
								</div>
								<div className="arrow">
									<div className={dropdownOpen ? "up" : "down"}></div>
								</div>
							</div>
							<div className="dropdown-break-line"></div>
						</button>
						{dropdownOpen && (
							<div className="dropdown-list">
								{myList.map((list) => (
									<button
										key={list.id}
										type="button"
										className="option-button"
										onClick={() => handleOptionSelect(list.text)}
										style={{ padding: "10px" }}
									>
										{list.text}
									</button>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
			<div
				className="d-flex"
				style={{ display: "flex", justifyContent: "space-evenly" }}
			>				
				<button className="select-option sonic-btn"
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
										marginBottom: "4px",
									}}
				onClick={prevStep}>
					Previous
				</button>
				<button className="select-option sonic-btn" 
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
										marginBottom: "4px",
									}}
				onClick={nextStep}>
					Next
				</button>
			</div>
		</div>
	);
};

export default StepThree;
