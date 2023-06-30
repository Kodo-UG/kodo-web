import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../toolkit/formReducer";

const StepSeven = ({ nextStep, prevStep }) => {
	const dispatch = useDispatch();
	const formData = useSelector((state) => state.formData);

	const handleCountryChange = (e) => {
		const { name, value } = e.target;
		console.log(`Field: ${name}, Value: ${value}`);
		// Dispatch an action to update the form data in the Redux store
		dispatch(updateFormData({ field: "country", value: value }));
	};
	const handleCityChange = (e) => {
		const { name, value } = e.target;
		console.log(`Field: ${name}, Value: ${value}`);
		// Dispatch an action to update the form data in the Redux store
		dispatch(updateFormData({ field: "city", value: value }));
	};

	return (

			<div className="app-container">
			<div class="app-wrapper">
				<div
					class="selections-container"
					style={{
						transform: "none",
						transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
					}}
				>
					<h2>Where do you currently live?</h2>
				</div>
			</div>
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
					<div>
						<input
							id="country"
							name="country"
							placeholder="Country"
							required=""
							type="text"
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
							}}
							onChange={handleCountryChange} // Add onChange event handler
						/>
					</div>
				</div>
				<div>
					<div className="_fieldGroup_1g3ja_1">
						<input
							id="city"
							type="text"
							className="_textField_fwd9c_1"
							name="city"
							placeholder="City"
							required=""
							data-testid="city"
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
							onChange={handleCityChange} // Add onChange event handler
						/>
					</div>
				</div>
			</form>
			<div
				className="d-flex"
				style={{ display: "flex", justifyContent: "space-evenly" }}
			>
				<button
					className="select-option sonic-btn"
					onClick={prevStep}
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
				>
					Previous
				</button>

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
						marginBottom: "4px",
					}}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default StepSeven;
