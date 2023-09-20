import React from "react";
import Contact from "./Contact";
import ContactForm from "../../components/contactForm/ContactForm";
import { useMediaQuery } from "@uidotdev/usehooks";

function Main() {
	const isSm = useMediaQuery("only screen and (max-width : 768px)");
	const isMd = useMediaQuery(
	  "only screen and (min-width : 769px) and (max-width : 992px)"
	);
	const isLg = useMediaQuery(
	  "only screen and (min-width : 993px) and (max-width : 1200px)"
	);
	const isEl = useMediaQuery(
	  "only screen and (min-width : 1201px)"
	);
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				width: "100%"
				
			}}
		>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "1fr", // Create a single column of equal width
					gap: "2rem",
					width: isSm? "100%" : "95%",
					padding: isSm? "2rem" : "4rem",
					marginTop: isSm? "4rem": "",
					
				}}
			>
				<Contact />
				<ContactForm />
			</div>
		</div>
	);
}

export default Main;
