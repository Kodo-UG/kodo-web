import { Fragment } from "react";
import { Carousel } from "react-bootstrap";
import CardSection from "./CardSection";
import Content from "./Content";

const BackgroundCarousel = () => {
	return (
		<Carousel
			interval={8000}
			pause={false}
			slide={true}
			style={{ background: "#032E3F" }}
		>
			<Carousel.Item>
				<div
					className="d-block w-100  bg-dark"
					style={{
						backgroundImage:
							'url("https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688356749/interracial_nlf8sd.jpg")',
						backgroundSize: "cover",
						backgroundPosition: "center",
						height: "500px",
						position: "relative",
					}}
				></div>
			</Carousel.Item>
			<Carousel.Item>
				<div
					className="d-block w-100  "
					style={{
						backgroundImage:
							'url("https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688356749/grad_mo6ifc.jpg")',
						backgroundSize: "cover",
						backgroundPosition: "center",
						height: "500px",
					}}
				></div>
			</Carousel.Item>
			<Carousel.Item>
				<div
					className="d-block w-100  bg-dark"
					style={{
						backgroundImage:
							'url("https://res.cloudinary.com/dmhsf5hqd/image/upload/v1688301655/pexels-joshua-mcknight-1139319_bknjyh.jpg")',
						backgroundSize: "cover",
						backgroundPosition: "center",
						height: "500px",
					}}
				></div>
			</Carousel.Item>
		</Carousel>
	);
};

export default BackgroundCarousel;
