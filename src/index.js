import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

import "./global.css";
import App from "./components/App";

const container = document.getElementById("app");

ReactDOM.render(<App />, container);
