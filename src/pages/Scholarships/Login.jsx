import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateFormData } from "../../toolkit/formReducer";
import StepperCard from "../Register/StepperCard";
import "./index.css";

const Login = () => {
	const dispatch = useDispatch();

	const object = [
		{
			id: 1,
			title: "Scholarships",
			text: "We’ve helped students win more than $10 million dollars in scholarships.",
			link: "/signin",
			Button: "Log in"
		},
		{
			id: 2,
			title: "Jobs",
			text: "Are you looking for a remote Job, find Life Changing Jobs Now !.Join Kodo",
			link: "#",
			Button: "Loog in"
		}
	];

	const handleClick = (appType) => {
		dispatch(updateFormData({ field: "appType", value: appType }));
	};

	return (
	 <div
      style={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StepperCard list={object} />
    </div>
	);
};

export default Login;
