import { useParams } from "react-router-dom";
import usePublicAxios from "../../Layout/usePublicAxios/usePublicAxios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper/modules";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

const Model = () => {
  const axiosPublic = usePublicAxios();
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(1);
  useEffect(() => {
    const handleProduct = async () => {
      const res = await axiosPublic.get(`/products/${id}`);
      setProduct(res.data);
    };
    handleProduct();
  }, [axiosPublic, id]);

  const {
    name,
    user,
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
  const totalCount = parseFloat(count * price);
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button onClick={() => document.getElementById("my_modal_3").showModal()}>
        Select Options
      </button>
      <dialog id="my_modal_3" className="modal text-black">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
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
                  <p className="text-2xl my-5  font-bold items-center">
                    {" "}
                    COLOR :
                  </p>
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
                  <p className="text-2xl my-5  font-bold items-center">
                    {" "}
                    SIZE :
                  </p>
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
                      ${totalCount.toFixed(2)}
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
                        className="w-14 text-center"
                      />
                    </p>
                    <button
                      onClick={() => setCount(count + 1)}
                      className="text-2xl"
                    >
                      <FaPlus />
                    </button>
                  </div>

                  <button className=" w-40 bg-[#01bad4] text-white rounded-3xl p-2 uppercase font-bold">
                    Add to Cart
                  </button>
                  <button className="    h-11 w-11 border rounded-full hover:text-[#01bad4] duration-200 hover:border-[#01bad4]  text-center">
                    <CiHeart className="text-2xl mx-auto"></CiHeart>
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
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Model;
