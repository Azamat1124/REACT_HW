import React from "react";
import styled from "styled-components";

export const Button = ({ variant, click, children}) => {
  return (
    <StyledButton variant={variant} onClick={click}>
      {children}
    </StyledButton>
  );
};
const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  width: 198px;
    height: 48px;
    border-radius: 10px;
  transition: all 0.3s ease;


  ${({ variant }) =>
    variant === "outlined" &&
    `
    background-color: transparent;
    color: #007bff;
    border: 3px solid #4C94F0;
  
    &:hover {
      background-color: #007bff;
      color: white;
    
    }
  `}

  ${({ variant }) =>
    variant === "contained" &&
    `
    background-color: #007bff;
    color: white;
    border: none;

    &:hover {
      background-color: #0056b3;
    }
  `}



  ${({ variant }) =>
    variant === "warning" &&
    `
    background-color: orange;
    color: white;
    border: none;

    &:hover {
      background-color: darkorange;
    }
  `}

  ${({ variant }) =>
    variant === "danger" &&
    `
    background-color: red;
    color: white;
    border: none;

    &:hover {
      background-color: darkred;
    }
  `}
`;



