import React, { useState } from "react";
import MyButton from "../../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { updateFormData } from "../../../toolkit/formReducer";
import "../../../components/Layout/steeperLayout/footer.css";

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
      text: "Certificate/ Diploma",
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

  const [selectedButtonId, setSelectedButtonId] = useState(null);

  const handleButtonClick = (id) => {
    setSelectedButtonId(id);
    dispatch(updateFormData({ field: "appType", value: "scholarship" }));

    dispatch(updateFormData({ field: "degree", value: id }));
  };

  return (
    <div>

            <div
              className="selections-container"
              style={{
                transform: "none",
                transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
              }}
            >
              <h2>What degree level are you looking for?</h2>
              <div className="option-list">
                <button
                  type="button"
                  onClick={nextStep}
                  className="select-option sonic-btn"
                >
                  Associate's
                </button>
                <button type="button" className="select-option sonic-btn">
                  Bachelor's
                </button>
                <button type="button" className="select-option sonic-btn">
                  Master's
                </button>
                <button type="button" className="select-option sonic-btn">
                  Doctorate
                </button>
                <button type="button" className="select-option sonic-btn">
                  Non-Degree Courses
                </button>
                <button type="button" className="select-option sonic-btn">
                  Certificate / Diploma
                </button>
                <button type="button" className="select-option sonic-btn">
                  Graduate Certificates
                </button>
                <button type="button" className="select-option sonic-btn">
                  General
                </button>
                <button type="button" className="select-option sonic-btn">
                  Bootcamps
                </button>
              </div>
            </div>
          </div>


    // <div className="app-container">
    // 	<div style={{ marginTop: "" }} className="app-wrapper">
    // 		<div
    // 			className="selections-container"
    // 			style={{
    // 				transform: "none",
    // 				transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms"
    // 			}}
    // 		>
    // 			<h2>What degree level are you looking for?</h2>
    // 			<div className="option-list">
    // 				{myList.map((list) => (
    // 					<MyButton
    // 						key={list.id}
    // 						text={list.text}
    // 						isSelected={selectedButtonId === list.id}
    // 						onClick={() => handleButtonClick(list.id)}
    // 					/>
    // 				))}
    // 			</div>
    // 		</div>
    // 	</div>
    // 	<div
    // 		className="d-flex"
    // 		style={{ display: "flex", justifyContent: "center" }}
    // 	>
    // 		<button
    // 			className="select-option sonic-btn"
    // 			onClick={nextStep}
    // 			style={{
    // 				padding: "10px 20px",
    // 				border: "none",
    // 				outline: "none",
    // 				transition:
    // 					"background-color 0.3s ease-in-out, color 0.3s ease-in-out",
    // 				fontFamily: "Arial, sans-serif",
    // 				fontSize: "16px",
    // 				lineHeight: "1.5",
    // 				color: "#fff",
    // 				cursor: "pointer"
    // 			}}
    // 		>
    // 			Next
    // 		</button>
    // 	</div>
    // </div>
  );
};

export default StepOne;
