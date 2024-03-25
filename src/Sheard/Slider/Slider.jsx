import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div className="bg-[#f8f8fa] ">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-[580px] w-5/6 mx-auto"
      >
        <SwiperSlide>
          <div>
            <img
              src="https://janstudio.net/claue/demo/wp-content/uploads/2016/11/slider3.png"
              alt=""
              className="relative"
            />

            <div className="absolute top-[180px]  right-1/3 text-center ">
              <div className="my-10">
                <h1 className="font-libre baskerville italic font-bold text-[#878787] uppercase">
                  SUMMER 2024
                </h1>
                <h1 className="text-[50px]  font-extrabold text-[#222222]">
                  FLASH SALE
                </h1>

                <button className=" text-[#222222] border-2 border-[#222222] rounded-full px-8 mt-5   p-1  hover:border-[#01bad4] hover:text-white duration-300 hover:bg-[#01bad4] transform">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://janstudio.net/claue/demo/wp-content/uploads/2016/11/slider2.png"
            alt=""
            className="relative"
          />
          <div className="absolute top-[180px] right-0  ">
            <div className="my-10">
              <h1 className="font-libre baskerville italic text-[#878787] font-bold">
                2024 New Arrivals
              </h1>
              <h1 className="text-[50px]  font-extrabold text-[#222222]">
                SALE OFF! UP TO 70%
              </h1>
              <p className="text-[#878787]">
                Duis aute irure dolor in reprehenderit in voluptate velit
                essecillum dolore <br />
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                nonproident
              </p>
              <button className=" text-[#222222] border-2 border-[#222222] rounded-full px-8 mt-5   p-1  hover:border-[#01bad4] hover:text-white duration-300 hover:bg-[#01bad4] transform">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://janstudio.net/claue/demo/wp-content/uploads/2016/11/slider1.png"
            alt=""
            className="relative"
          />
          <div className="absolute top-[180px]  ">
            <div className="my-10">
              <h1 className="font-libre baskerville italic font-bold text-[#878787]">
                Spring - Summer 2016
              </h1>
              <h1 className="text-[50px]  font-extrabold text-[#222222]">
                BEST OF COLLECTION!
              </h1>
              <p className="text-[#878787]">
                Duis aute irure dolor in reprehenderit in voluptate velit
                essecillum dolore <br />
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                nonproident
              </p>
              <button className=" text-[#222222] border-2 border-[#222222] rounded-full px-8 mt-5   p-1  hover:border-[#01bad4] hover:text-white duration-300 hover:bg-[#01bad4] transform">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
