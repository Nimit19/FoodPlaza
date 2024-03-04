import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

import classes from "./OrderSummaryModal.module.css";

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

interface OrderSummaryModalProps {
  children: ReactNode;
  onCloseCart: () => void;
}
const OrderSummaryModal: React.FC<OrderSummaryModalProps> = ({
  children,
  onCloseCart,
}) => {
  return (
    <>
      {portalElement &&
        ReactDOM.createPortal(
          <Backdrop onClose={onCloseCart} />,
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

export default OrderSummaryModal;
