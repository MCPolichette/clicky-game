import React from "react";

import "./IconButton.css";

const IconButton = props => (
  <button {...props} className="btn btn-lg btn-success" id="click">
    {props.children}
  </button>
);
export default IconButton;
