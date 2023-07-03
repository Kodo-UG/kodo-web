import React from "react";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<section
			class="about-area about-p pt-120 pb-120 p-relative fix"
			style={{ background: "#eff7ff" }}
		>
			<div class="animations-02">
				<img
					src="https://res.cloudinary.com/itgenius/image/upload/v1688241470/an-img-02_lzw6od.png"
					alt="contact-bg-an-01"
				/>
			</div>
			<div
				class=""
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<div
					class=""
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						width: "75%",
					}}
				>
					<div
						class=""
						style={{
							display: "flex",
						}}
					>
						<div
							class="s-about-img p-relative  wow fadeInLeft animated"
							data-animation="fadeInLeft"
							data-delay=".4s"
						>
							<img
								src="https://res.cloudinary.com/itgenius/image/upload/v1688241331/about_img_02-1_sbyudl.png"
								alt="img"
							/>
							<div class="about-text second-about">
								<span>
									25 <sub>+</sub>
								</span>
								<p>Years of Experience</p>
							</div>
						</div>
					</div>

					<div class="col-lg-6 col-md-12 col-sm-12">
						<div
							class="about-content s-about-content pl-15 wow fadeInRight  animated"
							data-animation="fadeInRight"
							data-delay=".4s"
						>
							<div class="about-title second-title pb-25 fontWeight-bold">
								<h5>
									<i class="fal fa-graduation-cap font-weight-bold"></i>{" "}
									About Our Scholarships
								</h5>
								<h2 class="font-weight-bold">A Few Words About Kodo</h2>
							</div>
							<p class="txt-clr">
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
							{/* <div class="about-content2">
                                <div class="row">
                                    <div class="col-md-12">
                                        <ul class="green2">
                                            <li><div class="abcontent"><div class="ano"><span>01</span></div> <div class="text"><h3>Doctoral Degrees</h3> <p>consectetur adipiscing elit sed do eiusmod tem incid idunt.</p></div></div></li>
                                            <li><div class="abcontent"><div class="ano"><span>02</span></div> <div class="text"><h3>Global Students</h3> <p>consectetur adipiscing elit sed do eiusmod tem incid idunt.</p></div></div></li>

                                        </ul>
                                    </div>
                                </div>
                            </div> */}
							<div class="slider-btn mt-20">
								<Link
									to="/"
									class="btn ss-btn smoth-scroll"
									style={{
										padding: "20px",
										color: "white",
									}}
								>
									Read More <i class="fal fa-long-arrow-right"></i>
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
