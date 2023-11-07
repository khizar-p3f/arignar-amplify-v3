import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";

import "antd/dist/reset.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
	<Provider store={store}>
		<StrictMode>
			<div>hello world</div>
		</StrictMode>
	</Provider>
);
