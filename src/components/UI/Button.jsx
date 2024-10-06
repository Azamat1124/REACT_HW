import React from "react";
import styled from "styled-components";

const getStyles = (variant) => {
  switch (variant) {
    case "contained":
      {
        return {
          height: "53px",
          backgroundColor: "#1f6ed4",
          fontSize: "18px",
          fontWeight: "500",
          "&:hover": {
            backgroundColor: "#4c94f0",
          },
          "&:active": {
            backgroundColor: "#0052bc",
          },
          "&:disabled": {
            backgroundColor: "#c9c9c9",
          },
        };
      }

      break;
    case "outlined":
      {
        return {
          border: "1px solid #1f6ed4",
          height: "48px",
          fontSize: "14px",
          fontWeight: "500",
          backgroundColor: "transparent",
          "&:hover": {
            border: "3px solid #4c94f0",
          },
          "&:active": {
            backgroundColor: "#0052bc",
          },
          "&:disabled": {
            border: "1px solid #c9c9c9",
            color: "#c9c9c9",
          },
        };
      }
      break;
    case "warning":
      {
        return {
          width: "186px",
          height: "42px",
          backgroundColor: "#f37705",
          fontSize: "12px",
          fontWeight: "800",
          "&:hover": {
            backgroundColor: "#ff912b",
          },
          "&:active": {
            backgroundColor: "#cf6300",
          },
          "&:disabled": {
            backgroundColor: "#c9c9c9",
          },
        };
      }

      break;
    case "danger":
      {
        return {
          width: "186px",
          height: "47px",
          backgroundColor: "#df2d2d",
          fontSize: "16px",
          fontWeight: "600",
          "&:hover": {
            backgroundColor: "#e54343",
          },
          "&:active": {
            backgroundColor: "#c20b0b",
          },
          "&:disabled": {
            backgroundColor: "#c9c9c9",
          },
        };
      }

      break;

    default:
      break;
  }
};

export const Button = ({
  onClick,
  type,
  children,
  variant = "contained",
  disabled,
  ...props
}) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
const StyledButton = styled("button")(({ variant }) => ({
  borderRadius: "10px",
  width: "198px",
  padding: "16px 64px",
  border: "none",
  cursor: "pointer",
  color: "#fff",

  ...getStyles(variant),
}));
