import classes from "./Modal.module.css";
import { Fragment } from "react";
import { createPortal } from "react-dom";

export const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

export const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalEl = document.getElementById("overlays");
export const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<Backdrop />, portalEl)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalEl)}
    </Fragment>
  );
};

export default Modal;
