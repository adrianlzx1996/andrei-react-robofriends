import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import registerServiceWorker from "./registerServiceWorker";
import App from "./containers/App";
import { requestRobots, searchRobots } from "./reducers";
import "tachyons";
// import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

// const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
registerServiceWorker();
// reportWebVitals();
