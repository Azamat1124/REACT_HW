import React, { useState } from "react";
import { ButtonAdd } from "./UI/button/ButtonAdd";
import { Input } from "./Input";

export const ProductsMap = ({ onAddProduct }) => {

    const [amounts, setAmounts] = useState(0);
    const addProductHandler = (product) => {
        onAddProduct({...product});
        setAmounts(0);
        console.log(product);
        
      };
    
      const amountChangeHandler = (e) => {
        const value = e.target.value;
        if (value > 5) {
          setAmounts(5);
        } else {
          setAmounts(value);
        }
      };
    
  return (
    <ul>
         <li key={product.id} className="leaf-list">
          <div className="products">
            <h2>{product.title}</h2>
            <i>{product.description}</i>
            <div>{product.li}</div>
            <span>${product.prais}</span>
          </div>
          <div className="pulse-add">
            <label className="add-input">
              Amount
              <Input
                type="number"
                min={0}
                max={5}
                onChange={amountChangeHandler}
                value={amounts}
              />
            </label>
            <ButtonAdd onClick={() => addProductHandler(product)}>
              Add
            </ButtonAdd>
          </div>
        </li>
    </ul>
  )
}
