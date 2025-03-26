import React from "react";
import { Link } from "react-router-dom";
import "./findscholarships.css"; // Import the CSS file

const CTA = () => (
  <div className="cta-container">
    <div className="cta-box">
        <div
            className='cta-box-container'
        >
            <h2>
                Take your next step with
                <br />
                Kodo Scholarships.
            </h2>
            <Link
                to="/scholarships"
                className="find-scholarships-btn"
                tabIndex={0}
                aria-label="Find Scholarships"
            >
                Find Scholarships →
            </Link>

        </div>
    </div>
  </div>
);

function FindScholarships() {
  return (
    <div className="find-scholarships-container">
      <div className="image-container">
        <img
          src="https://res.cloudinary.com/digrh1wj1/image/upload/v1742426808/Frame_40_wnrd5o.png"
          alt="Students"
          loading="lazy"
        />
      </div>
      <CTA />
    </div>
  );
}

export default FindScholarships;
