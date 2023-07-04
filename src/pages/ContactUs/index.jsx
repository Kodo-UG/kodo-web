import React, { Fragment } from "react";
import EmbeddedMap from "./EmbeddedMap";

const ContactUs = () => {
	return (
		<Fragment>
			<section id="services" class="services-area pt-120 pb-90 fix">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div
								class="section-title text-center mb-50 wow fadeInDown  animated"
								data-animation="fadeInDown"
								data-delay=".4s"
								style={{
									visibility: "visible",
									animationName: "fadeInDown",
								}}
							>
								<h5>
									<i class="fal fa-graduation-cap"></i> Contact Info
								</h5>
								<h2>Get In Touch</h2>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-4 col-md-4">
							<div class="services-box text-center">
								<div class="services-icon">
									<img
										src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688358564/contact-icon01_g7ak7y.png"
										alt=""
									/>
								</div>
								<div class="services-content2">
									<h5>
										<a href="tel: +46728488313">+46 72 848 83 13</a>
									</h5>
									<p>Phone Support</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-4">
							<div class="services-box text-center active">
								<div class="services-icon">
									<img
										src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688358564/contact-icon02_fjamxl.png"
										alt=""
									/>
								</div>
								<div class="services-content2">
									<h5>
										<a href="mailto:info@kodoscholarships.com">
											info@kodoscholarships.com
										</a>
									</h5>
									<p>Email Address</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-4">
							<div class="services-box text-center">
								<div class="services-icon">
									<img
										src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688358564/contact-icon03_bkfwvp.png"
										alt=""
									/>
								</div>
								<div class="services-content2">
									<h5>Oppegårdsstråket 5 A,</h5>
									<p>
										lgh 1804, 191 60 <br />
										Sollentuna
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div style={{ marginTop: "2rem" }}>
					<EmbeddedMap />
				</div>
			</section>
		</Fragment>
	);
};

export default ContactUs;
