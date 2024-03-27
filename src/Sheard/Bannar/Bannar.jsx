const Bannar = ({ banner, title, text }) => {
  return (
    <div>
      <div className="h-[160px ] relative banner hero-overlay justify-center text-white z-10">
        <img src={banner} alt="" className="opacity-80" />
        <div className="hero-overlay w-full h-full"></div>
        <div className="absolute md:top-1/3 top-2 right-[44%] z-10">
          <h1 className=" uppercase md:text-3xl text-center font-extrabold ">
            {title}
          </h1>
          <p className=" font-libre baskerville italic text-center">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
