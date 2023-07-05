import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";
import CardSection from "./CardSection";
import BackgroundCarousel from "./BackgroundCarousel";
import Content from "./Content";
const Slidder = () => {
	return (
		<Fragment>
			<section
				id="home"
				className="slider-area fix p-relative"
				style={{ position: "relative" }} // Set position to relative
			>
				<BackgroundCarousel />{" "}
				{/* Place BackgroundCarousel component here */}
				<section
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						height: "100vh",
						marginTop: "2rem",
					}}
				>
					<Content />
				</section>
				<CardSection />
			</section>
		</Fragment>
	);
};

export default Slidder;
