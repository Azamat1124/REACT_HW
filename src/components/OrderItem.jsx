import React, { useState } from "react";
import LoginButton from "./buttonlogin/LoginButton";

export const OrderItem = ({ amount, title, id, price }) => {
  const [count, setCount] = useState(+amount);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <li key={id} className="div-key">
      <div className="wrapper">
        <p className="Order_h1">{title}</p>

        <div className="wrapper_price_amount">
          <p className="Price-Order">${price}</p>
          <div>x{count}</div>
        </div>
      </div>

      <div className="general">
        <LoginButton onClick={increment}>+</LoginButton>
        <LoginButton onClick={decrement} disabled={count === 0}>-</LoginButton>
      </div>
    </li>
  );
};
