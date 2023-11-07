import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/user";

import promise from "redux-promise";
import { combineReducers, compose } from "redux";
import emailReducer from "./reducers/emails";
import channelsReducer from "./reducers/channels";
import configReducer from "./reducers/config";
import settingsReducer from "./reducers/settings";
import activeCallReducer from "./reducers/activeCalls";
import clientSlice from "./reducers/client";
import msTeamsReducer from "./reducers/msteams";
import userGroupsSlice from "./reducers/userGroup";

const composeEnhancers =
	typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				trace: true,
				traceLimit: 25,
		  })
		: compose;

export const store = configureStore({
	reducer: combineReducers({
		msTeams: msTeamsReducer,
		user: userSlice,
		client: clientSlice,
		channels: channelsReducer,
		config: configReducer,
		emails: emailReducer,
		settings: settingsReducer,
		activeCall: activeCallReducer,
		userGroups: userGroupsSlice,
	}),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(promise),
	devTools: composeEnhancers,
});
