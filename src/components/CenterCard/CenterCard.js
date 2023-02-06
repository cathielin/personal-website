import React from "react";
import "./CenterCard.scss";

function CenterCard(props) {
  const { title } = props;

  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="modal-content">
        <div className="modal-text">{props.children}</div>
      </div>
    </div>
  );
}

export default CenterCard;
