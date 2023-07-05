import React from "react";

function Content() {
	return (
		<div className="slider-content-wrapper" style={{}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-7 col-md-7">
						<div
							className="bg-dark p-4  text-white"
							style={{ opacity: "0.8" }}
						>
							<h5 data-animation="fadeInUp" data-delay=".4s">
								Welcome To Kodo
							</h5>
							<h2
								data-animation="fadeInUp font-weight-700"
								data-delay=".4s"
								style={{ fontWeight: "bold", fontSize: "3rem" }}
							>
								Education is the best key success in life
							</h2>
							<p data-animation="fadeInUp" data-delay=".6s">
								While success can be defined differently by individuals,
								education serves as a fundamental catalyst in achieving
								personal, professional, and societal goals.
							</p>

							<div className="second-header-btn btn-sm">
								<a
									href="about.html"
									className="btn ss-btn mr-15"
									data-animation="fadeInLeft"
									data-delay=".4s"
								>
									Admission Open
									<i className="fal fa-long-arrow-right"></i>
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-5 col-md-5 p-relative"></div>
				</div>
			</div>
		</div>
	);
}

export default Content;
