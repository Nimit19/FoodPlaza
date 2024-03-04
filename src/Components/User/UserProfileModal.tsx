import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

import classes from "./UserProfileModal.module.css";

type UserProfileModalProps = {
  children: ReactNode;
  onCloseUserProfile: () => void;
};

type ModalOverlayProps = {
  children: ReactNode;
};
interface BackdropProps {
  onClose: () => void;
}

const Backdrop = ({ onClose }: BackdropProps) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay = ({ children }: ModalOverlayProps) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}> {children}</div>
    </div>
  );
};
const portalElement: HTMLElement | null = document.getElementById("overlays");

const UserProfileModal: React.FC<UserProfileModalProps> = ({
  children,
  onCloseUserProfile,
}) => {
  return (
    <>
      {" "}
      {portalElement &&
        ReactDOM.createPortal(
          <Backdrop onClose={onCloseUserProfile} />,
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

export default UserProfileModal;
