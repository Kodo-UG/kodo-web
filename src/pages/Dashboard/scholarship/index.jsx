import React from "react";
import MyHeader from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";
import Scholarship from "./Scholarship";
import Paid from "./Paid";

const RootScholarship = () => {
	const status = localStorage.getItem("status");
	return (
		<div class="wrapper">
			<MyHeader />
			<Menu />
			{status === "unpaid" ? <Scholarship /> : <Paid />}

			<Footer />
		</div>
	);
};

export default RootScholarship;
