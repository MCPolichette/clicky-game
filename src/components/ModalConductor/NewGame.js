import React from "react";
import ModalDesign from "./ModalDesign.js";

const NewGame = props => {
  props.hideModal;
  props.NewGame;
  return (
    <ModalDesign {...props} title="New Game">
      {/* Content goes here */}
      <h1>NewGame Links?</h1>
    </ModalDesign>
  );
};

export default NewGame;
