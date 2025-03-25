import React, { Fragment, useState } from "react";
import NavHeader from "./NavHeader";
import Footer from "./Footer";


const Layout = ({ children }) => {
	const [open, setOpen] = useState(false);
	return (
		<>
		<div
			style={{
				width: '90%',
				margin: 'auto',
				backgroundColor: 'white'
			}}
		>
			<NavHeader />
			<main
				style={{
					flex: 1,
  					minHeight: '100vh'
				}}
			>{children}</main>
			<Footer />
		</div>
		</>
	);
};

export default Layout;
