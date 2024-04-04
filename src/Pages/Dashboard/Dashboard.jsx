import { CiHome } from "react-icons/ci";
import { MdOutlineMenu } from "react-icons/md";

import {
  FaBasketShopping,
  FaBlog,
  FaHeart,
  FaJediOrder,
  FaUser,
} from "react-icons/fa6";

import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";

const Dashboard = () => {
  const { handleLogOut, user } = useAuth();

  const handleSignOut = () => {
    handleLogOut()
      .then(() => {})
      .catch();
  };

  const admin = "admin";
  const AdminDashboard = (
    <>
      <li>
        <NavLink to="/dashboard/myProfile">
          <FaUser></FaUser> Admin Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/allusers">
          <FaUser></FaUser> Manage Users
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/allOrders">
          <FaUser></FaUser> All Orders
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/uploadProduct">
          <FaUser></FaUser> Upload Product
        </NavLink>
      </li>
    </>
  );
  const userDashboard = (
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
      <li>
        <NavLink to="/dashboard/comments">
          <FaHeart /> My Comments
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
        <div>
          {/* check drawer  */}
          <div className="drawer z-[100]  ">
            <input id="my-drawer" type="checkbox" className="drawer-toggle " />
            <div className="drawer-content md:hidden  ">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="btn  drawer-button">
                <MdOutlineMenu></MdOutlineMenu>
              </label>
            </div>
            <div className="drawer-side ">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}

                <div className="border-b pb-5">
                  {admin === "admin" && <>{AdminDashboard}</>}
                  {userDashboard}
                </div>

                <li>
                  <a>Sidebar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:w-72 hidden bg-yellow-500 static md:sticky top-0 md:h-screen md:flex flex-col justify-between md:py-10">
          <ul className="md:menu   md:text-xl">
            <div className="border-b pb-5">
              {admin === "admin" && <>{AdminDashboard}</>}
              {userDashboard}
            </div>

            <div>{nav}</div>
          </ul>

          <button
            onClick={handleSignOut}
            className="btn btn-primary text-center w-full bottom-0"
          >
            LogOut
          </button>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
