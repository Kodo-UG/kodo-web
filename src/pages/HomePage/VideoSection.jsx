import React from "react";
import "./videoSection.css";

function VideoSection() {
  return (
    <section
      class="cta-area cta-bg pt-160 pb-160"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688930701/video_ixczq2.jpg")',
      }}
    >
      <div className="container">
        <div className="row justify-content-center  align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div
              className="section-title cta-title video-title wow fadeInLeft animated"
              data-animation="fadeInDown animated"
              data-delay=".2s"
            >
              <h2>
                {" "}
                We're <span>Kodo</span> & We're Diffirent
              </h2>
              <p>
                Kodo Search reduces the scholarship search process from months
                to minutes by matching students with opportunities made htmlFor
                them.
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-2"></div>
          <div className="col-lg-4">
            <div className="s-video-content">
              <a
                href="http://www.youtube.com/watch?v=2aKza6Zsk68&t=1429s"
                class="popup-video mb-50"
              >
                <img
                  src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688920197/play-button_x1mykn.png"
                  alt="circle_right"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
