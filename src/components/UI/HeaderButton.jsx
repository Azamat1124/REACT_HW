import Bascet from "../../assets/icon/bascet.svg";
import "./HeaderButton.css";

export const HeaderButton = ({ children, onClick, ...props }) => {
  return (
    <button className="btn-form" onClick={onClick} {...props}>
      <img src={Bascet} alt="" />
      {children}
    </button>
  );
};
