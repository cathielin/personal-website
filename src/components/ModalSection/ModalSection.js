import React from "react";

import "./ModalSection.scss";

function ModalSection(props) {
  const { title } = props;

  return (
    <div className="section">
      <div className="section-header">{title}</div>
      <div className="section-text">{props.children}</div>
    </div>
  );
}

export default ModalSection;
