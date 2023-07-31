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
		}
	}
});

// Export actions
export const { fetchScholarship } = scholarshipSlice.actions;

// Export the reducer
export default scholarshipSlice.reducer;
