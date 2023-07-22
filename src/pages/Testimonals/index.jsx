import React from "react";
import { useEffect } from "react";
import $ from "jquery";
import Client from "./Client";
import TestimonialComponent from "./TestimonialComponent";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./testimonial.css"; // Assuming you create this file for additional CSS
// Assuming you create this file for additional JavaScript
import TestimonialCarousel from "./TestimonialCarousel";

const Testimonals = () => {
	// const clientData = [
	// 	{
	// 		text: "Thank you for giving people opportunity to know more about scholarships and opening opportunities for people to access higher education especially in developing countries.",
	// 		image: "https://res.cloudinary.com/itgenius/image/upload/v1688928366/samantha_orwf70.jpg",
	// 		name: "Samantha Abena",
	// 		profession: "Ghana"
	// 	},
	// 	{
	// 		text: "Scholars in Pakistan like in other developing countries are barred from seeking higher education due to certain prejudices. Lack of resources and social environment keep us away from the opportunities provided by the developed countries of the world. Thanks to this website which have made me think that the social and economic barriers can be surpassed with the help of the internet facilities..",
	// 		image: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688354215/ayesha_p5zg3n.jpg",
	// 		name: "Ayesha Patricia ",
	// 		profession: "Pakistan"
	// 	},
	// 	{
	// 		text: "Thanks for your scholarships updates. May the Lord bless you for such a wonderful job that you have took upon yourself to educate the whole world especially Africa.",
	// 		image: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688354215/thomas_cnzsws.jpg",
	// 		name: "Thomas Adebiyi",
	// 		profession: "Nigeria"
	// 	},
	// 	{
	// 		text: "Just a big thank you to the guys running this site. i secured a scholarship to Glasgow, all thanks to this site. Was recommended for by a friend just last month. Keep up the good job guys. God Bless!",
	// 		image: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688354215/robin_n9tp5k.jpg",
	// 		name: "Robin Kristofer",
	// 		profession: "Estonia"
	// 	},
	// 	{
	// 		text: "It gives me pleasure to find such opportunities online for the whole world to benefit. Thank you for reaching out to the world and for your kindness.",
	// 		image: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688354215/marvin_njkx1c.jpg",
	// 		name: "Marvin Anyango",
	// 		profession: "Kenya"
	// 	},
	// 	{
	// 		text: "I cannot say thank you enough for your site. Fantastic and wonderful! It is the bridge for the students of financial in need to have the opportunity to go ahead. I call more and more people and organizations to sponsor such sites..",
	// 		image: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688354214/maria_wmbxfy.jpg",
	// 		name: "Maria Amihan",
	// 		profession: "Philipines"
	// 	}
	// ];
	return (
		<section
			style={{
				display: "flex",
				justifyContent: "center",
				margin: "auto",
				alignItems: "center",
				padding: "4rem",
				marginTop: "5rem"
			}}
			className="testimonial-section "
		>
			<div
				className=""
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					paddingLeft: "4rem",
					paddingRight: "4rem"
				}}
			>
				<h3
					className="section-title"
					style={{
						fontFamily: "Jost, sans-serif",
						fontWeight: "bold"
					}}
				>
					Testimonials
				</h3>
				<div className="testimonial-carousel ">
					<div className="testimonial-item ">
						<div className="testimonial-image">
							<img
								src="https://res.cloudinary.com/itgenius/image/upload/v1688928366/samantha_orwf70.jpg"
								alt="testimonial-1"
							/>
							<div className="testimonial-icon">
								<i className="fas fa-quote-left" />
							</div>
						</div>
						<div className="testimonial-content">
							<p>
								Thank you for giving people opportunity to know more
								about scholarships and opening opportunities for people
								to access higher education especially in developing
								countries.
							</p>
							<div className="testimonial-meta">
								<span className="testimonial-name">
									Samantha Abena -{" "}
								</span>
								<span className="testimonial-title">Ghana</span>
							</div>
						</div>
					</div>
					<div className="testimonial-item">
						<div className="testimonial-image">
							<img
								src="https://res.cloudinary.com/itgenius/image/upload/v1688928367/ayesha_gt7ndr.jpg"
								alt="testimonial-1"
							/>
							<div className="testimonial-icon">
								<i className="fas fa-quote-left" />
							</div>
						</div>
						<div className="testimonial-content">
							<p>
								Scholars in Pakistan like in other developing countries
								are barred from seeking higher education due to certain
								prejudices. Lack of resources and social environment
								keep us away from the opportunities provided by the
								developed countries of the world. Thanks to this website
								which have made me think that the social and economic
								barriers can be surpassed with the help of the internet
								facilities..
							</p>
							<div className="testimonial-meta">
								<span className="testimonial-name">
									Ayesha Patricia -{" "}
								</span>
								<span className="testimonial-title">Pakistan</span>
							</div>
						</div>
					</div>
					<div className="testimonial-item">
						<div className="testimonial-image">
							<img
								src="https://res.cloudinary.com/itgenius/image/upload/v1688928366/thomas_l2spzs.jpg"
								alt="testimonial-1"
							/>
							<div className="testimonial-icon">
								<i className="fas fa-quote-left" />
							</div>
						</div>
						<div className="testimonial-content">
							<p>
								Thanks for your scholarships updates. May the Lord bless
								you for such a wonderful job that you have took upon
								yourself to educate the whole world especially Africa.
							</p>
							<div className="testimonial-meta">
								<span className="testimonial-name">
									Thomas Adebiyi -{" "}
								</span>
								<span className="testimonial-title">Nigeria</span>
							</div>
						</div>
					</div>
					<div className="testimonial-item">
						<div className="testimonial-image">
							<img
								src="https://res.cloudinary.com/itgenius/image/upload/v1689358592/robin_t5ce9s.jpg"
								alt="testimonial-1"
							/>
							<div className="testimonial-icon">
								<i className="fas fa-quote-left" />
							</div>
						</div>
						<div className="testimonial-content">
							<p>
								Just a big thank you to the guys running this site. i
								secured a scholarship to Glasgow, all thanks to this
								site. Was recommended for by a friend just last month.
								Keep up the good job guys. God Bless!
							</p>
							<div className="testimonial-meta">
								<span className="testimonial-name">
									Robin Kristofer -{" "}
								</span>
								<span className="testimonial-title">Estonia</span>
							</div>
						</div>
					</div>
					<div className="testimonial-item">
						<div className="testimonial-image">
							<img
								src="https://res.cloudinary.com/itgenius/image/upload/v1688928960/marvin_gdcwua.jpg"
								alt="testimonial-2"
							/>
							<div className="testimonial-icon">
								<i className="fas fa-quote-left" />
							</div>
						</div>
						<div className="testimonial-content">
							<p>
								It gives me pleasure to find such opportunities online
								for the whole world to benefit. Thank you for reaching
								out to the world and for your kindness.
							</p>
							<div className="testimonial-meta">
								<span className="testimonial-name">
									Marvin Anyango -{" "}
								</span>
								<span className="testimonial-title">Kenya</span>
							</div>
						</div>
					</div>
					<div className="testimonial-item">
						<div className="testimonial-image">
							<img
								src="https://res.cloudinary.com/itgenius/image/upload/v1688928367/maria_wi2bnt.jpg"
								alt="testimonial-3"
							/>
							<div className="testimonial-icon">
								<i className="fas fa-quote-left" />
							</div>
						</div>
						<div className="testimonial-content">
							<p>
								I cannot say thank you enough for your site. Fantastic
								and wonderful! It is the bridge for the students of
								financial in need to have the opportunity to go ahead. I
								call more and more people and organizations to sponsor
								such sites..
							</p>
							<div className="testimonial-meta">
								<span className="testimonial-name">
									Maria Amihan -{" "}
								</span>
								<span className="testimonial-title">Phillipines</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonals;
