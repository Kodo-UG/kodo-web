import { Fragment } from "react";
import { Carousel } from "react-bootstrap";
import CardSection from "./CardSection";
import Content from "./Content";

const BackgroundCarousel = () => {
	return (
		<Carousel
			interval={8900}
			pause={false}
			slide={true}
			style={{
				backgroundImage:
					'url("https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688760317/slider-main_axin8h.jpg")',
				backgroundSize: "cover",
				backgroundPosition: "center",
				height: "87vh",
				position: "relative",
				filter: "brightness(90%)",
			}}
		>
			<Carousel.Item>
				<div
					className="d-block w-100  "
					style={{
						backgroundImage:
							'url("https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688356748/whiteguy_vxrfnm.jpg")',
						backgroundSize: "cover",
						backgroundPosition: "center",
						height: "87vh",
						position: "relative",
						filter: "brightness(90%)",
					}}
				></div>
			</Carousel.Item>
			{/* <Carousel.Item>
				<div
					className="d-block w-100  bg-dark"
					style={{
						backgroundImage:
							'url("https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688760317/slider-main_axin8h.jpg")',
						backgroundSize: "cover",
						backgroundPosition: "center",
						height: "87vh",
						position: "relative",
						filter: "brightness(70%)",
					}}
				></div>
			</Carousel.Item> */}
		</Carousel>
	);
};

export default BackgroundCarousel;
