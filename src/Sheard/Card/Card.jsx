/* eslint-disable react/prop-types */
// import { useQuery } from "@tanstack/react-query";
import { CiHeart } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import usePublicAxios from "../../Layout/usePublicAxios/usePublicAxios";
import useProducts from "../../Hooks/usePeoducts/useProducts";
import useAuth from "../../Hooks/useAuth/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";
import { FaHeart } from "react-icons/fa6";

const Card = ({ product }) => {
  const [icon, setIcon] = useState(false);
  const navigate = useNavigate();
  const axiosPublic = usePublicAxios();
  const [, refetch] = useProducts();
  const { user } = useAuth();
  const [cartItem, setCaetItem] = useState(true);

  const AdddWishList = async (product) => {
    if (user) {
      const wishlist = {
        name: product.name,
        price: product.price,
        image: product.image1,
        productId: product._id,
        quantity: 1,
        useName: user.displayName,
        userEmail: user.email,
      };
      // console.log(wishlist);
      const res = await axiosPublic.post("/wishlist", wishlist);
      console.log(res.data);
      if (res.data.acknowledged === true) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Add your Wishlist`,
          showConfirmButton: false,
          timer: 1500,
        });
        setIcon(true);
        refetch();
      }
      if (res.data.insertId === null) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `Already added your Wishlist`,
          showConfirmButton: false,
          timer: 1500,
        });
        setIcon(true);
      }
      refetch();
    } else {
      Swal.fire({
        title: "Please Login?",
        text: "You won't be able to Add Wishlist !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };
  const handleAddToCart = async (product) => {
    // console.log(product);
    if (user) {
      const addtocart = {
        name: product.name,
        price: product.price,
        image: product.image1,
        productId: product._id,
        quantity: 1,
        useName: user.displayName,
        userEmail: user.email,
      };
      const res = await axiosPublic.post("/addtocart", addtocart);
      console.log(res.data);
      if (res.data.message) {
        setCaetItem(false);
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Add to Cart Done....`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
      if (res.data.insertId === null) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `Already have your Cart......!`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    } else {
      Swal.fire({
        title: "Please Login?",
        text: "You won't be able to Add Cart !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };
  return (
    <div className="my-5   space-y-4 relative group">
      <div className="shop-containe image-containerr relative">
        <img
          src={product.image1}
          alt=""
          className="w-[268px]  hover-opacity h-[342px] z-10  transition-all"
        />
      </div>
      <div>
        <h1 className="text-xl hover:text-[#01bad4] duration-500">
          {product.name}
        </h1>
        <p>$ {product.price}</p>
      </div>

      <div className="shop-btn">
        <div className="absolute  -translate-y-12 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500  top-1/3 space-y-4  text-center left-16 ">
          <Link to={`/products/${product._id}`}>
            {" "}
            <button className="bg-[white]  duration-300 hover:text-white hover:bg-[#222222] block  w-40 p-2 px-5  rounded-3xl text-black text-center">
              Quick Shop
            </button>
          </Link>

          {cartItem === false ? (
            <>
              {" "}
              <div className="tooltip" data-tip="Allready Added to Cart">
                <p>Done</p>
              </div>
            </>
          ) : (
            <>
              {" "}
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-[white] duration-300 hover:text-white hover:bg-[#222222]  w-40 p-2 px-5  rounded-3xl text-black"
              >
                Add To Cart
              </button>
            </>
          )}
        </div>
        <div className="absolute top-2  left-2">
          <button>
            {icon === true ? (
              <>
                <div className="tooltip" data-tip="Allreay Added to Wishlist">
                  <FaHeart className="text-black duration-200 text-2xl" />
                  {/* <button className="btn">Hover me</button> */}
                </div>
              </>
            ) : (
              <>
                <button onClick={() => AdddWishList(product)}>
                  {" "}
                  <CiHeart className="hover:text-[#01bad4] duration-200 text-2xl" />
                </button>
              </>
            )}
          </button>
        </div>
      </div>
      {/* <button>
        <Drawer></Drawer>
      </button> */}
    </div>
  );
};

export default Card;
