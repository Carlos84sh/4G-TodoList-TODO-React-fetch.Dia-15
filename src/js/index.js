import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "../styles/index.scss";
import { Home } from "./component/home.js";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
