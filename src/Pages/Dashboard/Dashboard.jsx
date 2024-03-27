import { CiHome } from "react-icons/ci";
import {
  FaBasketShopping,
  FaBlog,
  FaHeart,
  FaJediOrder,
  FaUser,
} from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const user = (
    <>
      <li>
        <NavLink to="/myProfile">
          <FaUser></FaUser> My Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/mycart">
          <FaBasketShopping /> My Cart
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/mywishlist">
          <FaJediOrder /> My Orders
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/wishlist">
          <FaHeart /> My WishList
        </NavLink>
      </li>
    </>
  );
  const nav = (
    <>
      <li>
        {" "}
        <Link to="/">
          {" "}
          <CiHome></CiHome> Home
        </Link>
      </li>
      <li>
        {" "}
        <Link to="/shops">
          {" "}
          <FaBasketShopping /> Shop
        </Link>
      </li>
      <li>
        {" "}
        <Link to="/blogs">
          {" "}
          <FaBlog /> Blogs
        </Link>
      </li>
    </>
  );
  return (
    <div className="md:flex">
      <div>
        <div className="md:w-72 bg-yellow-500 static md:sticky top-0 md:h-screen flex flex-col justify-between md:py-10">
          <ul className="menu menu-horizontal md:text-2xl">
            <div className="border-b pb-5">{user}</div>

            <div>{nav}</div>
          </ul>

          <button className="btn btn-primary text-center w-full bottom-0">
            LogOut
          </button>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
