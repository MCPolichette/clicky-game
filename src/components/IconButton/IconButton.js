import React from "react";

import "./IconButton.css";

const IconButton = props => (
  <button
    {...props}
    className="btn btn-xl btn-primary"
    onClick={() => props.iconChange(props.iconType)}
  >
    {props.children}
  </button>
);
export default IconButton;
