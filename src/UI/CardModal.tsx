import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

import classes from "./CardModal.module.css";

interface BackdropProps {
  onClose: () => void;
}

const Backdrop = ({ onClose }: BackdropProps) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

interface ModalOverlayProps {
  children: ReactNode;
}

const ModalOverlay = ({ children }: ModalOverlayProps) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}> {children}</div>
    </div>
  );
};

const portalElement: HTMLElement | null = document.getElementById("overlays");

interface CardModalProps {
  children: ReactNode;
  onCloseCard: () => void;
}
const CardModal: React.FC<CardModalProps> = ({ children, onCloseCard }) => {
  return (
    <>
      {portalElement &&
        ReactDOM.createPortal(
          <Backdrop onClose={onCloseCard} />,
          portalElement
        )}
      {portalElement &&
        ReactDOM.createPortal(
          <ModalOverlay>{children}</ModalOverlay>,
          portalElement
        )}
    </>
  );
};

export default CardModal;
