import React from "react";

const StepOne = ({ nextStep, prevStep, formData, setFormData }) => {
  return (
    // <div>
    //     <label>First Name
    //         <input
    //             type="text"
    //             name='firstName'
    //             value={formData.firstName}
    //             onChange={(e) => setFormData({...formData, firstName: e.target.value})}
    //         />
    //     </label>
    //     <button onClick={nextStep}>Next</button>
    //     <button onClick={ prevStep }>Previous</button>
    // </div>

    <div class="app-container">
      <div class="app-wrapper">
        <div
          class="selections-container"
          style={{transform: 'none', transition: 'transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms'}}
        >
          <h2>What degree level are you looking for?</h2>
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
      <button class="select-option sonic-btn" onClick={nextStep}>Next</button>
    </div>
  );
};

export default StepOne;
