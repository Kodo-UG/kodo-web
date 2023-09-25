import React, { useEffect, useState } from "react";

import HeaderLayout from "../../../components/Layout/steeperLayout";
import Footer from "../../../components/Layout/steeperLayout/Footer";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateFormData } from "../../../toolkit/formReducer";
import StepperElementFour from "./StepperElementFour";

const Sports = () => {
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
    scholarshipcategory: "",
  });
  const dispatch = useDispatch();

  const params = useParams();
  const userId = params.userId;

  const nextStep = () =>
    setStep((step) => (step < 4 && step > 0 ? step + 1 : 1));
  const prevStep = () =>
    setStep((step) => (step < 4 && step > 0 ? step - 1 : 1));

  useEffect(() => {
    dispatch(updateFormData({ field: "refer", value: userId }));
  }, []);

  return (
    <HeaderLayout>
      <div
        style={{
          height: "80vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#E6E6E6",
        }}
      >
        <div
          id="school-search-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StepperElementFour />
        </div>
      </div>
      <Footer step={step} nextStep={nextStep} prevStep={prevStep} />
    </HeaderLayout>
  );
};

export default Sports;
