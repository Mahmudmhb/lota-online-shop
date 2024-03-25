import BestSeller from "../../Components/BestSeller/BestSeller";
import Categoris from "../../Components/Categoris/Categoris";
import LookBook from "../../Components/LookBook/LookBook";
import ProductTabs from "../../Components/Taps/Tabs";
import Shipping from "../../Sheard/Shipping/Shipping";
import Slider from "../../Sheard/Slider/Slider";
import Blogs from "../Blogs/Blogs";
import Shop from "../Shop/Shop";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Categoris></Categoris>
      <Shop></Shop>
      <LookBook></LookBook>
      <BestSeller></BestSeller>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
