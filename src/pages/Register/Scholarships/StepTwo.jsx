import React, { useState, useEffect } from "react";
import api from "../../../api/apiClient";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../toolkit/formReducer";
import axios from "axios";

import { useQuery, useMutation } from "react-query";

const StepTwo = ({ nextStep, prevStep, setFormData }) => {
	const formData = useSelector((state) => state.formData);
	// const [categories, setCategories] = useState([]);
	const dispatch = useDispatch();

	// const [id, setId] = useState();

	async function fetchCategories() {
		const response = await fetch(
			"http://165.227.139.53/api/v1/scholarship/categories"
		);
		const data = await response.json();

		return data;
	}

	useEffect(() => {
		fetchCategories();
	}, []);

	const { isLoading, isError, data, error } = useQuery(
		"categories",
		fetchCategories
	);

	const newData = data?.data;
    console.log("=============")
	console.log( data )
	console.log("==============")

	const handleClick = (id) => {
		// setId(id);
		dispatch(updateFormData({ field: "scholarshipcategory", value: id }));
	};
	return (
		<div class="app-container">
			<div class="app-wrapper">
				<div
					class="selections-container"
					style={{
						transform: "none",
						transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
					}}
				>
					<h2>What school category interests you?</h2>
					{isLoading ? (
						"Please wait as we load the categories"
					) : (
						<div class="option-list">
							{newData?.map((info) => (
								<button
									key={info._id}
									onClick={() => handleClick(info._id)}
									type="button"
									class="select-option sonic-btn"
									style={{
										padding: "15px",
										border: "1px solid #ccc",
										outline: "none",
										transition: "box-shadow 0.3s ease-in-out",
										boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
										fontFamily: "Arial, sans-serif",
										fontSize: "16px",
										lineHeight: "1.5",
										color: "white",
										cursor: "pointer",
									}}
								>
									{info.name}
								</button>
							))}
						</div>
					)}
				</div>
			</div>
			<div
				className="d-flex"
				style={{ display: "flex", justifyContent: "space-evenly" }}
			>			
			<button
					class="select-option sonic-btn"
					onClick={prevStep}
					style={{
						padding: "10px 20px",
						border: "none",
						outline: "none",
						transition:
							"background-color 0.3s ease-in-out, color 0.3s ease-in-out",
						fontFamily: "Arial, sans-serif",
						fontSize: "16px",
						lineHeight: "1.5",
						color: "#fff",
						cursor: "pointer",
						marginBottom: "4px",
					}}
				>
					Previous
				</button>
				<button
					class="select-option sonic-btn"
					onClick={nextStep}
					style={{
						padding: "10px 20px",
						border: "none",
						outline: "none",
						transition:
							"background-color 0.3s ease-in-out, color 0.3s ease-in-out",
						fontFamily: "Arial, sans-serif",
						fontSize: "16px",
						lineHeight: "1.5",
						color: "#fff",
						cursor: "pointer",
					}}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default StepTwo;
