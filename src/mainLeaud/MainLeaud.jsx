import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import Main from "../components/Main-banner/Main";
import { ProductsMain } from "../components/ProductsMain";
import { MainOrder } from "../utils/constants/MainOrder";

export const MainLeaud = () => {
  const [products, setProducts] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const handPushButton = (productItem) => {
    const findProducts = products.find((item) => item.id === productItem.id);

    if (!findProducts) {
      setProducts([...products, productItem]);
    } else {
      const res = products.map((item) => {
        if (item.id === productItem.id) {
          console.log(item.price, productItem.price);
          return {
            ...item,
            amount: +item.amount + +productItem.amount,
            price: +item.price + +productItem.price,
          };
        }
        return { ...item, ...productItem };
      });
      setProducts(res);
    }
  };

  const modalMap = (e) => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <main>
      <Header onClick={modalMap} products={products} />
      <Main />
      <ProductsMain onAddProduct={handPushButton} />
      <MainOrder
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        products={products}
      />
    </main>
  );
};
