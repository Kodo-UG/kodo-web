import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: []
};

const scholarshipSlice = createSlice({
	name: "scholarship",
	initialState,
	reducers: {
		fetchScholarship: (state, action) => {
			state.data = action.payload;
		},
		clearScholarships:(state,action)=>{
			state.data = []
		}
	}
});

// Export actions
export const { fetchScholarship,clearScholarships} = scholarshipSlice.actions;

// Export the reducer
export default scholarshipSlice.reducer;
