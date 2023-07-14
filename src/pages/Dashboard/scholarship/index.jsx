import React from "react";
import MyHeader from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";
import Scholarship from "./Scholarship";

const RootScholarship = () => {
	return (
		<div class="wrapper">
			<MyHeader />
			<Menu />
			<Scholarship />

			<Footer />
		</div>
	);
};

export default RootScholarship;
