import React from "react";

const Events = () => {
	return (
		<section class="event pt-120 pb-90 p-relative fix">
			{/* <div class="animations-06"><img src="img/bg/an-img-06.png" alt="an-img-01" /></div>
            <div class="animations-07"><img src="img/bg/an-img-07.png" alt="contact-bg-an-01" /></div>
            <div class="animations-08"><img src="img/bg/an-img-08.png" alt="contact-bg-an-01" /></div>
            <div class="animations-09"><img src="img/bg/an-img-09.png" alt="contact-bg-an-01" /></div> */}
			<div class="container">
				<div class="row">
					<div class="col-lg-12 p-relative">
						<div
							class="section-title center-align mb-50 text-center wow fadeInDown animated"
							data-animation="fadeInDown"
							data-delay=".4s"
						>
							<h5 class="font-weight-bold">
								<i class="fal fa-graduation-cap"></i> Our Events
							</h5>
							<h2 class="font-weight-bold">Upcoming Events</h2>
						</div>
					</div>
				</div>
				<div class="row">
					<div
						class="col-lg-4 col-md-6  wow fadeInUp animated"
						data-animation="fadeInUp"
						data-delay=".4s"
					>
						<div class="event-item mb-30 hover-zoomin">
							<div class="thumb">
								<a href="single-event.html">
									<img
										src="https://res.cloudinary.com/itgenius/image/upload/v1688242890/woman_gooca7.jpg"
										alt="contact-bg-an-01"
									/>
								</a>
							</div>
							<div class="event-content">
								<div class="date">
									<strong>18</strong> March, 2023
								</div>
								<h3>
									<a href="single-event.html">
										{" "}
										How to Write a Scholarship Essay and Win BIG [2022
										Edition]
									</a>
								</h3>
								<p>
									With a new school year here, now’s the perfect time
									to get serious about searching for..
								</p>
								<div class="time">
									<strong>Read More</strong>{" "}
									<i class="fal fa-long-arrow-right"></i>
								</div>
							</div>
						</div>
					</div>
					<div
						class="col-lg-4 col-md-6  wow fadeInUp animated"
						data-animation="fadeInUp"
						data-delay=".4s"
					>
						<div class="event-item mb-30 hover-zoomin">
							<div class="thumb">
								<a href="single-event.html">
									<img
										src="https://res.cloudinary.com/itgenius/image/upload/v1688242889/interracial_glx8wp.jpg"
										alt="contact-bg-an-01"
									/>
								</a>
							</div>
							<div class="event-content">
								<div class="date">
									<strong>20</strong> March, 2023
								</div>
								<h3>
									<a href="single-event.html">
										How To Know If You Qualify For Need Based
										Financial Aid
									</a>
								</h3>
								<p>
									The cost of your college education can be
									intimidating. Which is why it’s important..
								</p>
								<div class="time">
									<strong>Read More</strong>{" "}
									<i class="fal fa-long-arrow-right"></i>
								</div>
							</div>
						</div>
					</div>
					<div
						class="col-lg-4 col-md-6  wow fadeInUp animated"
						data-animation="fadeInUp"
						data-delay=".4s"
					>
						<div class="event-item mb-30 hover-zoomin">
							<div class="thumb">
								<a href="single-event.html">
									<img
										src="https://res.cloudinary.com/itgenius/image/upload/v1688242890/whiteguy_l1zkg0.jpg"
										alt="contact-bg-an-01"
									/>
								</a>
							</div>
							<div class="event-content">
								<div class="date">
									<strong>22</strong> March, 2023
								</div>
								<h3>
									<a href="single-event.html">
										{" "}
										5 Expert Tips on How to Apply for Scholarships
										[2022 Edition]
									</a>
								</h3>
								<p>
									Scholarships are, undoubtedly, the best form of
									financial aid. They’re free money to pay for college
								</p>
								<div class="time">
									<strong>Read More</strong>{" "}
									<i class="fal fa-long-arrow-right"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Events;
