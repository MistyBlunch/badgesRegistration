import React from "react";

import "../pages/styles/Home.css";
import NotFoundGif from "../images/NotFoundGif.gif";

function NotFound() {
  return (
    <div className="Home d-flex flex-column align-items-center ">
      <img src={NotFoundGif} alt="Not Found image" />
      <br />
      <h1>404: Not Found</h1>
    </div>
  );
}

export default NotFound;
