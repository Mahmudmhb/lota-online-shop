import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
const RelatedProducts = ({ product }) => {
  return (
    <div className="my-5   space-y-4 relative group">
      <div className="shop-containe image-containerr relative">
        <img
          src={product.image1}
          alt=""
          className="w-[268px]  hover-opacity h-[342px] z-10 group-hover:opacity-0 transition-all duration-300"
        />
        <img
          src={product.image2}
          alt=""
          className="w-[268px]  hover-opacity h-[342px] absolute top-0 -z-20"
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
          <button className="bg-[white] duration-300 hover:text-white hover:bg-[#222222]  w-40 p-2 px-5  rounded-3xl text-black">
            Select Options
          </button>
        </div>
        <div className="absolute top-2  left-2">
          <button>
            <CiHeart className="hover:text-[#01bad4] duration-200 text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
