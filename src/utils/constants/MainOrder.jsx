import { Children } from "react";
import { Modal } from "../../components/modal/Modal";
import { Button } from "../../components/UI/Button";
import "./MainOrder.css";
import { OrderItem } from "../../components/OrderItem";

export const MainOrder = ({ isOpen, onClose, products }) => {
  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen}>
      <ul className="ul">
        {products.map((item) => (
          <OrderItem key={item.id} {...item} />
        ))}

        <div className="total">
          <h1>Total Amount</h1>
          <b className="Price-Order">$200.99</b>
        </div>
        <div className="close">
          <button onClick={onClose}>Close</button>
          <Button>Order</Button>
        </div>
      </ul>
    </Modal>
  );
};
