import React, { useState } from "react";
import { products } from "../utils/constants/products";
import { ProductListItem } from "./ProductListItem";

export const ProductsList = ({ onAddProduct }) => {
  const addProductHandler = (product) => {
    onAddProduct(product);
  };

  return (
    <ul className="container-map">
      {products.map((product) => (
        <ProductListItem
          key={product.id}
          {...product}
          addProductHandler={addProductHandler}
        />
      ))}
    </ul>
  );
};
