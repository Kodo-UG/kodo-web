import React from "react";
import Body from "../../../components/Layout/Body";
import { BiSignal1 } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { updateFormData } from "../../../toolkit/formReducer";
import { useState } from "react";
import StepperCard from "../../../components/StepperCard";
import Column from "antd/es/table/Column";
import "./stepper4.css";

const StepperFour = ({ nextStep, prevStep, setFormData }) => {
  const dispatch = useDispatch();
  const list = [
    {
      id: 1,
      text: "High School",
    },
    {
      id: 2,
      text: "GED",
    },
    {
      id: 3,
      text: "Associate",
    },
    {
      id: 4,
      text: "Bachelor's",
    },
    {
      id: 5,
      text: "Master's",
    },
    {
      id: 6,
      text: "Doctorate",
    },
  ];

  const [selectedCard, setSelectedCard] = useState(null);
  const handleClick = (text, id) => {
    setSelectedCard(id);
    dispatch(updateFormData({ field: "educationlevel", value: text }));
  };

  return (
    <Body>
      <div
        id="voyager"
        data-basename="/voyager/experience"
        className="flex-1 relative "
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="container">
          <section id="voyager-blocks">
            <div className="_notAnimated_pmptr_10 text-center row  justify-content-center align-items-center">
              <p>
                First things first, catch us up on your education journey so
                far.
              </p>
              <h2 className="_soloHeading_1fpvz_8 font-weight-bold">
                What’s the highest level of education you’ve completed?
              </h2>

              <b>We have hundreds of schools to choose from.</b>
              <p>
                Tell us a little about yourself, and we'll find the BEST one for
                you.
              </p>

              <div
                className="row  justify-content-center align-items-center"
                style={{
                  width: "75%",

                  padding: "2rem",
                }}
              >
                

                {list.map((item) => (
                  <div className="col-md-4" key={item.id}>
                    <StepperCard
                      item={item.id}
                      // handleClick={handleClick}
                      // selectedCard={selectedCard}
                    />
                  </div>
                ))} 
              </div>
            </div>
          </section>
          <div className="d-flex justify-content-evenly">
            <button
              className="select-option sonic-btn"
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
              onClick={prevStep}
            >
              Previous
            </button>
            <button
              className="select-option sonic-btn"
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
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Body>
  );
};

export default StepperFour;
