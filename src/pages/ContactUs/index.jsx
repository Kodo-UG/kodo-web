import React, { Fragment } from "react";
import EmbeddedMap from "./EmbeddedMap";
import CustomForm from "./CustomForm";

const ContactUs = () => {
  return (
    <Fragment>
      <section id="services" className="services-area pt-120 pb-90 fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center mb-50 wow fadeInDown  animated"
                data-animation="fadeInDown"
                data-delay=".4s"
                style={{
                  visibility: "visible",
                  animationName: "fadeInDown",
                }}
              >
                <h5>
                  <i className="fal fa-graduation-cap"></i> Contact Info
                </h5>
                <h2>Get In Touch</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="services-box text-center">
                <div className="services-icon">
                  <img
                    style={{ marginLeft: "3rem" }}
                    src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688358564/contact-icon01_g7ak7y.png"
                    alt=""
                  />
                </div>
                <div className="services-content2">
                  <h5>
                    <a href="tel: +46728488313">+46 72 848 83 13</a>
                  </h5>
                  <p>Phone Support</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="services-box text-center active">
                <div className="services-icon">
                  <img
                    style={{ marginLeft: "3rem" }}
                    src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688358564/contact-icon02_fjamxl.png"
                    alt=""
                  />
                </div>
                <div className="services-content2">
                  <h5>
                    <a
                      style={{ fontSize: "1.5rem" }}
                      href="mailto:info@kodoscholarships.com"
                    >
                      info@kodoscholarships.com
                    </a>
                  </h5>
                  <p>Email Address</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4">
              <div
                style={{ justifyContent: "center" }}
                className="services-box text-center"
              >
                <div className="services-icon">
                  <img
                    style={{ marginLeft: "3rem" }}
                    src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688358564/contact-icon03_bkfwvp.png"
                    alt=""
                  />
                </div>
                <div className="services-content2">
                  <h5>Oppegårdsstråket 5 A,</h5>
                  <p>
                    lgh 1804, 191 60 
                    Sollentuna
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <EmbeddedMap />
      </div>
      <div>
        <CustomForm />
      </div>
    </Fragment>
  );
};

export default ContactUs;
