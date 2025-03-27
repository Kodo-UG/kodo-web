import React from "react";
import CustomContainer from "./ShredComponents/CustomerContainer";
import {Link} from 'react-router-dom';
import './hero.css';

function HeroSection() {
  return (
    <div className="hero-section"
      style={{
        backgroundColor: '#eeeef7'
      }}
    >
      <CustomContainer>
        <div className="hero-grid">
          <div className="hero-text-container">
            <h1 className="hero-title">
              Find Life-changing Scholarships made for you
            </h1>
            <p className="hero-description">
              Kodo Scholarships is the #1 college scholarship app in the world 
              and has helped students win more than $1 million dollars
            </p>
            <Link href="/scholarships" className="hero-button">
              Find Scholarships →
            </Link>
          </div>

          <div className="hero-image-container">
            <img
              src="https://res.cloudinary.com/djbzzqgzx/image/upload/v1742437666/Group_5_mgdcro.png"
              alt="Student with books"
              className="hero-image"
            />
          </div>
        </div>
      </CustomContainer>
    </div>
  );
}

export default HeroSection;
