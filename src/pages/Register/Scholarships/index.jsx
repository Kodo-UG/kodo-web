import React, { useEffect, useState } from "react";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
// import StepperFour from "./StepperFour";
import StepSix from "./StepSix";
import StepSeven from "./StepSeven";
import StepEight from "./StepEight";
import StepNine from "./StepNine";
import StepTen from "./StepTen";
import HeaderLayout from "../../../components/Layout/steeperLayout";
import Footer from "../../../components/Layout/steeperLayout/Footer";

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

	const nextStep = () =>
		setStep((step) => (step < 4 && step > 0 ? step + 1 : 1));
	const prevStep = () =>
		setStep((step) => (step < 4 && step > 0 ? step - 1 : 1));

	useEffect(() => {
		console.log("step: ", step);
	}, [step]);

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
			
			default:
				return (
					<StepOne
						nextStep={nextStep}
						prevStep={prevStep}
						formData={formData}
						setFormData={setFormData}
					/>
				);
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
			<Footer step={step} nextStep={nextStep} prevStep={prevStep} />
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
