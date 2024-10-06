import React from "react";
import "./Header.css";
import { HeaderButton } from "./UI/HeaderButton";
import { ButtonRed } from "./ButtonRed";

export const Header = ({ onClick, products }) => {
  return (
    <header className="header-two">
      <h1>ReactMeals</h1>
      <ButtonRed />
      <HeaderButton onClick={onClick}>
        Your Cart <b className="b-title">{products.length}</b>
      </HeaderButton>
    </header>
  );
};
