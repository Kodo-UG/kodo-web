import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../toolkit/formReducer";
import "./index.css";
import { Select } from "antd";
const { Option } = Select;

const StepThree = ({ nextStep, prevStep, formData, setFormData }) => {
	const { scholarshipcategory } = useSelector((state) => state.formData);
	const [data, setData] = useState();
	const [selectedOption, setSelectedOption] = useState("");
	const [dropdownOpen, setDropdownOpen] = useState(false); // State to track the dropdown open/close state

	const dispatch = useDispatch();

	useEffect(() => {
		fetchData();
	}, [scholarshipcategory]);

	const fetchData = async () => {
		try {
			const { data } = await axios.get(
				`https://demo.kodoscholarships.com/api/v1/scholarship/categories/${scholarshipcategory}`
			);
			setData(data.data.categories);
		} catch (error) {
			console.log(error);
		}
	};

	console.log(selectedOption);

	const handleChange = (value) => {
		dispatch(updateFormData({ field: "subject", value: value }));
	};

	return (
		<div className="app-container">
			<div className="app-wrapper">
				<div style={{ padding: "2rem" }} className="">
					<h2 style={{ fontSize: "2rem" }}>
						What subject do you want to study?
					</h2>
					<div className="">
						<Select
							showSearch
							className="selectr"
							placeholder="Search to Select"
							optionFilterProp="children"
							onChange={handleChange}
						>
							{data?.map((option, index) => (
								<Option key={index} value={option}>
									{option}
								</Option>
							))}
						</Select>
					</div>
				</div>
			</div>
			<div
				className="container"
				style={{
					display: "flex",
					justifyContent: "space-between",
					width: "50%"
				}}
			>
				<button
					className="select-option sonic-btn"
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
						marginBottom: "4px"
					}}
					onClick={prevStep}
				>
					Previous
				</button>
				<button
					className="select-option sonic-btn"
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
						marginBottom: "4px"
					}}
					onClick={nextStep}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default StepThree;
