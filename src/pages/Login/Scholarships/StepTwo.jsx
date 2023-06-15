import React from "react";

const StepTwo = ({ nextStep, prevStep, formData, setFormData }) => {
  return (
    //     <div>
    //     <label>LastName
    //         <input
    //             type="text"
    //             name='lastName'
    //             value={formData.lastName}
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
          <h2>What school category interests you?</h2>
          <div class="option-list">
            <button type="button" class="select-option sonic-btn">
              Art &amp; Design
            </button>
            <button type="button" class="select-option sonic-btn">
              Business &amp; Management
            </button>
            <button type="button" class="select-option sonic-btn">
              Computers &amp; Technology
            </button>
            <button type="button" class="select-option sonic-btn">
              Criminal Justice &amp; Legal
            </button>
            <button type="button" class="select-option sonic-btn">
              Education &amp; Teaching
            </button>
            <button type="button" class="select-option sonic-btn">
              General
            </button>
            <button type="button" class="select-option sonic-btn">
              Liberal Arts &amp; Humanities
            </button>
            <button type="button" class="select-option sonic-btn">
              Nursing &amp; Healthcare
            </button>
            <button type="button" class="select-option sonic-btn">
              Psychology &amp; Counseling
            </button>
            <button type="button" class="select-option sonic-btn">
              Science &amp; Engineering
            </button>
            <button type="button" class="select-option sonic-btn">
              Trades &amp; Careers
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

export default StepTwo;
