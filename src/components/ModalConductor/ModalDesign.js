import React from "react";

const ModalDesign = props => {
  const handleBackGroundClick = exit => {
    if (exit.target === exit.currentTarget) props.hideModal();
  };
  const onOk = () => {
  
  return (
      <div onClick={handleBackGroundClick}>
      <header>
          <h1>{props.title}</h1>
          <button onClick={props.hideModal}>Close</button>
      </header>
      {/* Content */}
      {props.children}
      </div>
  )
};

export default ModalDesign;
