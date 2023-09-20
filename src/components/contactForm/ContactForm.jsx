import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { IoIosSend } from "react-icons/io";
import { useMediaQuery } from "@uidotdev/usehooks";

const ContactForm = () => {
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
		<Box
			component="form"
			sx={{
				"& .MuiTextField-root": { m: 1, width: "25ch" }
			}}
			noValidate
			autoComplete="off"
			style={{
				// background: "red",
				width: "100%",
				// height: "100vh",
				display: isSm? "grid" : "flex",
				gridTemplateColumns: "1fr",
			}}
		>
			<div
				style={{
					display: "flex",
					
					flexDirection: "column",
					// alignItems: "center",
					// justifyContent: "center",
					width: isSm ? "100%": "50%",
					// background: "blue",
					height: "100%",
				
				}}
			>
				<h1 style={{
					fontWeight: "bold",
					fontSize: isSm? "" :"3rem"|| isMd? "" :"3rem",
					paddingTop: "4rem",
					paddingBottom: "2rem"
				}}>Contact With Us</h1>
				<TextField
					required
					id="outlined-required"
					label="Name"
					defaultValue="Enter Your Name"
					size="normal"
					style={{
						width: isSm ? "100%" : "75%",
						marginBottom: "1rem",
						
					}}
				/>
				<TextField
					required
					id="outlined-required"
					label="Email Address"
					defaultValue="Enter your email address"
					size="normal"
					style={{
						width: isSm ? "100%" : "75%",
						marginBottom: "1rem"
					}}
				/>
				<TextField
					required
					id="outlined-required"
					label="Subject"
					defaultValue="your subject"
					size="normal"
					style={{
						width: isSm ? "100%" : "75%",
						marginBottom: "1rem"
					}}
				/>

				<TextField
					required
					id="outlined-required"
					label="Your Message"
					defaultValue="Enter your message"
					size="normal"
					multiline={true}
					// maxRows={6}
					rows={6}
					style={{
						width: isSm ? "100%" : "75%",
						marginBottom: "1rem"
					}}
				/>
				<button
					style={{
						width: isSm ? "100%" : "75%",
						height: "5rem",
						background: "#1c2755",
						marginTop: "4rem",
						borderRadius: "10px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						fontSize: "1.5rem",
						fontWeight: "bold",
						color: "white"
					}}
				>
					Send Message <IoIosSend size={25} style={{color: "white",  marginLeft: "1rem"}}/>
				</button>
			</div>
			<div
				style={{
					width: isSm? "100%" : "50%",
					height: "100%",
					background: "white",
					marginTop: isSm? "2rem": "",
				}}
			>
				<img
					src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1695113522/64185bc2ea0b01679317954_t4ckbu.png"
					style={{
						width: "100%",
						height: "100%",
						objectFit: "contain"
					}}
					alt="rr"
				/>
			</div>
		</Box>
	);
};
export default ContactForm;
