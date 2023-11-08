import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoggedin: false,
	role: "student",
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		logoutUserReducer: () => {
			return {
				isLoggedin: false,
			};
		},
		updateUserReducer: (state, action) => {
			return {
				isLoggedin: true,
				...action.payload,
			};
		},
	},
});
// Action creators are generated for each case reducer function
export const { updateUserReducer, logoutUserReducer } = userSlice.actions;

export default userSlice.reducer;
