import React, { useState, useEffect } from "react";
import api from "../../../api/apiClient";
const StepTwo = ({ nextStep, prevStep, formData, setFormData }) => {
	const [categories, setCategories] = useState([]);
  const [id, setId] = useState();

	useEffect(() => {
		getCategories();
	}, []);

	const getCategories = async () => {
		const data = await api.get("/api/v1/scholarship/categories");
		console.log(data.data.data, "=============");
		setCategories(data.data.data);
	};
const  handleClick = (id)=>{
  setId(id)
}
	 console.log(id);
	return (
		//     <div>
		//     <label>LastName
		//         <input
		//             type="text"
		//             name='lastName'
		//             value={formData.lastName}
		//             onChange={(e) => setFormData({...formData, firstName: e.target.value})}
		//         />
		//     </label>
		//     <button onClick={nextStep}>Next</button>
		//     <button onClick={ prevStep }>Previous</button>
		// </div>

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
					<div class="option-list">
						{categories?.map((info) => (
							<button onClick={()=>handleClick(info._id)} type="button" class="select-option sonic-btn">
								{info.name}
							</button>
						))}

					</div>
				</div>
			</div>
			<div className="d-felx">
				<button class="select-option sonic-btn" onClick={prevStep}>
					Previous
				</button>
				<button class="select-option sonic-btn" onClick={nextStep}>
					Next
				</button>
			</div>
		</div>
	);
};

export default StepTwo;
