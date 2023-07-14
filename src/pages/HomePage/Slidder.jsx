

import { Fragment } from "react";
import BackgroundCarousel from "./BackgroundCarousel";
import CardSection from "./CardSection";

const Slidder = () => {
	return (
		<Fragment>
			<section id="home" className="slider-area fix p-relative">
				<BackgroundCarousel />
				<section className="content-section">
					
				</section>
				<CardSection />
			</section>
		</Fragment>
	);
};

export default Slidder;
