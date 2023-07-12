import React, { useState } from "react";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepperFour from "./StepperFour";
import StepSix from "./StepSix";
import Final from "./Final";
import StepSeven from "./StepSeven";
import StepEight from "./StepEight";
import StepNine from "./StepNine";
import StepTen from "./StepTen";
import HeaderLayout from "../../../components/Layout/steeperLayout";

const Stepper = () => {
	const [step, setStep] = useState(1);

	const [formData, setFormData] = useState({
		lname: "",
		fname: "",
		email: "",
		password: "",
		country: "",
		city: "",
		scholarshipStart: "",
		educationlevel: "",
		degree: "",
		phone: "",
		appType: "",
		scholarshipcategory: ""
	});

	const nextStep = () => setStep(step + 1);
	const prevStep = () => setStep(step - 1);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const renderStepContent = () => {
		switch (step) {
			case 1:
				return (
					<StepOne
						nextStep={nextStep}
						prevStep={prevStep}
						formData={formData}
						setFormData={setFormData}
					/>
				);
			case 2:
				return (
					<StepTwo
						nextStep={nextStep}
						prevStep={prevStep}
						formData={formData}
						setFormData={setFormData}
					/>
				);
			case 3:
				return (
					<StepThree
						nextStep={nextStep}
						prevStep={prevStep}
						formData={formData}
						setFormData={setFormData}
					/>
				);
			case 4:
				return (
					<StepperFour
						nextStep={nextStep}
						prevStep={prevStep}
						formData={formData}
						setFormData={setFormData}
					/>
				);
			case 5:
				return (
					<StepSix
						nextStep={nextStep}
						prevStep={prevStep}
						formData={formData}
						setFormData={setFormData}
					/>
				);
			case 6:
				return (
					<StepSeven
						nextStep={nextStep}
						prevStep={prevStep}
						formData={formData}
						setFormData={setFormData}
					/>
				);

			case 7:
				return (
					<StepEight
						nextStep={nextStep}
						prevStep={prevStep}
						formData={formData}
						setFormData={setFormData}
					/>
				);

			case 8:
				return (
					<StepNine
						nextStep={nextStep}
						prevStep={prevStep}
						formData={formData}
						setFormData={setFormData}
					/>
				);
			case 9:
				return (
					<StepTen
						nextStep={nextStep}
						prevStep={prevStep}
						formData={formData}
						setFormData={setFormData}
					/>
				);
			default:
				return null;
		}
	};

	return (
		<HeaderLayout>
			<div
				style={{
					height: "80vh",
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					background: "#E6E6E6"
				}}
			>
				<div
					id="school-search-container"
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					{renderStepContent()}
				</div>
			</div>
		</HeaderLayout>
	);
};

export default Stepper;

// 	return (
// 		<HeaderLayout>
// 			<div
// 				style={{
// 					backgroundColor: "red",
// 					height: "80vh",
// 					display: "flex",
// 					justifyContent: "center",
// 					alignItems: "center"
// 				}}
// 				className=""
// 			>
// 				{renderStepContent()}
// 			</div>
// 		</HeaderLayout>
// 	);
// };

// export default Stepper;
