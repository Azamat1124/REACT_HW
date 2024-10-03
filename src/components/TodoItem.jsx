import React from "react";
import styled from "styled-components";

export default function Button({ children, variant, disabled }) {
  return (
    <StyledButton variant={variant} disabled={disabled}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  cursor: pointer;
  width: 198px;
  color: ${(props) =>
    props.variant === "outlined" ? "rgba(31, 110, 212, 1)" : "white"};
  height: 48px;
  border-radius: 10px;
  border: none;
  border: ${(props) =>
    props.variant === "outlined" ? "1px solid rgba(31, 110, 212, 1)" : ""};

  background-color: ${(props) =>
    props.variant === "outlined"
      ? "white"
      : props.variant === "contained"
      ? "rgba(31, 110, 212, 1)"
      : props.variant === "Warning"
      ? "rgba(243, 119, 5, 1)"
      : props.variant === "Danger"
      ? "rgba(223, 45, 45, 1)"
      : ""};
  font-size: ${(props) =>
    props.variant === "outlined"
      ? "15px"
      : props.variant === "contained"
      ? "20px"
      : ""};
  font-weight: ${(props) =>
    props.variant === "Warning"
      ? "800"
      : props.variant === "Danger"
      ? "100"
      : ""};

  &:hover {
    border: ${(props) =>
      props.variant === "outlined" ? "3px solid rgba(31, 110, 212, 1)" : ""};
    height: ${(props) =>
      props.variant === "contained"
        ? "53px"
        : props.variant === "Warning"
        ? "42px"
        : ""};
    width: ${(props) => (props.variant === "Warning" ? "186px" : "")};
    background-color: ${(props) =>
      props.variant === "contained"
        ? "rgba(76, 148, 240, 1)"
        : props.variant === "Warning"
        ? "rgba(255, 145, 43, 1)"
        : props.variant === "Danger"
        ? "rgba(229, 67, 67, 1)"
        : ""};
  }
  &:active {
    background-color: ${(props) =>
      props.variant === "outlined"
        ? "rgba(0, 82, 188, 1)"
        : props.variant === "contained"
        ? "rgba(0, 82, 188, 1)"
        : props.variant === "Warning"
        ? "rgba(207, 99, 0, 1)"
        : props.variant === "Danger"
        ? "rgba(194, 11, 11, 1)"
        : ""};
  }
`;
