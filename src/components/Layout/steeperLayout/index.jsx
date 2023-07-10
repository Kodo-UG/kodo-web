import React, { Fragment } from "react";

import HeaderStepper from "./HeaderStepper";
import Footer from "./Footer";

const HeaderLayout = ({ children }) => {
	return (
		<Fragment>
			<HeaderStepper />
			<main>{children}</main>
			<Footer />
		</Fragment>
	);
};

export default HeaderLayout;
