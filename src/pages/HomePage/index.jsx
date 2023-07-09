import React, { Fragment } from "react";
import Slidder from "./Slidder";
import About from "./About";
import Features from "./Features";
import Events from "./Events";
import VideoSection from "./VideoSection";

const HomePage = () => {
	return (
		<Fragment>
			<Slidder />
			<About />
			<Features />
			<VideoSection />
			<Events />
		</Fragment>
	);
};

export default HomePage;
