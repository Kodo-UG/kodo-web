/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../toolkit/formReducer";
import "../../../components/Button.css";
import "../../../components/Layout/steeperLayout/footer.css";

import { useQuery } from "react-query";
import { useCallback } from "react";

const StepTwo = ({ nextStep }) => {
  // const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  // const [id, setId] = useState();

  async function fetchCategories() {
    const response = await fetch(
      "https://demo.kodoscholarships.com/api/v1/scholarship/categories"
    );
    const data = await response.json();

    return data;
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  const { data } = useQuery(
    "categories",
    fetchCategories
  );

  const newData = data?.data;
  // console.log("=============");
  // console.log(data);
  // console.log("==============");

  const [selectedButtonId, setSelectedButtonId] = useState(null);
  const handleClick = useCallback(
    (id) => {
      // setId(id);
      setSelectedButtonId(id);
      dispatch(updateFormData({ field: "scholarshipcategory", value: id }));
      nextStep();
    },
    [dispatch, nextStep]
  );
  return (
    <div
      className="selections-container"
      style={{
        transform: "none",
        transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
      }}
    >
      <h2
        style={{
          fontFamily: "Lexend Deca, Helvetica, Arial, sans-serif",
          fontWeight: "700",
          color: "#00234a",
        }}
      >
        What school category interests you?
      </h2>
      <div className="option-list">
        {newData?.map((dta) => (
          <button
            key={dta._id}
            type="button"
            className="select-option sonic-btn"
            onClick={() => handleClick(dta._id)}
          >
            {dta.name}
          </button>
        ))}
      </div>
    </div>








    // <div class="app-container">
    // 	<div class="app-wrapper">
    // 		<div
    // 			class="selections-container"
    // 			style={{
    // 				transform: "none",
    // 				transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
    // 			}}
    // 		>
    // 			<h2>What school category interests you?</h2>
    // 			{isLoading ? (
    // 				"Please wait as we load the categories"
    // 			) : (
    // 				<div class="option-list">
    // 					{newData?.map((info) => (
    // 						<MyButton
    // 							key={info.id}
    // 							text={info.name}
    // 							isSelected={selectedButtonId === info.id}
    // 							onClick={() => handleClick(info._id)}
    // 						/>
    // 					))}
    // 				</div>
    // 			)}
    // 		</div>
    // 	</div>
    // 	<div
    // 		className="container"
    // 		style={{
    // 			display: "flex",
    // 			alignItems: "center",
    // 			justifyContent: "space-between",
    // 			width: "50%",
    // 		}}
    // 	>
    // 		<button
    // 			class="select-option sonic-btn"
    // 			onClick={prevStep}
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
    // 				cursor: "pointer",
    // 				marginBottom: "4px",
    // 			}}
    // 		>
    // 			Previous
    // 		</button>
    // 		<button
    // 			class="select-option sonic-btn"
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
    // 				cursor: "pointer",
    // 			}}
    // 		>
    // 			Next
    // 		</button>
    // 	</div>
    // </div>
  );
};

export default StepTwo;
