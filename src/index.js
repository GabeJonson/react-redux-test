import React from "react";
import { render } from "react-dom";
import App from "./App";
import store from "./store";
import "./index.css";

render(<App store={store} />, document.getElementById("root"));
