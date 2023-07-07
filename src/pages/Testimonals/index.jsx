import React from "react";
import { useEffect } from "react";
import $ from "jquery";
import Client from "./Client";
import TestimonialComponent from "./TestimonialComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./testimonial.css"; // Assuming you create this file for additional CSS
// Assuming you create this file for additional JavaScript
import TestimonialCarousel from "./TestimonialCarousel";

const Testimonals = () => {
	const clientData = [
		{
			text: "Thank you for giving people opportunity to know more about scholarships and opening opportunities for people to access higher education especially in developing countries.",
			image: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688354215/samantha_idsnjd.jpg",
			name: "Samantha Abena",
			profession: "Ghana",
		},
		{
			text: "Scholars in Pakistan like in other developing countries are barred from seeking higher education due to certain prejudices. Lack of resources and social environment keep us away from the opportunities provided by the developed countries of the world. Thanks to this website which have made me think that the social and economic barriers can be surpassed with the help of the internet facilities..",
			image: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688354215/ayesha_p5zg3n.jpg",
			name: "Ayesha Patricia ",
			profession: "Pakistan",
		},
		{
			text: "Thanks for your scholarships updates. May the Lord bless you for such a wonderful job that you have took upon yourself to educate the whole world especially Africa.",
			image: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688354215/thomas_cnzsws.jpg",
			name: "Thomas Adebiyi",
			profession: "Nigeria",
		},
		{
			text: "Just a big thank you to the guys running this site. i secured a scholarship to Glasgow, all thanks to this site. Was recommended for by a friend just last month. Keep up the good job guys. God Bless!",
			image: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688354215/robin_n9tp5k.jpg",
			name: "Robin Kristofer",
			profession: "Estonia",
		},
		{
			text: "It gives me pleasure to find such opportunities online for the whole world to benefit. Thank you for reaching out to the world and for your kindness.",
			image: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688354215/marvin_njkx1c.jpg",
			name: "Marvin Anyango",
			profession: "Kenya",
		},
		{
			text: "I cannot say thank you enough for your site. Fantastic and wonderful! It is the bridge for the students of financial in need to have the opportunity to go ahead. I call more and more people and organizations to sponsor such sites..",
			image: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688354214/maria_wmbxfy.jpg",
			name: "Maria Amihan",
			profession: "Philipines",
		},
	];
	return (
		<section class="testimonial-area pt-120 pb-115 p-relative fix">
			<div class="animations-01">
				<img
					src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688708283/an-img-02_ayedyx.png"
					alt="an-img-01"
				/>
			</div>
			<div class="animations-02">
				<img
					src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688709056/903894_joy04i.jpg"
					alt="contact-bg-an-01"
					style={{ opacity: 0.4 }}
				/>
			</div>
			<div class="">
				<div class="row">
					<div class="col-lg-12">
						<div
							class="section-title text-center mb-50 wow fadeInDown  animated"
							data-animation="fadeInDown"
							data-delay=".4s"
							style={{
								animationName: "fadeInDown",
							}}
						>
							<h5>
								<i class="fal fa-graduation-cap"></i> Testimonial
							</h5>
							<h2 style={{ fontWeight: "bold" }}>
								What Our Clients Say
							</h2>
						</div>
						<div
							class=""
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
							//   style="opacity: 1; width: 5616px; transform: translate3d(-1296px, 0px, 0px);"
						>
							<TestimonialCarousel clientData={clientData} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonals;
