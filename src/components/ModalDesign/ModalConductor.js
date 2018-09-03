import React from "react";

import NewGame from "./NewGame";
import WinGame from "./WinGame";
import LoseGame from "./LoseGame";

import "./Modal.css";

const ModalConductor = props => {
  switch (props.currentModal) {
    case "NEW":
      return <NewGame {...props} />;

    case "WIN":
      return <WinGame {...props} />;

    case "LOSE":
      return <LoseGame {...props} />;

    default:
      return null;
  }
};

export default ModalConductor;
