import React from "react";
import "./Products.css";
import { ProductsList } from "./ProductsList";

export const ProductsMain = ({ onAddProduct }) => {
  return (
    <div className="container-main">
      <ul className="container-lest">
        <li>
          <ProductsList onAddProduct={onAddProduct} />
        </li>
      </ul>
    </div>
  );
};
