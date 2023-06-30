import React from "react";
import { BiSignal1 } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { updateFormData } from "../../../toolkit/formReducer";

const StepSix = ({ nextStep, prevStep, formData, setFormData }) => {
	const dispatch = useDispatch();
	const buttons = [
		{ id: 1, title: "As soon as possible" },
		{ id: 2, title: "In the next 3 months" },
		{ id: 3, title: "3 - 6 months" },
		{ id: 4, title: "6 - 12 months" },
		{ id: 5, title: "12 or more months" },
	];

	const handleClick = (title) => {
		dispatch(updateFormData({ field: "scholarshipStart", value: title }));
	};

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
					<h2>How soon were you looking to start this new program?</h2>
					<div class="option-list">
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								flexWrap: "wrap",
								padding: "13px",
								margin: "2.3rem",
								cursor: "pointer",
							}}
						>
							{buttons.map((button) => (
								<div
									key={button.id}
									style={{
										background: "white",
										borderRadius: 20,
										maxWidth: "10rem",
										width: "10rem",
										height: "10rem",
										boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
										alignItems: "center",
										marginLeft: "20px",
										marginTop: "10px",
									}}
									onClick={() => handleClick(button.title)}
								>
									<div
										style={{
											borderRadius: "50%",
											background: "#E6E9ED",
											width: "2.5rem",
											height: "2.5rem",
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										<BiSignal1
											style={{
												color: "red",
												width: "6rem",
												height: "4rem",
												marginTop: "-12px",
												marginLeft: "15px",
											}}
										/>
									</div>

									<div style={{ marginTop: "1rem" }}>
										<h5>{button.title}</h5>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div
				className="d-flex"
				style={{ display: "flex", justifyContent: "space-evenly" }}
			>
				<button class="select-option sonic-btn"
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
				<button class="select-option sonic-btn"
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

export default StepSix;
