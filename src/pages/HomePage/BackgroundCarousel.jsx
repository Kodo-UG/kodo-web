import React from "react";
import { Carousel } from "react-bootstrap";
import "./bg.css";
import { Link } from "react-router-dom";

const BackgroundCarousel = () => {
	return (
		<Carousel  interval={9900} slide={true}>
			<Carousel.Item>
				<div
					className="d-block w-100"
					style={{
						backgroundImage:
							'url("https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688760317/slider-main_axin8h.jpg")',
						backgroundSize: "cover",
						backgroundPosition: "center",
						filter: "brightness(97%)",
						height: "93vh",
						objectFit: "cover"
					}}
				>
					<div
						className="container h-100 "
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "start"
						}}
					>
						<div
							className="h-100"
							style={{
								width: "75%",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center"
							}}
						>
							<h1
								className="titl"
								style={{
									fontSize: "55px",
									fontWeight: "bolder",
									color: "#fff",
									marginTop: "4.5rem",
									fontFamily: "Jost, sans-serif",
									lineHeight: "71px",
									fontStyle: "normal"
								}}
								data-swiper-animation="fadeInUp"
								data-delay=".4s"
							>
								Find life changing <br />
								scholarships made <br /> for you.
							</h1>
							<h5
								style={{
									color: "#fff",
									width: "70%",
									marginBottom: "4rem",
									fontSize: "16px",
									fontWeight: "800px",
									fontFamily: "Jost, sans-serif",
									lineHeight: "22px",
									fontStyle: "normal"
								}}
								data-swiper-animation="fadeInUp"
								data-delay=".4s"
								className="d-md-block d-none"
							>
								KODO Scholarships is the #1 college scholarship app in
								the world and has helped students win more than $1
								million dollars
							</h5>
							<div style={{ width: "50%" }}>
								<Link to="/stepper">
									<button
										type="button"
										className="btn btn-lg btn-primary"
										style={{
											borderRadius: "2rem",
											background: "#ec1d64",
											border: "none",
											fontSize: "16px",
											fontWeight: "bold",
											color: "#fff",
											fontFamily: "Roboto, sans-serif;",
											lineHeight: "16px",
											fontStyle: "normal",
											padding: "0.8rem"
										}}
									>
										Find Scholarships Now{" "}
										<i className="fal fa-long-arrow-right"></i>
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</Carousel.Item>

			<Carousel.Item>
				<div
					className="d-block w-100"
					style={{
						backgroundImage:
							'url("https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688356748/whiteguy_vxrfnm.jpg")',
						backgroundSize: "cover",
						backgroundPosition: "center",
						filter: "brightness(95%)",
						height: "91vh" 
					}}
				>
					<div
						className="container h-100 "
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "start",
							margitnLeft: "-5rem"
						}}
					>
						<div
							className="h-100 textContainer"
							style={{
								width: "75%",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center"
							}}
						>
							<h1
								style={{
									fontSize: "55px",
									fontWeight: "bolder",
									color: "#fff",
									marginTop: "4rem",
									fontFamily: "Jost, sans-serif",
									lineHeight: "72px",
									fontStyle: "normal"
								}}
								data-swiper-animation="fadeInUp"
								data-delay=".4s"
							>
								Find Life Changing <br /> Jobs at Kodo
							</h1>
							<h5
								style={{
									color: "#fff",
									width: "60%",
									marginBottom: "4rem",
									fontSize: "18px",
									fontWeight: "bolder",
									fontFamily: "Jost, sans-serif",
									lineHeight: "22px",
									fontStyle: "normal"
								}}
								data-swiper-animation="fadeInUp"
								data-delay=".4s"
								className="d-md-block d-none"
							>
								Are you looking for a remote Job? Find Life Changing
								Jobs Now!
							</h5>
							<div style={{ width: "50%" }}>
								<Link to="/jobStep1">
								<button
									type="button"
									className="btn btn-lg btn-primary"
									style={{
										borderRadius: "2rem",
										background: "#ec1d64",
										border: "none",
										fontSize: "16px",
										fontWeight: "bold",
										color: "#fff",
										fontFamily: "Roboto, sans-serif;",
										lineHeight: "16px",
										fontStyle: "normal",
										padding: "0.8rem"
									}}
								>
									Find Jobs Now <i className="fal fa-long-arrow-right"></i>
								</button>
								</Link>
								
							</div>
						</div>
					</div>
				</div>
			</Carousel.Item>
		</Carousel>
	);
};

export default BackgroundCarousel;
