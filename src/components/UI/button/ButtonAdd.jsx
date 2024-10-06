import "./ButtonAdd.css";
import Vector from "../../../assets/icons/plus-icon.svg";

export const ButtonAdd = ({ children, type, onClick, disabled, ...props }) => {
  return (
    <button
      className="button_add"
      type={type}
      onClick={onClick}
      {...props}
      disabled={disabled}
    >
      <img src={Vector} className="vector" />
      {children}
    </button>
  );
};

// export default ButtonAdd;
