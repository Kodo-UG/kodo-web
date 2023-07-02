import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearFormData, updateFormData } from "../../../toolkit/formReducer";
import api from "../../../api/apiClient";
import axios from "axios";
import CustomModal from "../../../components/modal/Modal";
import {
	displayErrorMessage,
	displaySuccessMessage,
} from "../../../utils/Toast";

const StepNine = ({ nextStep, prevStep }) => {
	const [modalOpen, setModalOpen] = useState(true);
	const [loading, setLoading] = useState(false);
	const formData = useSelector((state) => state.formData);
	const dispatch = useDispatch();
	const handleEmailChange = (e) => {
		const { name, value } = e.target;
		console.log(`Field: ${name}, Value: ${value}`);
		// Dispatch an action to update the form data in the Redux store
		dispatch(updateFormData({ field: "email", value: value }));
	};
	const handlePasswordChange = (e) => {
		const { name, value } = e.target;
		console.log(`Field: ${name}, Value: ${value}`);
		// Dispatch an action to update the form data in the Redux store
		dispatch(updateFormData({ field: "password", value: value }));
	};
	const handlePhoneChange = (e) => {
		const { name, value } = e.target;
		console.log(`Field: ${name}, Value: ${value}`);
		// Dispatch an action to update the form data in the Redux store
		dispatch(updateFormData({ field: "phone", value: value }));
	};

	const register = async () => {
		setLoading(true);
		let data = JSON.stringify(formData);

		console.log(data, "DATA IS HERE ");
		try {
			const res = await axios.post(
				"http://165.227.139.53/api/v1/auth/user/signup",
				formData
			);
			console.log(res.data.id);
			localStorage.setItem("userID", res.data.id);

			if (res.data.id) {
				displaySuccessMessage(
					"Registration successful verification email sent to your email"
				);
				nextStep();
			}

			// setModalOpen(true);

			console.log(res, "	WEEEEEEEEEEEEEEEEEEEEEEEEEEE");
			// dispatch(clearFormData());
		} catch (error) {
			console.log(error, "ERROR");
			displayErrorMessage("Failed to register");
		} finally {
			setLoading(false);
		}
	};
	console.log(modalOpen);
	// const handleRegister = async () => {
	// 	const response = await api
	// }
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
					<h2>Tell us your name.</h2>
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
					{" "}
					<div className="_fieldGroup_1g3ja_1">
						<input
							id="email"
							className="_textField_fwd9c_1"
							name="email"
							placeholder="Email"
							required=""
							data-testid="email"
							onChange={handleEmailChange}
							style={{
								borderRadius: "10px",
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
				<div style={{ marginTop: "20px", marginBottom: "20px" }}>
					{" "}
					<div className="_fieldGroup_1g3ja_1">
						<input
							id="phone"
							className="_textField_fwd9c_1"
							name="phone"
							placeholder="Phone"
							required=""
							data-testid="phone"
							onChange={handlePhoneChange}
							style={{
								borderRadius: "10px",
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
				<div style={{ marginTop: "20px", marginBottom: "20px" }}>
					<div className="_fieldGroup_1g3ja_1">
						<input
							id="password"
							type="password"
							className="_textField_fwd9c_1"
							name="password"
							placeholder="Password"
							required
							data-testid="password"
							onChange={handlePasswordChange}
							style={{
								borderRadius: "10px",
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

				{/* <div>
					<div className="_fieldGroup_1g3ja_1">
						<input
							id="confrimPassword"
							className="_textField_fwd9c_1"
							name="confirm-password"
							placeholder="Confirm Password"
							required=""
							data-testid="confirm-password"
							value=""
							style={{
								borderRadius: "10px",
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
				</div> */}
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
					onClick={register}
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
					{loading ? "Registering...." : "Register"}
				</button>
			</div>
		</div>
	);
};

export default StepNine;
