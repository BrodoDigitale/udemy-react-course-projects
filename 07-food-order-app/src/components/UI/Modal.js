import classes from "./Modal.module.css";
import { Fragment } from "react";
import { createPortal } from "react-dom";

export const Backdrop = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose}></div>;
};

export const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalEl = document.getElementById("overlays");
export const Modal = ({ onClose, children }) => {
  return (
    <Fragment>
      {createPortal(<Backdrop onClose={onClose} />, portalEl)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalEl)}
    </Fragment>
  );
};

export default Modal;
