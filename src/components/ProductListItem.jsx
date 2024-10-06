import React, { useState } from "react";
import { ButtonAdd } from "./UI/button/ButtonAdd";
import { Input } from "./Input";
export const ProductListItem = ({
  id,
  title,
  description,
  price,
  addProductHandler,
}) => {
  const [amounts, setAmounts] = useState(0);

  const amountChangeHandler = (e) => {
    const value = e.target.value;
    if (value > 5) {
      setAmounts(5);
    } else {
      setAmounts(value);
    }
  };
  return (
    <li key={id} className="leaf-list">
      <div className="products">
        <h2>{title}</h2>
        <i>{description}</i>
        <span>${price}</span>
      </div>
      <div className="pulse-add">
        <label className="add-input">
          Amount
          <Input
            type="number"
            max="5"
            onChange={amountChangeHandler}
            value={amounts}
          />
        </label>
        <ButtonAdd
          onClick={() => {
            addProductHandler({
              title,
              id,
              description,
              amount: amounts,
              price,
            });
            setAmounts(0);
          }}
        >
          Add
        </ButtonAdd>
      </div>
    </li>
    
  );
};
