import React from "react";
import { updateFormData } from "../../../toolkit/formReducer";
import { useDispatch } from "react-redux";

const StepEight = ({ nextStep, prevStep, setFormData }) => {
	const dispatch = useDispatch();
	const handleFNameChange = (e) => {
		const { name, value } = e.target;
		console.log(`Field: ${name}, Value: ${value}`);
		// Dispatch an action to update the form data in the Redux store
		dispatch(updateFormData({ field: "fname", value: value }));
	};
	const handleLNameChange = (e) => {
		const { name, value } = e.target;
		console.log(`Field: ${name}, Value: ${value}`);
		// Dispatch an action to update the form data in the Redux store
		dispatch(updateFormData({ field: "lname", value: value }));
	};

	return (
		<div
			className="_notAnimated_pmptr_10"
			style={{
				display: "flex",
				alignItems: "center",
				marginTop: "10px",
				marginBottom: "20px",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<span
				className="_headingContainer_1fpvz_1"
				style={{ marginTop: "10px", marginBottom: "20px" }}
			>
				<h2 className="_soloHeading_1fpvz_8">Tell us your name.</h2>
			</span>
			<form
				method="POST"
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					marginTop: "10px",
					marginBottom: "40px",
					alignItems: "center",
				}}
			>
				<div style={{ marginTop: "20px", marginBottom: "20px" }}>
					{" "}
					<div className="_fieldGroup_1g3ja_1">
						<input
							id="fName"
							className="_textField_fwd9c_1"
							name="fname"
							placeholder="First Name"
							required=""
							data-testid="fname"
							onChange={handleFNameChange}
							style={{
								borderRadius: "50px",
								width: "500px",
								padding: "15px",
								border: "1px solid #ccc",
								outline: "none",
								transition: "box-shadow 0.3s ease-in-out",
								boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
								fontFamily: "Arial, sans-serif",
								fontSize: "16px",
								lineHeight: "1.5",
								color: "#333",
								backgroundColor: "#fff",
							}}
						/>
					</div>
				</div>
				<div>
					<div className="_fieldGroup_1g3ja_1">
						<input
							id="lastName"
							className="_textField_fwd9c_1"
							name="lname"
							placeholder="Last Name"
							required=""
							data-testid="lname"
							onChange={handleLNameChange}
							style={{
								borderRadius: "50px",
								width: "500px",
								padding: "15px",
								border: "1px solid #ccc",
								outline: "none",
								transition: "box-shadow 0.3s ease-in-out",
								boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
								fontFamily: "Arial, sans-serif",
								fontSize: "16px",
								lineHeight: "1.5",
								color: "#333",
								backgroundColor: "#fff",
							}}
						/>
					</div>
				</div>
			</form>
			<div
				className="d-flex"
				style={{ display: "flex", justifyContent: "center" }}
			>
				<button
					className="select-option sonic-btn"
					onClick={prevStep}
					style={{
						borderRadius: "20px",
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
					Previous
				</button>

				<button
					className="select-option sonic-btn"
					onClick={nextStep}
					style={{
						borderRadius: "20px",
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
						marginLeft: "15px",
					}}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default StepEight;
