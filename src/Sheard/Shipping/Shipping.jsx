import { FaCar, FaDoorClosed } from "react-icons/fa6";
import { IoIosHelpBuoy, IoIosRefresh } from "react-icons/io";

const Shipping = () => {
  return (
    <div className=" p-6 md:flex gap-4 border-t-2 mt-10">
      <div className="flex  h-32  gap-5">
        <FaCar className="text-3xl text-[#9e9e9e]"></FaCar>
        <div>
          <h1 className="text-xl">FREE SHIPPING</h1>
          <p>Free shipping on all US order or order above $200</p>
        </div>
      </div>
      <div className="flex h-32  gap-5">
        <IoIosHelpBuoy className="text-3xl text-[#9e9e9e]" />

        <div>
          <h1 className="text-xl">SUPPORT 24/7</h1>
          <p>Contact us 24 hours a day, 7 days a week</p>
        </div>
      </div>
      <div className="flex  h-32  gap-5">
        <IoIosRefresh className="text-3xl text-[#9e9e9e]" />

        <div>
          <h1 className="text-xl">30 DAYS RETURN</h1>
          <p>Simply return it within 30 days for an exchange.</p>
        </div>
      </div>
      <div className="flex  h-32  gap-5">
        <FaDoorClosed className="text-3xl text-[#9e9e9e]" />

        <div>
          <h1 className="text-xl">100% PAYMENT SECURE</h1>
          <p>We ensure secure payment with PEV</p>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
