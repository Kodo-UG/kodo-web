import React from "react";
import Client from "./Client";

const Testimonals = () => {
	const clientData = [
		{
			text: "Thank you for giving people opportunity to know more about scholarships and opening opportunities for people to access higher education especially in developing countries.",
			icon: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688353968/icons8-message-50_cxdmgj.png",
			image: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688354215/samantha_idsnjd.jpg",
			name: "Samantha Abena",
			profession: "Ghana",
		},
		{
			text: "Scholars in Pakistan like in other developing countries are barred from seeking higher education due to certain prejudices. Lack of resources and social environment keep us away from the opportunities provided by the developed countries of the world. Thanks to this website which have made me think that the social and economic barriers can be surpassed with the help of the internet facilities..",
			icon: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688353968/icons8-message-50_cxdmgj.png",
			image: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688354215/ayesha_p5zg3n.jpg",
			name: "Ayesha Patricia ",
			profession: "Pakistan",
		},
		{
			text: "Thanks for your scholarships updates. May the Lord bless you for such a wonderful job that you have took upon yourself to educate the whole world especially Africa.",
			icon: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688353968/icons8-message-50_cxdmgj.png",
			image: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688354215/thomas_cnzsws.jpg",
			name: "Thomas Adebiyi",
			profession: "Nigeria",
		},
		{
			text: "Just a big thank you to the guys running this site. i secured a scholarship to Glasgow, all thanks to this site. Was recommended for by a friend just last month. Keep up the good job guys. God Bless!",
			icon: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688353968/icons8-message-50_cxdmgj.png",
			image: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688354215/robin_n9tp5k.jpg",
			name: "Robin Kristofer",
			profession: "Estonia",
		},
		{
			text: "It gives me pleasure to find such opportunities online for the whole world to benefit. Thank you for reaching out to the world and for your kindness.",
			icon: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688353968/icons8-message-50_cxdmgj.png",
			image: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688354215/marvin_njkx1c.jpg",
			name: "Marvin Anyango",
			profession: "Kenya",
		},
		{
			text: "I cannot say thank you enough for your site. Fantastic and wonderful! It is the bridge for the students of financial in need to have the opportunity to go ahead. I call more and more people and organizations to sponsor such sites..",
			icon: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688353968/icons8-message-50_cxdmgj.png",
			image: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688354214/maria_wmbxfy.jpg",
			name: "Maria Amihan",
			profession: "Philipines",
		},
	];
	return (
		<section class="testimonial-area pt-120 pb-115 p-relative fix bg">
			<div class="animations-01">
				<img src="img/bg/an-img-03.png" alt="an-img-01" />
			</div>
			<div class="animations-02">
				<img src="img/bg/an-img-04.png" alt="contact-bg-an-01" />
			</div>
			<div class="">
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
								<i class="fal fa-graduation-cap"></i> Testimonial
							</h5>
							<h2>What Our Clients Says</h2>
						</div>
					</div>

					<div class="col-lg-12 ">
						<div
							class="testimonial-active wow fadeInUp  slick-initialized slick-slider slick-dotted animated "
							data-animation="fadeInUp"
							data-delay=".4s"
							style={{
								visibility: "visible",
								animationName: "fadeInUp",
							}}
						>
							<div class="slick-list draggable ">
								<div
									class="slick-track "
									//   style="opacity: 1; width: 5616px; transform: translate3d(-1296px, 0px, 0px);"
								>
									{clientData.map((data) => (
										<Client
											text={data.text}
											name={data.name}
											profession={data.profession}
											image={data.image}
											icon={data.icon}
										/>
									))}
								</div>
							</div>
							<ul class="slick-dots" role="tablist">
								<li class="slick-active" role="presentation">
									<button
										type="button"
										role="tab"
										id="slick-slide-control30"
										aria-controls="slick-slide30"
										aria-label="1 of 2"
										tabindex="0"
										aria-selected="true"
									>
										1
									</button>
								</li>
								<li role="presentation">
									<button
										type="button"
										role="tab"
										id="slick-slide-control31"
										aria-controls="slick-slide32"
										aria-label="2 of 2"
										tabindex="-1"
									>
										2
									</button>
								</li>
								<li role="presentation">
									<button
										type="button"
										role="tab"
										id="slick-slide-control32"
										aria-controls="slick-slide34"
										aria-label="3 of 2"
										tabindex="-1"
									>
										3
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonals;
