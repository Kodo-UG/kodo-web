import React, { Fragment, useState } from "react";
import NavHeader from "./NavHeader";
import Footer from "./Footer";

const Layout = ({ children }) => {
	const [open, setOpen] = useState(false);
	return (
		<Fragment>
			<header className="header-area header-three">
				<NavHeader open={open} setOpen={setOpen} />
			</header>

			<main style={{ height: "100%" }} onClick={() => setOpen(false)}>
				{children}
			</main>

			<Footer />
		</Fragment>
	);
};

export default Layout;
