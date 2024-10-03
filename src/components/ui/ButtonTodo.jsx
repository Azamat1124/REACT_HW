import React from 'react';
import styled from 'styled-components';

export const ButtonTodo = ({ onClick, type = 'button' }) => {
  return (
    <styledButton type={type} onClick={onClick}>
      Add
    </styledButton>
  );
};
const styledButton = styled.button`
    width: 120px;
    height: 40px;
    border: none;
    background-color: green;
    cursor: pointer;

`