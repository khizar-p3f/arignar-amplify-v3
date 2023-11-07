import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isInitialized: false,
	userAccessToken: null,
};

export const msTeams = createSlice({
	name: "msTeams",
	initialState,
	reducers: {
		updateUserAccessTokenReducer: (state, action) => {
			return {
				...state,
				isInitialized: true,
				userAccessToken: action.payload,
			};
		},
	},
});
// Action creators are generated for each case reducer function
export const { updateUserAccessTokenReducer } = msTeams.actions;

export default msTeams.reducer;
