/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../toolkit/formReducer";
import "../../../components/Button.css";
import "../../../components/Layout/steeperLayout/footer.css";

import { useQuery } from "react-query";
import { useCallback } from "react";

const StepTwo = ({ nextStep }) => {

  const dispatch = useDispatch();


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

  );
};

export default StepTwo;
