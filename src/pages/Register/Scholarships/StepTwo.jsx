import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../toolkit/formReducer";
import "../../../components/Button.css";
import "../../../components/Layout/steeperLayout/footer.css";

import { useQuery } from "react-query";
import { useCallback } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

const StepTwo = ({ nextStep }) => {
	const dispatch = useDispatch();
	const isSm = useMediaQuery("only screen and (max-width : 800px)");
	const [loading, setLoading] = useState(false);

	async function fetchCategories() {
		setLoading(true);
		try {
			const response = await fetch(
				"https://demo.kodoscholarships.com/api/v1/scholarship/categories"
			);
			const data = await response.json();
			return data;
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchCategories();
	}, []);

	const { data } = useQuery("categories", fetchCategories);
	const newData = data?.data;

	const [selectedButtonId, setSelectedButtonId] = useState(null);
	const handleClick = useCallback(
		(id) => {
			setSelectedButtonId(id);
			dispatch(updateFormData({ field: "scholarshipcategory", value: id }));
			nextStep();
		},
		[dispatch, nextStep]
	);

	if (loading) {
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					marginTop: "13rem"
				}}
			>
				<img
					style={{
						width: "7rem ",
						height: "7rem",
						justifyContent: "center",
						alignItems: "center"
					}}
					src="https://res.cloudinary.com/itgenius/image/upload/v1690434896/Kodo_Scholarship_Loader_rgev72.gif"
					alt="middle"
				/>{" "}
			</div>
		);
	}

	return (
		<div
			className="selections-container"
			style={{
				transform: "none",
				transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms"
			}}
		>
			<h2
				style={{
					fontFamily: "Lexend Deca, Helvetica, Arial, sans-serif",
					fontWeight: "700",
					color: "#00234a"
				}}
			>
				What school category interests you?
			</h2>
			<div>
				<div
					className="option-list"
					style={{
						height: isSm ? "28rem" : "auto", // Apply overflow: scroll when isSm is true
						overflow: isSm ? "scroll" : "visible" // Apply overflow: scroll when isSm is true
					}}
				>
					{newData?.map((dta) => (
						<button
							key={dta._id}
							type="button"
							className="select-option sonic-btn"
							onClick={() => handleClick(dta._id)}
						>
							{dta.name}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default StepTwo;
