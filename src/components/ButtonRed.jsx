import React, { useState } from "react";
import { Modal } from "./modal/Modal";
import "./ButtonRed.css";
export const ButtonRed = ({ onClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
    if (onClick) {
      onClick();
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className="button-cl" onClick={handleButtonClick}>a</button>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <img className="srccard" src="https://fsd.multiurok.ru/html/2020/04/12/s_5e93435e968ce/img21.jpg" />
        </Modal>
      )}
    </>
  );
};
