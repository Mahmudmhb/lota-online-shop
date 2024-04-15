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
import usePublicAxios from "../../Layout/usePublicAxios/usePublicAxios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const { handleLogOut, user } = useAuth();
  const [loginUser, setLoginUser] = useState([]);
  console.log(loginUser);
  const axiosPublic = usePublicAxios();
  useEffect(() => {
    const res = axiosPublic.get(`/users/${user?.email}`).then((res) => {
      setLoginUser(res.data);
    });
  }, [axiosPublic, user]);
  const handleSignOut = () => {
    handleLogOut()
      .then(() => {})
      .catch();
  };

  // const admin = "admin";
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
              <div className="flex justify-between items-center">
                <label htmlFor="my-drawer" className="btn  drawer-button">
                  <MdOutlineMenu></MdOutlineMenu>
                </label>

                {loginUser.map((role) => (
                  <div key={role._id}>
                    <img src={role.image} className="w-24 rounded-full" />
                    <h1>{role.name}</h1>
                  </div>
                ))}
              </div>
            </div>
            <div className="drawer-side ">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4  min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}

                <div className="border-b pb-5">
                  {loginUser.map((role) => (
                    <>
                      {role?.status === "Admin" ? (
                        <>{AdminDashboard}</>
                      ) : (
                        <>{userDashboard}</>
                      )}
                    </>
                  ))}
                </div>

                <li>
                  <div>{nav}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:w-72 hidden bg-[#01bad4] static md:sticky top-0 md:h-screen md:flex flex-col justify-between md:py-10">
          <ul className="md:menu   md:text-xl">
            <div className="border-b pb-5">
              {loginUser.map((role) => (
                <>
                  {role?.status === "Admin" ? (
                    <>
                      <div>
                        <div className="avatar">
                          <div className="w-24 rounded-full">
                            <img src={role.image} />
                          </div>
                        </div>
                        <h1>{role.name}</h1>
                      </div>

                      {AdminDashboard}
                    </>
                  ) : (
                    <>
                      <div className="text-center">
                        <div className="avatar">
                          <div className="w-24 rounded-full">
                            <img src={role.image} />
                          </div>
                        </div>
                        <h1 className="text-center">{role.name}</h1>
                      </div>

                      {userDashboard}
                    </>
                  )}
                </>
              ))}
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
