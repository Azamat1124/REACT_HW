import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: ${({ size }) =>
    size === "large"
      ? "15px 30px"
      : size === "small"
      ? "5px 10px"
      : "10px 20px"};
  font-size: ${({ size }) =>
    size === "large" ? "18px" : size === "small" ? "12px" : "14px"};
  background-color: ${({ variant }) => {
    switch (variant) {
      case "primary":
        return "#007bff";
      case "secondary":
        return "#6c757d";
      case "success":
        return "#28a745";
      case "danger":
        return "#dc3545";
      default:
        return "#007bff";
    }
  }};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    background-color: #e0e0e0;
    color: #6c757d;
    cursor: not-allowed;
  }
`;

export function Button() {
  return (
    <div>
      <StyledButton
        variant="primary"
        size="large"
        onClick={() => alert("Primary Large StyledButton Clicked")}
      >
        Primary Large StyledButton
      </StyledButton>

      <StyledButton variant="secondary" size="small">
        Secondary Small Button
      </StyledButton>

      <StyledButton variant="success" disabled>
        Disabled Success Button
      </StyledButton>
    </div>
  );
}
