import React from "react";
import { Link } from "react-router-dom";

function CardSection() {
	return (
		<section style={{ padding: "2rem" }}>
			<div class="container ">
				<div class="row ">
					<div class="col-lg-4 col-md-12 col-sm-12">
						<div class="services-box07">
							<div class="sr-contner">
								<div class="icon">
									<img
										style={{ width: "30px", marginLeft: "15px" }}
										src="https://res.cloudinary.com/itgenius/image/upload/v1688910165/sve-icon4_wj25fd.png"
										alt="icon01"
									/>
								</div>
								<div class="text">
									<h5>
										<a href="/aboutus">Start Your New Career</a>
									</h5>
									<p>
										Kodo Scholarship is dedicated to creating
										opportunities for young people in Africa and the
										rest of the world to pursue their dreams and reach
										their full potential.
									</p>
									<Link to="/aboutus">
										Read More <i class="fal fa-long-arrow-right"></i>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-12 col-sm-12">
						<div class="services-box07 active">
							<div class="sr-contner">
								<div class="icon">
									<img
										style={{ width: "30px", marginLeft: "15px" }}
										src="https://res.cloudinary.com/itgenius/image/upload/v1688910165/sve-icon5_isymhj.png"
										alt="icon01"
									/>
								</div>
								<div class="text">
									<h5>
										<Link to="/aboutus">Scholarship Programs</Link>
									</h5>
									<p>
										Kodo is the #1 college scholarship web app in the
										world and has helped students win more than $10
										million dollars. Join today and start matching
										with scholarships in minutes.
									</p>
									<Link to="/aboutus">
										Read More <i class="fal fa-long-arrow-right"></i>
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-12 col-sm-12">
						<div class="services-box07">
							<div class="sr-contner">
								<div class="icon">
									<img
										style={{ width: "30px", marginLeft: "15px" }}
										src="https://res.cloudinary.com/itgenius/image/upload/v1688910165/sve-icon6_xunnnu.png"
										alt="icon01"
									/>
								</div>
								<div class="text">
									<h5>
										<Link to="/aboutus">Career Opportunities</Link>
									</h5>
									<p>
										Looking for a remote job as a developer, customer
										service rep, recruiter, designer or sales
										professional? Launch your career with global
										remote job opportunities
									</p>
									<a href="about.html">
										Read More <i class="fal fa-long-arrow-right"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CardSection;
