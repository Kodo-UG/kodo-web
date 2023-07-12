import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../toolkit/formReducer";
import "./stp3.css";
import { Link } from "react-router-dom";
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

	const selectStyle = {
		border: "none", // Remove border
		boxShadow: "none", // Remove box shadow
		width: "100%"
	};
	const handleChange = (value) => {
		dispatch(updateFormData({ field: "subject", value: value }));
	};

	return (
		<div className="">
			<div className="app-wrapper">
				<div style={{ padding: "2rem" }} className="">
					<h2 style={{ fontSize: "2rem" }}>
						What subject do you want to study?
					</h2>
					<div className="dropdown-container">
						<button className="dropdown">
							<div className="dropdown-top">
								<Link to="/test">next</Link>
								<Select
									style={selectStyle}
									showSearch
									className="selectr"
									placeholder="Search to Select"
									optionFilterProp="children"
									onChange={handleChange}
								>
									{data?.map((option, index) => (
										<Option
											// onClick={() => nextStep()}
											key={index}
											value={option}
										>
											{option}
										</Option>
									))}
								</Select>
							</div>
							<div className="dropdown-break-line"></div>
						</button>
						<div
							id="dropdown-list"
							className="dropdown-list"
							style={{
								visibility: "hidden",
								transform: "translateY(915px) translateY(-10.9727px)"
							}}
						></div>
					</div>

					<div className=""></div>
				</div>
			</div>
		</div>
	);
};

export default StepThree;
