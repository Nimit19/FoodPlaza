import React, { ReactNode } from "react";

import classes from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  onClickButton?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, type, onClickButton }) => {
  return (
    <button
      onClick={onClickButton}
      type={type}
      className={classes["btn-primary"]}
    >
      {children}
    </button>
  );
};

export default Button;
