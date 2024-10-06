import Banner from "../../assets/image/banner.png";
import { Delicious } from "../../components/Main-banner/Delicious";
import "./Main.css";

export const Main = () => {
  return (
    <div className="">
      <img src={Banner} alt="banner" className="banner" />
      <div className="wrapper-delicious">
        <Delicious />
      </div>
    </div>
  );
};
export default Main;
