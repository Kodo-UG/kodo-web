import React from "react";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<section
			className="about-area about-p pt-120 pb-120 p-relative fix"
			style={{ background: "#eff7ff" }}
		>
			<div className="animations-02">
				<img
					src="https://res.cloudinary.com/itgenius/image/upload/v1688241470/an-img-02_lzw6od.png"
					alt="contact-bg-an-01"
				/>
			</div>
			<div className="container">
				<div className="row align-items-center justify-content-center">
					<div className="col-lg-6 col-md-12 col-sm-12">
						<div
							className="s-about-img p-relative wow fadeInLeft animated"
							data-animation="fadeInLeft"
							data-delay=".4s"
						>
							<img
								src="https://res.cloudinary.com/itgenius/image/upload/v1688241331/about_img_02-1_sbyudl.png"
								alt="img"
							/>
							<div
								style={{ height: "7.8rem", width: "15.8rem" }}
								className="about-text second-about"
							>
								<span style={{ fontSize: "2rem" }}>
									25 <sub>+</sub>
								</span>
								<p>Years of Experience</p>
							</div>
						</div>
					</div>

					<div className="col-lg-6 col-md-12 col-sm-12">
						<div
							className="about-content s-about-content pl-15 wow fadeInRight animated"
							data-animation="fadeInRight"
							data-delay=".4s"
						>
							<div className="about-title second-title pb-25 fontWeight-bold">
								<h5>
									<i className="fal fa-graduation-cap font-weight-bold"></i>{" "}
									About Our Scholarships
								</h5>
								<h2 className="font-weight-bold">
									A Few Words About Kodo
								</h2>
							</div>
							<p className="txt-clr">
								We take the hassle out of the scholarship search process
								and increase your chances of matching you with
								scholarships in minutes.
							</p>
							<p>
								We’ve helped students win more than $10 million dollars
								in scholarships. We take the hassle out of the
								scholarship search process and increase your chances of
								matching you with scholarships in minutes.
							</p>
							{/* <div className="about-content2">
                <div className="row">
                  <div className="col-md-12">
                    <ul className="green2">
                      <li>
                        <div className="abcontent">
                          <div className="ano"><span>01</span></div>
                          <div className="text">
                            <h3>Doctoral Degrees</h3>
                            <p>consectetur adipiscing elit sed do eiusmod tem incid idunt.</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="abcontent">
                          <div className="ano"><span>02</span></div>
                          <div className="text">
                            <h3>Global Students</h3>
                            <p>consectetur adipiscing elit sed do eiusmod tem incid idunt.</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
							<div className="slider-btn mt-20">
								<Link
									to="/db"
									className="btn ss-btn smoth-scroll"
									style={{ padding: "18px", color: "white" }}
								>
									Search Programs{" "}
									<i className="fal fa-long-arrow-right"></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
