import { Fragment } from "react";
import { Carousel } from "react-bootstrap";
import TestimonialComponent from "./TestimonialComponent";

const TestimonialCarousel = ({ clientData }) => {
	return (
		<Carousel
			interval={8000}
			pause={false}
			slide={true}
			indicators={false} // Remove the indicators
			controls={false} // Remove the controls
		>
			{clientData.map((data) => (
				<Carousel.Item key={data.id}>
					{" "}
					{/* Add a unique key */}
					<TestimonialComponent
						text={data.text}
						name={data.name}
						profession={data.profession}
						image={data.image}
					/>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default TestimonialCarousel;
