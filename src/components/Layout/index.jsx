import React, { Fragment } from "react";
import NavHeader from "./NavHeader";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<Fragment>
			<header className="header-area header-three">
				<NavHeader />
			</header>
			<main >{children}</main>
			<Footer />
		</Fragment>
	);
};

export default Layout;
