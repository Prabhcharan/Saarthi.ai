import React from "react";
import './Modal.css';
import Form from './Form';

export const Modal = ({ show, close}) => {
  return (
    <div className="modal-wrapper"
      style={{ 
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0' 
      }}
    >
      <div className="modal-header">
        <p>Please fill details</p>
        <span onClick={close} className="close-modal-btn">X</span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h4></h4>
          <Form />
        </div>
        <div className="modal-footer">
          <button onClick={close} className="btn-cancel">Close</button>
        </div>
      </div>
    </div>
  )
};