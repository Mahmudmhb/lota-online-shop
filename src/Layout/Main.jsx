import { Outlet } from "react-router-dom";
import Navber from "../Sheard/Navber/Navber";
import Footer from "../Sheard/Footer/Footer";
import Shipping from "../Sheard/Shipping/Shipping";

const Main = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Shipping></Shipping>
      <Footer></Footer>
    </div>
  );
};

export default Main;
