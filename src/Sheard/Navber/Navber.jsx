import { Link, NavLink } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import useAuth from "../../Hooks/useAuth/useAuth";
import useCart from "../../Hooks/useCart/useCart";
import logo from "../../assets/Lota Online Shop.png";
const Navber = () => {
  const { handleLogOut, user } = useAuth();
  const [cart, refetch] = useCart();

  const handleSignOut = () => {
    handleLogOut()
      .then(() => {})
      .catch();
    refetch();
  };

  const nav = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        {" "}
        <NavLink to="/shop">Shop</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/allblogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/about-us">About Us</NavLink>
      </li>
      {user && (
        <li>
          {" "}
          <NavLink to="/dashboard">Deshboard</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="bg-[#ffffff]">
      <div className="bg-[#f6f6f8] ">
        <div className="hidden md:flex justify-between  w-11/12 mx-auto   items-center">
          <div className="flex gap-4 h-12">
            <p className="flex gap-2 items-center ">
              <MdOutlinePhone />
              +880 1782-553556
            </p>
            <h1 className="flex gap-2 items-center ">
              <TfiEmail />
              lotaonlineshop@gamil.com
            </h1>
          </div>
          <p>
            Summer sale discount off <span className="text-[#ec0101]">50%</span>
            ! <Link>Shop Now</Link>
          </p>

          <option value="usd"></option>
        </div>
      </div>
      <div className="navbar bg-[#ffffff]  w-11/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 uppercase z-[10] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {nav}
            </ul>
          </div>
          <Link to="/" className=" text-xl hidden md:flex gap-3">
            {/* Lota Online Shop */}
            <img src={logo} alt="" width={"60px"} className="rounded-full" />
          </Link>
          <p className="ml-3"> Lota Online Shop</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 uppercase border-red-500 ">
            {nav}
          </ul>
        </div>
        <div className="navbar-end md:hidden lg:hidden ">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="">
              <FaRegCircleUser className="hover:text-[#01bad4] " />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[50]  menu  shadow bg-base-100 rounded-box w-40"
            >
              {user ? (
                <>
                  <li>
                    <Link to="/dashboard">Deshboard</Link>
                  </li>
                  <li>
                    <Link to="/myorder">My Orders</Link>
                  </li>
                  <li>
                    <button onClick={handleSignOut}>LogOut</button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div className="navbar-end items-center hidden md:flex gap-3 text-2xl">
          {/* <button>
            <CiSearch className="hover:text-[#01bad4] duration-200" />
          </button> */}

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="">
              <FaRegCircleUser className="hover:text-[#01bad4] " />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[50]  menu  shadow bg-base-100 rounded-box w-40"
            >
              {user ? (
                <>
                  <li>
                    <Link to="/dashboard">Deshboard</Link>
                  </li>
                  <li>
                    <Link to="/myorder">My Orders</Link>
                  </li>
                  <li>
                    <button onClick={handleSignOut}>LogOut</button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {user && (
            <>
              <Link to="/wishlist">
                <button>
                  <CiHeart className="hover:text-[#01bad4] duration-200" />
                </button>
              </Link>
              <div>
                <Link to="/mycart">
                  <div tabIndex={0} role="button" className=" ">
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 hover:text-[#01bad4] duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="badge bg-black text-xl text-white badge-lg indicator-item">
                        {cart.length}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
