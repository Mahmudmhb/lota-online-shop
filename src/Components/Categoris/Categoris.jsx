import "./Categoris.css";
const Categoris = () => {
  return (
    <div className=" w-5/6 mx-auto my-10">
      <div className="md:flex gap-5 my-10 justify-between">
        <div className="image-container md:w-[570px]  md:h-[590px]  relative">
          <img
            src="https://janstudio.net/claue/demo/wp-content/uploads/2016/04/women.jpg"
            alt=""
            className=""
          />
          <button className="absolute bottom-4 right-1/3 w-[150px] font-bold  bg-white p-2 px-4">
            Women
          </button>
        </div>

        <div>
          <div className="md:flex mb-5 gap-5">
            <div className="md:h-[300px] md:w-[270px]  relative image-container  w-full">
              <img
                src="https://janstudio.net/claue/demo/wp-content/uploads/2016/09/p5-4.jpg"
                alt=""
              />
              <button className="absolute bottom-4 right-1/3 w-[150px] font-bold  bg-white p-2 px-4">
                Footwear
              </button>
            </div>
            <div className="md:h-[300px]  md:w-[270px] relative image-container w-full">
              <img
                src="https://janstudio.net/claue/demo/wp-content/uploads/2016/04/watch.jpg"
                alt=""
                className="cursor-zoom-in"
              />
              <button className="absolute bottom-4 right-1/3 w-[150px] font-bold  bg-white p-2 px-4">
                Watches
              </button>
            </div>
          </div>
          <div className="md:h-[270px] relative md:w-[570px] w-full image-container  ">
            <img
              src="https://janstudio.net/claue/demo/wp-content/uploads/2016/04/acessories.jpg"
              alt=""
            />
            <button className="absolute bottom-4 right-1/3 w-[150px] font-bold  bg-white p-2 px-4">
              Acessories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categoris;
