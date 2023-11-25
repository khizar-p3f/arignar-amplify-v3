import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import ArignarMainPage from "./app";
import AwsConfig from "./aws-exports";
import { Amplify } from "aws-amplify";
import "antd/dist/reset.css";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
Amplify.configure(AwsConfig);
root.render(
	<Provider store={store}>
		<ArignarMainPage />
	</Provider>
);
