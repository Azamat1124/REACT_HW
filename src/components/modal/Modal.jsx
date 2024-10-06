import ReactDOM from "react-dom";
import "./Modal.css";
export const Modal = ({ children, isOpen, onClose }) => {
  return ReactDOM.createPortal(
    <div onClick={onClose} className="container-modal">
      <div className="modals">{children}</div>
    </div>,
  
    document.getElementById("modal-root")
  );
};
