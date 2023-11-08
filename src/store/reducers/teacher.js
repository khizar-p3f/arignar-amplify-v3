import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	subjects: {
		isLoaded: false,
		data: [],
	},
};

export const teacherSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		updateSubjectsReducer: (state, action) => {
			return {
				...state,
				subjects: {
					isLoaded: true,
					data: action.payload,
				},
			};
		},
	},
});
// Action creators are generated for each case reducer function
export const { updateSubjectsReducer } = teacherSlice.actions;

export default teacherSlice.reducer;
