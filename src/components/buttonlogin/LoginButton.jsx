import React from "react";
import "./LoginButton.css";

const LoginButton = ({
  children,
  type,
  value,
  onClick,
  disabled,
  ...props
}) => {
  return (
    <button
      className="btnicon"
      type={type}
      value={value}
      onClick={onClick}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default LoginButton;
