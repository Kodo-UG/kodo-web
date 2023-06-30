import React from "react";
import MyHeader from "./Header";
import Menu from "./Menu";
import Dashboard from "./dashboard";
import Footer from "./Footer";

const Root = () => {
	return (
		<div class="wrapper">
			<MyHeader />
			<Menu />
			<Dashboard />
			<Footer />
		</div>
	);
};

export default Root;
