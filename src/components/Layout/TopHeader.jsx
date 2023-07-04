import React from "react";

const Header = () => {
	return (
		<div class="header-top second-header d-none d-md-block">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-lg-4 col-md-4 d-none d-lg-block ">
						<div class="header-social">
							<span>
								Follow us:-
								<a href="#" title="Facebook">
									<i class="fab fa-facebook-f"></i>
								</a>
								<a href="#" title="LinkedIn">
									<i class="fab fa-instagram"></i>
								</a>
								<a href="#" title="Twitter">
									<i class="fab fa-twitter"></i>
								</a>
								<a href="#" title="Twitter">
									<i class="fab fa-youtube"></i>
								</a>
							</span>
						</div>
					</div>
					<div class="col-lg-8 col-md-8 d-none d-lg-block text-right">
						<div class="header-cta">
							<ul>
								<li>
									<div class="call-box">
										<div class="icon">
											<img
												src="https://res.cloudinary.com/itgenius/image/upload/v1688244299/phone-call-svgrepo-com_oy79sn.svg"
												alt="img"
											/>
										</div>
										<div class="text">
											<span>Call Now !</span>
											<strong>
												<a href="tel:+917052101786">
													+1 (444) 000-8888
												</a>
											</strong>
										</div>
									</div>
								</li>
								<li>
									<div class="call-box">
										<div class="icon">
											<img
												src="https://res.cloudinary.com/itgenius/image/upload/v1688244438/email-1573-svgrepo-com_oegbvh.svg"
												alt="img"
											/>
										</div>
										<div class="text">
											<span>Email Now</span>
											<strong>
												<a href="mailto:Info@kodoscholarships.com">
													Info@kodoscholarships.com
												</a>
											</strong>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
