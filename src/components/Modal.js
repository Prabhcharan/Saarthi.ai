import React from "react";
import "./Modal.css";
import Form from "./Form";
import { MdClose } from "react-icons/md";

export const Modal = ({ show, close, ...props }) => {
  return (
    <div
      className="modal-wrapper"
      style={{
        transform: show ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: show ? "1" : "0",
      }}
    >
      <div className="modal-header">
        <p>ADD EMPLOYEE</p>
        <span onClick={close} className="close-modal-btn">
          <MdClose />
        </span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h4></h4>
          <Form close={close} {...props} />
        </div>
      </div>
    </div>
  );
};
