import { configureStore } from "@reduxjs/toolkit";
import promise from "redux-promise";
import { combineReducers, compose } from "redux";
import userSlice from "./reducers/user";
import teacherSlice from "./reducers/teacher";

const composeEnhancers =
	typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				trace: true,
				traceLimit: 25,
		  })
		: compose;

export const store = configureStore({
	reducer: combineReducers({
		user: userSlice,
		teacher: teacherSlice,
	}),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(promise),
	devTools: composeEnhancers,
});
