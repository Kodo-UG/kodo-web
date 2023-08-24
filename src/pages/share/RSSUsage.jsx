import { useMediaQuery } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { ShareSocial } from "react-share-social";

export default function RSSUsage() {
	const isSm = useMediaQuery("only screen and (max-width : 700px)");
	const isMd = useMediaQuery(
		"only screen and (min-width : 700px) and (max-width : 1250px)"
	);
	const isLg = useMediaQuery("only screen and (min-width : 1250px)");
	const style = {
		root: {
			background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
			borderRadius: 3,
			border: 0,
			boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
			color: "blue"
		},
		copyContainer: {
			border: "1px solid blue",
			background: "rgb(0,0,0,0.7)"
		},
		title: {
			color: "aquamarine",
			fontStyle: "italic"
		}
	};

	useEffect(() => {}, []);
	const userId = localStorage.getItem("userID");

	let URL = `https://kodoscholarships.com/stepper/${userId}`;
	return (
		<div
			style={{
				padding: "1rem",
				marginTop: "12rem",
				marginLeft: isLg ? "37rem" : isMd ? "18rem" : isSm ? "1rem" : "",
				justifyContent: "center",
				alignItems: "center"
			}}
		>
			<p style={{ marginLeft: "2rem", fontSize: isSm ? "1rem" : "2rem" }}>
				Invite 5 Friends and get a free subscription
			</p>
			<ShareSocial
				url={URL}
				socialTypes={[
					"whatsapp",
					"facebook",
					"twitter",
					"email",
					"linkedin",
					"telegram",
					"reddit"
				]}
				// style={style}
			/>
		</div>
	);
}
