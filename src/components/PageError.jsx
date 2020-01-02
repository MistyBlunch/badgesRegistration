import React from "react";

import "./styles/PageError.css";

function PageError(props) {
  return (
    <div className="PageError">
      <span role="img" aria-label="loudly crying face">
        😭
      </span>
      {props.error.message}
    </div>
  );
}

export default PageError;
