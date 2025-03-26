import React from "react";
import { PlayIcon } from "lucide-react";
import './experience.css';
import '../../components/videosection.css';

export default function Experience({ background }) {
  return (
    <div
      className='video-section'
      style={{
        marginTop: -250
      }}
    >
        <div className={`experience-container ${background ? background : "bg-kodo-cyan"}`}>
          {/* <div className="video-section-bg">
            <div className="video-section-img-container"
            >
              <div
                className="expereience-image-container"
              >
                <img
                  src="https://res.cloudinary.com/dfdswxx7x/image/upload/v1740083635/Kodo-image-2-2wewe_1_1_hm4nbe.png"
                  alt="vector"
                  className="video-section-img"
                />
              </div>
            </div>
          </div> */}
          <div className="experience-grid">
            <div className="experience-content">
              <div className="experience-tag">Experience</div>
              <h2 className="experience-title">25+ years and counting</h2>
              <p className="experience-text">
                It is our aim to help you find opportunities for higher education
                and become agents of development in your own countries and the rest
                of the world.
              </p>
              <button className="play-button" aria-label="Play video reel">
                <div className="play-icon">
                  <PlayIcon className="icon-size" />
                </div>
                Play Reel
              </button>
            </div>

            <div className="experience-image-container">
              <div className="image-wrapper">
                <img
                  src="https://res.cloudinary.com/digrh1wj1/image/upload/v1742426394/portrait-student-black-woman-with-backpack-blue-background-studying-happy-face-girl-young-person-with-bag-university-education-scholarship-opportunity-learning-college_1_qwaldy.png"
                  alt="Student with backpack"
                  width={903}
                  height={760}
                  className="student-image"
                />
              </div>
              {/* Decorative Elements */}
              <div className="decorative-image-container">
                <div className="decorative-image-wrapper">
                  <img
                    src="https://res.cloudinary.com/digrh1wj1/image/upload/v1742426393/Kodo-image-2-2wewe_3_vsbofv.png"
                    alt="Decorative pattern"
                    className="decorative-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
