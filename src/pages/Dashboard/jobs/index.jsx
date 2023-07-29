import React from "react";
import MyHeader from "../Header";
import Menu from "../Menu";
import Jobs from "./Jobs";
import Footer from "../Footer";


const RootJob = () => {

	
	return (
		<div class="wrapper">
			<MyHeader />
			<Menu />
			<Jobs />

			<Footer />
		</div>
	);
};

export default RootJob;
