import React, { useState } from "react";
import Button from "../Button/Button.js";
import IconWithLabel from "../IconWithLabel/IconWithLabel.js";
import "./Modal.scss";

function Modal(props) {
  const { className, title, iconImage, iconLabel, setState } = props;

  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <React.Fragment>
      <IconWithLabel
        className={className}
        iconImage={iconImage}
        iconLabel={iconLabel}
        handlerFunction={handleOpen}
      />
      {openModal && (
        <div className="modal">
          <div className="modal-header">{title}</div>
          <div className="modal-content">
            <div className="modal-text">{props.children}</div>
            <Button handlerFunction={handleClose} buttonText="exit" />
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Modal;
