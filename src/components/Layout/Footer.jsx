import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer
			class="footer-bg footer-p pt-90"
			style={{
				backgroundColor: "#125875",
				backgroundImage:
					"url(https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688766213/footer-bg_hrigyb.png)"
			}}
		>
			<div class="footer-top  pb-70">
				<div class="container">
					<div class="row justify-content-between">
						<div
							style={{ paddingLeft: "" }}
							class="col-xl-4 col-lg-4 col-sm-6"
						>
							<img
								style={{ width: "8rem" }}
								src="https://res.cloudinary.com/itgenius/image/upload/v1688915710/logo-urayana_ap1o8i.png"
								alt=""
							/>
						</div>
						<div
							style={{ paddingLeft: "3rem" }}
							class="col-xl-2 col-lg-2 col-sm-6"
						>
							<div class="footer-widget mb-30">
								<div class="footer-link">
									<ul>
										<li>
											<Link to="/">About Us</Link>
										</li>
										<li>
											<Link to="/aboutus"> FAQ</Link>
										</li>

										<li>
											<Link to="/contactus"> Scholarships</Link>
										</li>
										<li>
											<Link to="/blog">Privacy Policy </Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div
							style={{ paddingLeft: "3rem" }}
							class="col-xl-3 col-lg-3 col-sm-6"
						>
							<div class="footer-widget mb-30">
								{/* <div class="f-widget-title">
									<h2>Latest Post</h2>
								</div> */}
								<div class="footer-link">
									<ul>
										<li>
											<Link to="/">Testmonials </Link>
										</li>
										<li>
											<Link to="/aboutus"> Terms of Service</Link>
										</li>

										<li>
											<Link to="/contactus"> Blog</Link>
										</li>
										<li>
											<Link to="/blog">Contact Us </Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div
							style={{ paddingLeft: "3rem" }}
							class="col-xl-3 col-lg-3 col-sm-6"
						>
							<div class="footer-widget mb-30">
								<div class="footer-social mt-10">
									<Link to="#">
										<i class="fab fa-facebook-f"></i>
									</Link>
									<Link to="#">
										<i class="fab fa-instagram"></i>
									</Link>
									<Link to="#">
										<i class="fab fa-twitter"></i>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="copyright-wrap">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-lg-4">
							{/* <div class="copy-text">
                                <a href="/"><img src="img/logo/f_logo.png" alt="img" /></a>
                            </div> */}
						</div>
						<div class="col-lg-4 text-center"></div>
						<div class="col-lg-4 text-right text-xl-right">
							Copyright &copy; Kodo Sponsorships 2023 . All rights
							reserved.
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
