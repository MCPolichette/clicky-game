import React from "react";

import "./IconCard.css";

const IconCard = props => (
  <div className="card">
    <div
      className="icon-container"
      value={props.id}
      onClick={() => props.iconClick(props.id)}
    >
      <h1 className="display-1">
        <i className={props.icon} />
      </h1>
    </div>
  </div>
);
export default IconCard;
