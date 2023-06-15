import React from "react";

const StepThree = ({ nextStep, prevStep, formData, setFormData }) => {
  return (
    // <div>
    //         <label>Last Name
    //             <input
    //                 type="text"
    //                 name='lastName'
    //                 value={formData.lastName}
    //                 onChange={(e) => setFormData({...formData, lastName: e.target.value})}
    //             />
    //         </label>
    //         <button onClick={nextStep}>Next</button>
    //         <button onClick={ prevStep }>Previous</button>
    //     </div>

    <div class="app-container">
      <div class="app-wrapper">
        <div
          class="selections-container"
          style={{transform: 'none', transition: 'transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms'}}
        >
          <h2>What subject do you want to study?</h2>
          <div class="dropdown-container">
            <button class="dropdown">
              <div class="dropdown-top">
                <div class="select-title">Select a subject</div>
                <div class="arrow">
                  <div class="down"></div>
                </div>
              </div>
              <div class="dropdown-break-line"></div>
            </button>
            <div
              id="dropdown-list"
              class="dropdown-list"
              style={{transform: 'none', transition: 'transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms'}}
            >
              <button type="button" class="option-button">
                Accounting
              </button>
              <button type="button" class="option-button">
                Advertising
              </button>
              <button type="button" class="option-button">
                Business Administration
              </button>
              <button type="button" class="option-button">
                Business Intelligence
              </button>
              <button type="button" class="option-button">
                Business Law
              </button>
              <button type="button" class="option-button">
                Contract Management
              </button>
              <button type="button" class="option-button">
                Digital Marketing
              </button>
              <button type="button" class="option-button">
                E-Business
              </button>
              <button type="button" class="option-button">
                Economics
              </button>
              <button type="button" class="option-button">
                Entertainment Management
              </button>
              <button type="button" class="option-button">
                Entrepreneurship
              </button>
              <button type="button" class="option-button">
                Finance
              </button>
              <button type="button" class="option-button">
                Forensic Accounting
              </button>
              <button type="button" class="option-button">
                Hospitality Management
              </button>
              <button type="button" class="option-button">
                Human Resources
              </button>
              <button type="button" class="option-button">
                International Business
              </button>
              <button type="button" class="option-button">
                Logistics
              </button>
              <button type="button" class="option-button">
                Management
              </button>
              <button type="button" class="option-button">
                Management Information Systems
              </button>
              <button type="button" class="option-button">
                Marketing
              </button>
              <button type="button" class="option-button">
                Negotiation &amp; Conflict Management
              </button>
              <button type="button" class="option-button">
                Non-Profit Management
              </button>
              <button type="button" class="option-button">
                Organizational Leadership
              </button>
              <button type="button" class="option-button">
                Project Management
              </button>
              <button type="button" class="option-button">
                Public Relations
              </button>
              <button type="button" class="option-button">
                Real Estate
              </button>
              <button type="button" class="option-button">
                Retail &amp; Sales Management
              </button>
              <button type="button" class="option-button">
                Risk Management
              </button>
              <button type="button" class="option-button">
                Small Business
              </button>
              <button type="button" class="option-button">
                Sports Management
              </button>
              <button type="button" class="option-button">
                Supply Chain &amp; Logistics
              </button>
              <button type="button" class="option-button">
                Sustainability
              </button>
            </div>
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

export default StepThree;
