import React from "react";

const StepEight = ({ nextStep, prevStep, formData, setFormData }) => {
  return (
    <div class="_notAnimated_pmptr_10">
      <span class="_headingContainer_1fpvz_1">
        <h2 class="_soloHeading_1fpvz_8">Tell us your name.</h2>
      </span>
      <form method="POST">
        <input
          type="hidden"
          name="_token"
          value="JzTTgQOd8C4cYKw0Ug5Rxy8YIJdTqwvkCKnZXMzO"
        />{" "}
        <div>
          <div class="_fieldGroup_1g3ja_1">
            <input
              id="lastName"
              class="_textField_fwd9c_1"
              name="country"
              placeholder="Country"
              required=""
              data-testid="lastname"
              value=""
            />
          </div>
        </div>
        <div>
          <div class="_fieldGroup_1g3ja_1">
            <input
              id="lastName"
              class="_textField_fwd9c_1"
              name="city"
              placeholder="City"
              required=""
              data-testid="lastname"
              value=""
            />
          </div>
        </div>
      </form>
      <div className="d-felx">
        <button class="select-option sonic-btn" onClick={prevStep}>
          Previous
        </button>
        <button class="select-option sonic-btn" onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );
};

export default StepEight;
