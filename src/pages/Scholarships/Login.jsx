/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import { updateFormData } from "../../toolkit/formReducer";
import StepperCard from "../Register/StepperCard";
import { useMediaQuery } from "@uidotdev/usehooks";

const Login = () => {
	const dispatch = useDispatch();
	const isSm = useMediaQuery("only screen and (max-width : 1000px)");

	const object = [
		{
			id: 1,
			title: "Scholarships",
			text: "We’ve helped students win more than $10 million dollars in scholarships.",
			link: "/signin",
			Button: "log in"
		},
		{
			id: 2,
			title: "Jobs",
			text: "Are you looking for a remote Job, find Life Changing Jobs Now !.Join Kodo",
			link: "#",
			Button: "log in"
		}
	];

	const handleClick = (appType) => {
		dispatch(updateFormData({ field: "appType", value: appType }));
	};

	return (
		<div
			style={{
				height: "40rem",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				// background: "orange",
				width: "100%",
				marginTop: isSm ? "9rem" : "3rem"
				// margin: "auto"
			}}
		>
			<StepperCard list={object} />
		</div>
	);
};

export default Login;
