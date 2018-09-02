import React from "react";

import "./IconCard.css";

const IconCard = props => (
  <div className="card">
    <div className="icon-container" onClick={props.iconClick}>
      <h1 className="display-1">
        <i class={props.icon} />
        {/* {props.id} */}
      </h1>
    </div>
  </div>
);
export default IconCard;
