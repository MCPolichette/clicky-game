import React from "react";

import "./IconCard.css";

const IconCard = props => (
  <div className="card">
    <div
      className="icon-container"
      value={props.id}
      onClick={() => props.iconClick(props.id)}
    >
      {props.id}>
      <h1 className="display-1">
        <i className={props.icon} />
      </h1>
      {/* <button onClick={() => props.iconClick(props.id)}>{props.id}</button> */}
    </div>
  </div>
);
export default IconCard;
