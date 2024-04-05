import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import usePublicAxios from "../../Layout/usePublicAxios/usePublicAxios";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper/modules";
import { CiHeart } from "react-icons/ci";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa6";
import "./ProductDetails.css";
import useProducts from "../../Hooks/usePeoducts/useProducts";
import Heading from "../../Sheard/Heading/Heading";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth/useAuth";

const ProductDetails = () => {
  const [icon, setIcon] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosPublic = usePublicAxios();
  const { id } = useParams();
  const [, refetch] = useProducts();

  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(1);
  const [activeTab, setActiveTab] = useState(1);
  const [category, setCategory] = useState([]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    const handleProduct = async () => {
      const res = await axiosPublic.get(`/products/${id}`);
      setProduct(res.data);
      if (res.data) {
        const category = await axiosPublic.get(
          `/product/${product.categories}`
        );
        setCategory(category.data);
      }
    };
    handleProduct();
  }, [axiosPublic, id, product.categories]);

  const {
    name,

    price,
    shortDescription,
    categories,
    color,
    size,
    heading,
    description,
    additionalInformation,
    image1,
    image2,
    image3,
    image4,
    SKU,
    tags,
  } = product;
  const TotalcountPrice = parseFloat(count * price);

  const handleAddToCart = async () => {
    const addtocart = {
      name: product.name,
      price: TotalcountPrice,
      image: product.image1,
      productId: product._id,
      quantity: count,
      useName: user.displayName,
      userEmail: user.email,
    };

    const res = await axiosPublic.post("/addtocart", addtocart);
    console.log(res.data);
    if (res.data.message) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Add to Cart Done....`,
        showConfirmButton: false,
        timer: 1500,
      });
      if (res.data.insertId === null) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `Already have your Cart......!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

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

  return (
    <div className="  w-5/6 mx-auto my-10 ">
      <div className="md:flex gap-6">
        <div>
          <>
            <Swiper
              effect={"cube"}
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              pagination={true}
              modules={[EffectCube, Pagination]}
              className="mySwiper md:w-[500px] md:h-[600px]"
            >
              <SwiperSlide>
                <img src={image1} className="md:w-[500px] md:h-[600px]" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image2} className="md:w-[500px] md:h-[600px]" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image3} className="md:w-[500px] md:h-[600px]" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image4} className="md:w-[500px] md:h-[600px]" />
              </SwiperSlide>
            </Swiper>
          </>
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-2xl font-thin">$ {price}</p>
          <p>{shortDescription}</p>
          <div>
            <p className="text-2xl my-5  font-bold items-center"> COLOR :</p>
            <p className="flex ">
              {color?.map((col, idx) => (
                <p
                  key={idx}
                  className="bg-[#01bad4] mr-5 px-5 text-white  rounded-3xl  uppercase "
                >
                  {" "}
                  {col}
                </p>
              ))}
            </p>
          </div>
          <div>
            <p className="text-2xl my-5  font-bold items-center"> SIZE :</p>
            <p className="flex ">
              {size?.map((col, idx) => (
                <p
                  key={idx}
                  className="bg-[#01bad4] mr-5 px-5 text-white  rounded-3xl  uppercase "
                >
                  {" "}
                  {col}
                </p>
              ))}
            </p>
          </div>
          <div>
            {count === 1 ? (
              ""
            ) : (
              <p className="text-2xl font-thin">
                ${TotalcountPrice.toFixed(2)}
              </p>
            )}
          </div>
          <div className="flex gap-4 items-center  my-5">
            <div className="text-xl border rounded-2xl font-bold flex items-center border-black justify-center w-40">
              <button
                onClick={() => setCount(count - 1)}
                className=" text-2xl mr-2"
              >
                <FaMinus></FaMinus>
              </button>
              <p>
                <input
                  type="number"
                  value={count}
                  min={1}
                  className="w-14 text-center"
                />
              </p>
              <button onClick={() => setCount(count + 1)} className="text-2xl">
                <FaPlus />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className=" w-40 bg-[#01bad4] text-white rounded-3xl p-2 uppercase font-bold"
            >
              Add to Cart
            </button>
            {/* className="    h-11 w-11 border rounded-full hover:text-[#01bad4] duration-200 hover:border-[#01bad4]  text-center" */}
            <button onClick={() => AdddWishList(product)}>
              {icon === true ? (
                <>
                  <FaHeart className="text-black h-11 w-11 border rounded-full hover:text-[#01bad4] duration-200 hover:border-[#01bad4]  text-center  text-2xl" />
                </>
              ) : (
                <>
                  <CiHeart className="hover:text-[#01bad4] h-11 w-11 border rounded-full  duration-200 hover:border-[#01bad4]  text-center text-2xl" />
                </>
              )}
            </button>
          </div>
          <h1>SKU: {SKU}</h1>
          <div>
            <h1>
              {" "}
              Categorices:
              <button className="text-xl  ml-2  items-center">
                {" "}
                {categories}
              </button>
            </h1>
          </div>
          <div className="flex items-center ">
            <p className="  items-center"> Tags :</p>
            <p className="flex ">
              {tags?.map((col, idx) => (
                <p key={idx} className="text-xl ml-2  items-center">
                  {" "}
                  {col},
                </p>
              ))}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="my-10 buttons text-center">
          <button
            className={
              activeTab === 1
                ? "active-tab rounded-3xl border-2 border-black  "
                : ""
            }
            onClick={() => handleTabClick(1)}
          >
            Description
          </button>
          <button
            className={
              activeTab === 2
                ? " active-tab rounded-3xl border-2 border-black  "
                : ""
            }
            onClick={() => handleTabClick(2)}
          >
            Additional Information
          </button>
          <button
            className={
              activeTab === 3
                ? "active-tab rounded-3xl border-2 border-black  "
                : ""
            }
            onClick={() => handleTabClick(3)}
          >
            Reviews
          </button>
        </div>
        <div>
          {activeTab === 1 && (
            <>
              {description}
              <div className="md:flex justify-center my-5">
                <img
                  src={image1}
                  alt=""
                  className="md:w-[350px] md:h-[400px]"
                />
                <img
                  src={image2}
                  alt=""
                  className="md:w-[350px] md:h-[400px]"
                />
                <img
                  src={image3}
                  alt=""
                  className="md:w-[350px] md:h-[400px]"
                />
              </div>
            </>
          )}
        </div>
        <div>
          {activeTab === 2 && (
            <>
              <div className="flex border items-center ">
                <h1 className="w-96 border-r ml-3 py-3">Brand</h1>
                <span className="  py-3 ml-4">H&M, Mango, Nike, Zara</span>
              </div>
              <div className="flex border items-center ">
                <h1 className="w-96 border-r py-3  ml-3">Color</h1>
                <span className="  py-3 ml-4">
                  {color?.map((col, idx) => (
                    <span className="mr-4" key={idx}>
                      {col},
                    </span>
                  ))}
                </span>
              </div>
              <div className="flex border items-center ">
                <h1 className="w-96 border-r py-3  ml-3">Size</h1>
                <span className="  py-3 ml-4">
                  {size?.map((col, idx) => (
                    <span className="mr-4" key={idx}>
                      {col},
                    </span>
                  ))}
                </span>
              </div>
            </>
          )}
        </div>
        <div>
          {activeTab === 3 && (
            <>
              {user?.email ? (
                <> </>
              ) : (
                <>
                  <h1>
                    BE THE FIRST TO REVIEW “SHORT SLEEVED HOODIE WITH STEP HEM”
                  </h1>
                  <p>
                    You must be <Link to="/login">logged</Link> in to post a
                    review.
                  </p>
                </>
              )}
            </>
          )}
        </div>
      </div>
      <div>
        <Heading title={"RELATED PRODUCTS"}></Heading>

        <div className="grid md:grid-cols-4  gap-4">
          {category.slice(0, 4).map((product) => (
            <div key={product._id}>
              <RelatedProducts product={product}></RelatedProducts>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
