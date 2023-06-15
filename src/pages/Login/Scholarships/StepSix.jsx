import React from "react";

const StepSix = ({ nextStep, prevStep, formData, setFormData }) => {
  return (

    <div class="app-container">
      <div class="app-wrapper">
        <div
          class="selections-container"
          style={{transform: 'none', transition: 'transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms'}}
        >
          <h2>How soon were you looking to start this new program?</h2>
          <div class="option-list">
            <button type="button" class="select-option sonic-btn">
              Associate's
            </button>
            <button type="button" class="select-option sonic-btn">
              Bachelor's
            </button>
            <button type="button" class="select-option sonic-btn">
              Master's
            </button>
            <button type="button" class="select-option sonic-btn">
              Doctorate
            </button>
            <button type="button" class="select-option sonic-btn">
              Non-Degree Courses
            </button>
            <button type="button" class="select-option sonic-btn">
              Certificate / Diploma
            </button>
            <button type="button" class="select-option sonic-btn">
              Graduate Certificates
            </button>
            <button type="button" class="select-option sonic-btn">
              General
            </button>
            <button type="button" class="select-option sonic-btn">
              Bootcamps
            </button>
          </div>
        </div>
      </div>
      <div className="d-felx">
      <button class="select-option sonic-btn" onClick={prevStep}>Previous</button>
      <button class="select-option sonic-btn" onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default StepSix;
