import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userGroups: [],
	userWhiteList: [],
	userCount: {},
};

export const userGroupsSlice = createSlice({
	name: "userGroups",
	initialState,
	reducers: {
		addUserGroups: (state, action) => {
			const newGroups = action.payload.filter((newGroup) => {
				const exists = state.userGroups.some(
					(existingGroup) => existingGroup.id === newGroup.id
				);
				return !exists;
			});

			return {
				...state,
				userGroups: [...state.userGroups, ...newGroups],
			};
		},
		removeSelectedGroup: (state, action) => {
			return {
				...state,
				userGroups: state.userGroups.filter(
					(item) => item.id !== action.payload
				),
			};
		},
		updatedUserGroups: (state, action) => {
			return {
				...state,
				userGroups: action.payload,
			};
		},

		addUserToSpecificGroup: (state, action) => {
			const newUserWhiteList = action.payload.filter((newUser) => {
				const exists = state.userWhiteList.some(
					(existingUser) => existingUser.id === newUser.id
				);
				return !exists;
			});
			return {
				...state,
				userWhiteList: [...state.userWhiteList, ...newUserWhiteList],
			};
		},

		removeSpecificUserFromSpecificGroup: (state, action) => {
			return {
				...state,
				userWhiteList: state.userWhiteList.filter(
					(item) => item.id !== action.payload
				),
			};
		},
		removeGroupFromUserWhitelist: (state, action) => {
			return {
				...state,
				userWhiteList: state.userWhiteList.filter(
					(item) => item.groupId !== action.payload
				),
			};
		},

		updateSelecteduserCount: (state, action) => {
			return {
				...state,
				userCount: action.payload,
			};
		},
	},
});

export const {
	addUserGroups,
	removeSelectedGroup,
	updatedUserGroups,
	addUserToSpecificGroup,
	removeSpecificUserFromSpecificGroup,
	removeGroupFromUserWhitelist,
	updateSelecteduserCount,
} = userGroupsSlice.actions;

export default userGroupsSlice.reducer;
