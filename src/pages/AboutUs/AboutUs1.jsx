import React, { Fragment } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs1 = () => {
	return (
		<Fragment>
			<section
				style={{
					paddingLeft: "4rem",
					paddingRight: "4rem",
				}}
				className="box-cont bk"
			>
				<div className="">
					<div className="row">
						<div className="col-lg-6 image-box">
							<div className="image-content">
								<div className="image1">
									<img
										style={{ height: "30rem", width: "18rem" }}
										src="https://res.cloudinary.com/itgenius/image/upload/v1688886728/Screenshot_from_2023-07-09_10-07-07_rp5zg3.png"
										alt=""
										className="image-original imgbk"
									/>
								</div>
								<div className="image2">
									<img
										style={{ height: "14rem", width: "16rem" }}
										src="https://res.cloudinary.com/itgenius/image/upload/v1688886952/Screenshot_from_2023-07-09_10-15-34_iqepdf.png"
										alt=""
										className="image-original"
									/>
								</div>
								<div className="image3">
									<img
										style={{ height: "14rem", width: "16rem" }}
										src="https://res.cloudinary.com/itgenius/image/upload/v1688887088/Screenshot_from_2023-07-09_10-17-47_azni8z.png"
										alt=""
										className="image-original"
									/>
								</div>
							</div>
						</div>
						<div className="col-lg-6 content-box">
							<div className="content-items">
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
									We take the hassle out of the scholarship search
									process and increase your chances of matching you
									with scholarships in minutes.
								</p>
								<p>
									We've helped students win more than $10 million
									dollars in scholarships. We take the hassle out of
									the scholarship search process and increase your
									chances of matching you with scholarships in minutes.
								</p>
								<div className="sub-content">
									<div className="sub-content1">
										<h2>Our Mission</h2>
										<p>
											Our mission is to ensure that we build a
											Scholarship System that will operate in the
											whole of the world; a company that will boast
											of having some of the best and reliable
											scholarships{" "}
										</p>
									</div>
									<div className="sub-content1">
										<h2>Our Programs</h2>
										<p>
											Our Vision is to become one of the most
											preferred choices of individuals and
											organizations when it comes to the demand for
											Scholarships and Job offers in the whole of
											Africa and the rest of the world{" "}
										</p>
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

export default AboutUs1;
