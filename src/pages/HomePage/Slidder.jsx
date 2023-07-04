import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Slidder = () => {
	return (
		<Fragment>
			<section id="home" class="slider-area fix p-relative">
				<div class="slider-active" style={{ background: "#141b22" }}>
					<div
						class="single-slider slider-bg"
						style={{
							backgroundImage:
								'url("https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688301655/pexels-joshua-mcknight-1139319_bknjyh.jpg")',
							backgroundSize: "cover",
						}}
					>
						<div class="container">
							<div class="row">
								<div class="col-lg-7 col-md-7">
									<div
										class="slider-content s-slider-content mt-130 bg-dark "
										style={{
											display: "flex",
											flexDirection: "column",
											justifyContent: "center",
											padding: "2rem",
											height: "80vh",
											opacity: "0.8",
										}}
									>
										<h5 data-animation="fadeInUp" data-delay=".4s">
											welcome To Kodo
										</h5>
										<h2
											data-animation="fadeInUp font-weight-700"
											data-delay=".4s"
											style={{
												fontWeight: "bold",
											}}
										>
											Education is the best key success in life
										</h2>
										<p data-animation="fadeInUp" data-delay=".6s">
											While success can be defined differently by
											individuals, education serves as a fundamental
											catalyst in achieving personal, professional,
											and societal goals.
										</p>

										<div class="second-header-btn btn-sm">
											<Link
												to="/admissions"
												class="btn ss-btn mr-15"
												data-animation="fadeInLeft"
												data-delay=".4s"
												style={{ background: "#FF7350" }}
											>
												admission open
												<i class="fal fa-long-arrow-right"></i>
											</Link>
										</div>
									</div>
								</div>
								<div class="col-lg-5 col-md-5 p-relative"></div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section style={{ padding: "2rem" }}>
				<div class="container ">
					<div class="row ">
						<div class="col-lg-4 col-md-12 col-sm-12">
							<div class="services-box07">
								<div class="sr-contner">
									<div class="icon">
										<img
											src="https://res.cloudinary.com/itgenius/image/upload/v1688240472/degree-education-university-scroll-svgrepo-com_u19iso.svg"
											alt="icon01"
										/>
									</div>
									<div class="text">
										<h5>
											<a href="/">Start Your New Career</a>
										</h5>
										<p>
											Kodo Scholarship is dedicated to creating
											opportunities for young people in Africa and
											the rest of the world to pursue their dreams
											and reach their full potential.
										</p>
										<a href="/">
											Read More{" "}
											<i class="fal fa-long-arrow-right"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-12 col-sm-12">
							<div class="services-box07 active">
								<div class="sr-contner">
									<div class="icon">
										<img
											src="https://res.cloudinary.com/itgenius/image/upload/v1688240403/education-bag-learning-2-svgrepo-com_4_uska8r.svg"
											alt="icon01"
										/>
									</div>
									<div class="text">
										<h5>
											<a href="/">Scholarship Programs</a>
										</h5>
										<p>
											Kodo is the #1 college scholarship web app in
											the world and has helped students win more than
											$10 million dollars. Join today and start
											matching with scholarships in minutes.
										</p>
										<a href="/">
											Read More{" "}
											<i class="fal fa-long-arrow-right"></i>
										</a>
									</div>
								</div>
							</div>
						</div>

						<div class="col-lg-4 col-md-12 col-sm-12">
							<div class="services-box07">
								<div class="sr-contner">
									<div class="icon">
										<img
											src="https://res.cloudinary.com/itgenius/image/upload/v1688240271/education-svgrepo-com_1_s0jmyk.svg"
											alt="icon01"
										/>
									</div>
									<div class="text">
										<h5>
											<a href="/">Career Opportunities</a>
										</h5>
										<p>
											Looking for a remote job as a developer,
											customer service rep, recruiter, designer or
											sales professional? Launch your career with
											global remote job opportunities
										</p>
										<a href="/">
											Read More{" "}
											<i class="fal fa-long-arrow-right"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Slidder;
